---
slug: Next-Nuxt-Nest-description
title: Next、Nuxt、Nest 这些名称你分得清吗
date: 2025-01-09
authors: zhenchang
tags: [Next, Nuxt, Nest]
keywords: [Next, Nuxt, Nest]
description: Next、Nuxt、Nest 应用框架简介。
image: https://static.augustf.top/img/blog/nextnuxtnest.webp
---

前端的技术框架层出不穷，各种生态衍生的库更是多到让人眼花缭乱，光是看着这些名字就一时让人分不清谁是干什么的。

这与 JavaScript 这门语言的广泛的应用有关，由它衍生出的运行时环境就有 Node.js 和各种浏览器的内核例如：Chrome V8，然后随着各种运行时环境中发展出来的应用场景 衍生出来的技术框架。有专门应用于服务端的和客户端的技术，同时也有支持服务端渲染的。

基本上前端框架就是围绕着 Vue 和 React 两大生态，它们两者互相借鉴，又各具特色和优势。

这不最近我就错把 Nest 当做 Next ，被两者的学习资料搞混淆了。

<!-- truncate -->

对于这种容易混淆的概念，我们需要把它们罗列在一起对比着看，这里来梳理下：

## Next

**官网**：[https://nextjs.org](https://nextjs.org)

**文档**：

- 英文：[https://nextjs.org/docs](https://nextjs.org/docs)
- 中文：[https://www.nextjs.cn](https://www.nextjs.cn)

> The React Framework for the Web.

Next 通常和 .js 一起拼写，Next.js 是一个构建在 React 之上的用于开发前后端的应用程序框架。

## Nuxt

**官网**：[https://nuxt.com](https://nuxt.com)

**文档**：

- 英文：[https://nuxt.com/docst](https://nuxt.com/docst)
- 中文：[https://www.nuxtjs.cn/guide](https://www.nuxtjs.cn/guide)

> The Intuitive Vue Framework  
> Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites with confidence.


Nuxt.js 是一个基于 Vue.js 的轻量级应用框架，可用来创建服务端渲染(SSR) 应用，也可充当静态站点引擎生成静态站点应用，具有优雅的代码结构分层和热加载等特性。

## Nest

**官网**：[https://nestjs.com](https://nestjs.com)

**文档**：

- 英文：[https://docs.nestjs.cn](https://docs.nestjs.cn)
- 中文：[https://docs.nestjs.com](https://docs.nestjs.com)

> A progressive Node.js framework for building efficient, reliable and scalable server-side applications.


一个渐进式服务端 Node.js 框架，用于构建高效、可靠和可扩展的服务器端应用程序。

类似于 Express 、Koa，在底层 Nest 使用强大的 HTTP Server 框架，上面又提供了一定程度的抽象。友好支持 TypeScript。

## 总结

Next.js 和 Nuxt 的应用场景基本一致，当你要创建一个带有后端服务的 Web 端应用程序的时候，如果你比较熟悉 Vue 技术栈你就选择 Nuxt 来构建，如果你 对 React 技术更有把握，那就选择 Next.js 。它们都支持服务端渲染（SSR）。

而如果你只是需要一个后端服务，向外提供 API 接口，那就使用 Nest.js 来搭建你的项目。