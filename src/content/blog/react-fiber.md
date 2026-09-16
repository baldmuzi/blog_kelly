---
title: 深入理解 React Fiber 架构与调度机制
description: 从浏览器一帧的时间预算讲起，拆解 Fiber 的构建、优先级调度与可中断渲染，附带一份简化版调度器实现。
pubDate: 2026-03-12
category: 前端开发
tags:
  - React
  - 源码
  - 性能优化
---

React 16 引入的 Fiber 架构，本质上是为了解决一个具体问题：大型组件树的一次性渲染会长时间占用主线程，导致画面卡顿、输入延迟。这篇文章尝试从拆解它是怎么做到"可中断"的。

## 为什么需要可中断的渲染

浏览器每一帧大约有 16.6ms 的预算用于布局、绘制与合成。如果 JavaScript 在一次同步渲染中占满这段时间，用户就会感知到明显的卡顿。传统的递归渲染无法在途中暂停，而 Fiber 把渲染工作拆成了一个个可以被打断、恢复、甚至丢弃的"单元"。

> 浏览器每一帧大约有 16.6ms 的预算，超出这个预算，用户就会感到卡顿。

## Fiber 节点与双缓冲树

每个 Fiber 节点对应一个组件实例或 DOM 节点，记录了类型、props、状态以及指向父节点、子节点、兄弟节点的指针。React 在内存中维护两棵树——current 树和 workInProgress 树——渲染完成后通过指针切换完成"双缓冲"，避免用户看到渲染中间态。

```ts
function scheduleWork(fiber, priority) {
  const root = markUpdateTimeFromFiberToRoot(fiber)
  ensureRootIsScheduled(root, priority)
}

function performUnitOfWork(fiber) {
  const next = beginWork(fiber)
  if (next === null) {
    completeUnitOfWork(fiber)
  }
  return next
}
```

## 一个简化版调度器

为了直观理解"时间切片"，我用不到 200 行代码实现了一个简化版调度器，核心思路是：

- 使用 MessageChannel 模拟宏任务切片，避免阻塞渲染
- 按任务的过期时间排序队列，过期越久优先级越高
- 在每个时间片耗尽时主动让出主线程，等待下一次调度

完整实现和调试过程放在了文末的代码仓库里，感兴趣可以对照源码逐行验证。
