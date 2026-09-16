---
title: CSS 容器查询实战：告别对断点的依赖
description: 用几个真实组件说明 Container Query 什么时候比媒体查询更合适。
pubDate: 2025-12-18
category: 前端开发
tags:
  - CSS
---

（占位内容）媒体查询关心的是视口尺寸，但很多组件真正关心的是"自己所在容器"的尺寸。

## 什么时候该用容器查询

当同一个组件会被放进不同宽度的父容器（侧边栏、主内容区、弹层）时，容器查询能让组件自己响应所在容器的尺寸，而不用为每个使用场景单独写断点。

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card { flex-direction: row; }
}
```

这类组件级别的响应式，是容器查询相比媒体查询更合适的地方。
