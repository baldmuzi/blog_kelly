---
title: TypeScript 概论及运用
description: 从 TypeScript 的诞生背景、类型系统到安装使用，快速梳理这门语言为什么适合大型前端项目。
pubDate: 2023-05-14
tags:
  - TypeScript
  - 前端
  - 学习笔记
---

<img src="../../images/blog/typescript/ppt-direct-01.webp" alt="TypeScript 演示文稿目录，列出 TypeScript 是什么、发展、入门和前景四个部分">
<img src="../../images/blog/typescript/ppt-direct-02.webp" alt="TypeScript 是什么一节的章节页，列出定义、诞生背景和使用场景">

TypeScript 是一种由微软开发的自由、开源的编程语言。它是 JavaScript 的一个超集，在 JavaScript 的基础上增加了可选的静态类型和基于类的面向对象编程能力。

TypeScript 也持续吸收最新的 JavaScript 特性，包括 ECMAScript 2015 以及后续提案中的异步功能、Decorators 等，帮助我们构建更加健壮、易维护的组件。

可以把 TypeScript 和 JavaScript 的关系理解为 Less 和 CSS 的关系：Less 对 CSS 做了扩展，TypeScript 对 JavaScript 做了扩展；Less 最终会编译成 CSS，而我们编写的 TypeScript 代码最终也会被编译成 JavaScript。

<img src="../../images/blog/typescript/01.webp" alt="TypeScript 超集关系和类型标注示例，对比 TypeScript 与 JavaScript 代码">

## 诞生背景

TypeScript 的出现，和 JavaScript 在大型项目中的实践需求有关：

- JavaScript 诞生之初并没有考虑得很复杂，变量提升、数组和对象难以区分、基本类型的包装对象容易混淆等设计，使得代码约束相对宽松。
- 随着前端技术发展，应用需要满足比过去更加复杂的用户需求，项目规模也不断扩大。
- JavaScript 语言本身的局限性，让大型项目的开发、协作和长期维护变得困难。


从 JavaScript 的历史背景出发，PPT 进一步展示了为什么大型项目需要更明确的类型约束。

<img src="../../images/blog/typescript/ppt-direct-07.webp" alt="TypeScript 诞生背景：JavaScript 类型系统和大型项目需求带来的问题">
<img src="../../images/blog/typescript/ppt-direct-08.webp" alt="第一代前端技术，以 HTML、CSS、JavaScript 和早期 Netscape 页面为例">
<img src="../../images/blog/typescript/ppt-direct-09.webp" alt="第二代前端技术：模板语言、jQuery 和动态页面逐渐普及">
<img src="../../images/blog/typescript/ppt-direct-10.webp" alt="第三代前端技术：HTML5、CSS3 和移动端需求推动前端发展">
<img src="../../images/blog/typescript/ppt-direct-11.webp" alt="第三代前端技术中的 JavaScript 框架、MVC 和前后端分离">
<img src="../../images/blog/typescript/ppt-direct-12.webp" alt="TypeScript 诞生背景中的代表人物介绍">



## TypeScript 与 JavaScript

TypeScript 包含 JavaScript 的全部语法，并在此基础上提供类型检查、接口、枚举、泛型等能力。代码可以先通过 TypeScript 编译器检查，再输出浏览器和 Node.js 能够执行的 JavaScript。


## TypeScript 的使用场景

TypeScript 的使用场景很广，常见方向包括：

- **Web 开发**：单页面应用、响应式 Web 应用、电商网站等。
- **移动开发**：iOS 和 Android 应用程序。
- **游戏开发**：HTML5 游戏、手机游戏等。
- **服务器端开发**：RESTful API、Web 服务、消息队列等。


这些页面对应 TypeScript 的实际应用范围：Web、移动端、游戏和服务端开发都可以使用它。
<img src="../../images/blog/typescript/ppt-direct-18.webp" alt="TypeScript 使用场景：Web、移动应用、游戏和服务端开发">




## TypeScript 的发展
<img src="../../images/blog/typescript/ppt-direct-13.webp" alt="TypeScript 发展一节的章节页，概览发展、优势和应用">

<img src="../../images/blog/typescript/ppt-direct-14.webp" alt="TypeScript 发展历程（2012 至 2017）的版本时间线">
<img src="../../images/blog/typescript/ppt-direct-15.webp" alt="TypeScript 发展历程（2018 至 2021）的版本时间线">
<img src="../../images/blog/typescript/ppt-direct-16.webp" alt="TypeScript 重大事件时间线，展示其在 GitHub、Stack Overflow 和 npm 的影响力">

## TypeScript 的优势
<img src="../../images/blog/typescript/ppt-direct-17.webp" alt="TypeScript 相比 JavaScript 的优势：编译期错误检查、类型系统以及模块、泛型和接口支持">


## TypeScript 的安装与使用

<img src="../../images/blog/typescript/ppt-direct-19.webp" alt="走进 TypeScript 一节的章节页，概览安装、代码行为和基本类型">
<img src="../../images/blog/typescript/ppt-direct-20.webp" alt="TypeScript 安装与使用流程：创建 TS 文件、编译为 JS 并执行">

安装 TypeScript 后，可以使用 `tsc` 命令把 `.ts` 文件编译为 `.js` 文件。
<img src="../../images/blog/typescript/03.webp" alt="终端执行 npm i -g typescript 安装 TypeScript">
<img src="../../images/blog/typescript/04.webp" alt="终端执行 tsc -v 查看 TypeScript 版本">

基本流程如下：

1. 创建 `hello.ts` 文件。
2. 在终端输入 `tsc hello.ts`，将 TypeScript 编译为 JavaScript。
3. 在终端输入 `node hello.js`，执行编译后的代码。

安装和使用部分可以结合 PPT 中的命令行示例来理解：先创建 `.ts` 文件，再通过编译器生成 JavaScript。

<img src="../../images/blog/typescript/05.webp" alt="Visual Studio Code 中创建 hello.ts 并使用 tsc 编译">
<img src="../../images/blog/typescript/06.webp" alt="Visual Studio Code 对比 hello.ts 与编译后的 hello.js，并运行 node hello.js">

<img src="../../images/blog/typescript/ppt-direct-22.webp" alt="使用 ts-node 简化 TypeScript 执行流程的安装和命令示例">


## 常见类型

TypeScript 中常见的原始类型包括：

```ts
number
string
boolean
null
undefined
symbol
```

对象类型使用 `object` 表示，数组也可以明确声明元素类型，例如：

```ts
let user: object
let scores: number[]
```

PPT 中的类型示例还涵盖了原始类型、对象、数组、函数和组合类型，可以作为上面代码的视觉补充。
<img src="../../images/blog/typescript/ppt-direct-24.webp" alt="TypeScript 原始类型、对象类型和数组类型示例">
<img src="../../images/blog/typescript/ppt-direct-25.webp" alt="TypeScript 函数类型、void 返回值和可选参数示例">

<img src="../../images/blog/typescript/ppt-direct-23.webp" alt="TypeScript 代码意外行为示例，展示类型错误提示和运行结果">


## TypeScript 的前景

在华为云发布的《“2022 前端开发者现状报告”解读》中，有 84.1% 的受访者表示使用过 TypeScript。随着前端项目规模扩大、团队协作要求提高，静态类型检查带来的安全感和可维护性会越来越重要。

对于 TypeScript 的未来，前端开发者也普遍看好。只有不到 13% 的受访者认为 JavaScript 在前端的地位会始终屹立不倒，更多人愿意在新项目中尝试 TypeScript。

<img src="../../images/blog/typescript/08.webp" alt="TypeScript 前景调查结果柱状图，比较开发者对 TypeScript 和 JavaScript 的看法">

从使用率到生态建设，PPT 的后续页面展示了 TypeScript 在团队协作、编辑器提示和大型项目维护中的价值。

<img src="../../images/blog/typescript/ppt-direct-26.webp" alt="TypeScript 接口和接口继承代码示例">
<img src="../../images/blog/typescript/ppt-direct-27.webp" alt="TypeScript 元组类型和其他类型机制示例">
<img src="../../images/blog/typescript/ppt-direct-28.webp" alt="Java 与 TypeScript 的共同点对比：强类型、模块泛型接口和面向对象">
<img src="../../images/blog/typescript/ppt-direct-29.webp" alt="TypeScript 前景一节的章节页，介绍开发者青睐和招聘市场欢迎度">

实际开发时，类型检查、自动补全和编译配置会共同组成 TypeScript 的工作流。

<img src="../../images/blog/typescript/ppt-direct-30.webp" alt="华为云前端开发者报告：84.1% 的受访者使用过 TypeScript">
<img src="../../images/blog/typescript/ppt-direct-31.webp" alt="TypeScript 前景调查：87.2% 的受访者看好 TypeScript 的发展">

---

本文内容与配图整理自本人发布的两篇掘金文章：

- [typescript 概论及运用｜青训营笔记](https://juejin.cn/post/7232846086833143867)
- [TypeScript 介绍 PPT](https://juejin.cn/post/7321930742400614437)
