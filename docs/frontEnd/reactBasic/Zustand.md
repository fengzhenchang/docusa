---
title: Zustand
hide_title: true
sidebar_position: 7
---

## 快速上手

[Zustand Documentation](https://docs.pmnd.rs/zustand/getting-started/introduction)

### store/index.js - 创建 store

```javascript
import { create } from "zustand"

const useStore = create((set) => {
  return {
    count: 0,
    inc: () => {
      set((state) => ({ count: state.count + 1 }))
    }
  }
})

export default useStore
```

### app.js - 绑定组件

```jsx
import useStore from "./store/useCounterStore.js"

function App() {
  const { count, inc } = useStore()
  return <button onClick={inc}>{count}</button>
}

export default App
```

## 异步支持

对于异步操作的支持不需要特殊的操作，直接在函数中编写异步逻辑，最后把接口的数据放到 set 函数中返回即可

### store/index.js - 创建 store

```javascript
import { create } from "zustand"

const URL = "http://geek.itheima.net/v1_0/channels"

const useStore = create((set) => {
  return {
    count: 0,
    ins: () => {
      return set((state) => ({ count: state.count + 1 }))
    },
    channelList: [],
    fetchChannelList: async () => {
      const res = await fetch(URL)
      const jsonData = await res.json()
      set({ channelList: jsonData.data.channels })
    }
  }
})

export default useStore
```

### app.js - 绑定组件

```jsx
import { useEffect } from "react"
import useChannelStore from "./store/channelStore"

function App() {
  const { channelList, fetchChannelList } = useChannelStore()

  useEffect(() => {
    fetchChannelList()
  }, [fetchChannelList])

  return (
    <ul>
      {channelList.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}

export default App
```

## 切片模式

场景：当我们单个 store 比较大的时候，可以采用一种**切片模式**进行模块拆分再组合

### 拆分并组合切片

```javascript
import { create } from "zustand"

// 创建counter相关切片
const createCounterStore = (set) => {
  return {
    count: 0,
    setCount: () => {
      set((state) => ({ count: state.count + 1 }))
    }
  }
}

// 创建channel相关切片
const createChannelStore = (set) => {
  return {
    channelList: [],
    fetchGetList: async () => {
      const res = await fetch(URL)
      const jsonData = await res.json()
      set({ channelList: jsonData.data.channels })
    }
  }
}

// 组合切片
const useStore = create((...a) => ({
  ...createCounterStore(...a),
  ...createChannelStore(...a)
}))
```

### 组件使用

```jsx
function App() {
  const { count, inc, channelList, fetchChannelList } = useStore()
  return (
    <>
      <button onClick={inc}>{count}</button>
      <ul>
        {channelList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
```

## 对接 DevTools

> 简单的调试我们可以安装一个 名称为 simple-zustand-devtools 的调试工具

### 安装调试包

```bash
npm i simple-zustand-devtools -D
```

### 配置调试工具

```javascript
import create from "zustand"

// 导入核心方法
import { mountStoreDevtool } from "simple-zustand-devtools"

// 省略部分代码...

// 开发环境开启调试
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("channelStore", useChannelStore)
}

export default useChannelStore
```

### 打开 React 调试工具

![image.png](assets/g02.png)
