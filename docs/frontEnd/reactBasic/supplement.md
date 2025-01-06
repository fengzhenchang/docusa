---
title: 补充知识
hide_title: true
sidebar_position: 5
---

## useReducer
### 基础使用

作用: 可以替代 useState，用于处理复杂的状态管理。

```jsx
import { useReducer } from "react"

// 1. 定义reducer函数，根据不同的action返回不同的新状态
function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return state + 1
    case "DEC":
      return state - 1
    default:
      return state
  }
}

function App() {
  // 2. 使用useReducer分派action
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <>
      {/* 3. 调用dispatch函数传入action对象 触发reducer函数，分派action操作，使用新状态更新视图 */}
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      {state}
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
    </>
  )
}

export default App
```

### 更新流程

![image.png](./assets/e01.png)

### 分派 action 传参

> 做法：分派 action 时如果想要传递参数，需要在 action 对象中添加一个 payload 参数，放置状态参数

```jsx
import { useReducer } from "react"

// 定义reducer
// 1. 根据不同的action返回不同的新状态
function reducer(state, action) {
  console.log("reducer执行了")
  switch (action.type) {
    case "INC":
      return state + 1
    case "DEC":
      return state - 1
    case "UPDATE":
      return state + action.payload
    default:
      return state
  }
}

function App() {
  // 2. 使用useReducer分派action
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <>
      {/* 3. 调用dispatch函数传入action对象 触发reducer函数，分派action操作，使用新状态更新视图 */}
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>
      {state}
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "UPDATE", payload: 100 })}>
        update to 100
      </button>
    </>
  )
}

export default App
```
## useMemo
作用：它在每次重新渲染的时候能够缓存计算的结果
### 看个场景
下面我们的本来的用意是想**基于 count 的变化计算阶乘**，但是当我们修改 num 状态的时候，求阶乘函数也会被执行，显然是一种浪费
```jsx
// useMemo
// 作用：在组件渲染时缓存计算的结果

import { useState } from 'react'

function factorialOf(n) {
  console.log('求阶乘函数执行了')
  return n <= 1 ? 1 : n * factorialOf(n - 1)
}

function App() {
  const [count, setCount] = useState(0)
  // 计算阶乘
  const sumByCount = factorialOf(count)

  const [num, setNum] = useState(0)

  return (
    <>
      {sumByCount}
      <button onClick={() => setCount(count + 1)}>+count:{count}</button>
      <button onClick={() => setNum(num + 1)}>+num:{num}</button>
    </>
  )
}

export default App
```
### useMemo 缓存计算结果
> 思路: 只有 count 发生变化时才重新进行计算

```jsx
import { useMemo, useState } from 'react'

function fib (n) {
  console.log('计算函数执行了')
  if (n < 3) return 1
  return fib(n - 2) + fib(n - 1)
}

function App() {
  const [count, setCount] = useState(0)
  // 计算斐波那契之和
  // const sum = fib(count)
  // 通过 useMemo 缓存计算结果，只有 count 发生变化时才重新计算
  const sum = useMemo(() => {
    return fib(count)
  }, [count])

  const [num, setNum] = useState(0)

  return (
    <>
      {sum}
      <button onClick={() => setCount(count + 1)}>+count:{count}</button>
      <button onClick={() => setNum(num + 1)}>+num:{num}</button>
    </>
  )
}

export default App
```
## React.memo
作用：允许组件在 props 没有改变的情况下跳过重新渲染
### 组件默认的渲染机制
> 默认机制：顶层组件发生重新渲染，这个组件树的子级组件都会被重新渲染

```jsx
import { useState } from 'react'

function Son() {
  console.log('子组件被重新渲染了')
  return <div>this is son</div>
}

function App() {
  const [, forceUpdate] = useState()
  console.log('父组件重新渲染了')
  return (
    <>
      <Son />
      <button onClick={() => forceUpdate(Math.random())}>update</button>
    </>
  )
}

export default App
```
### 使用 React.memo 优化
> 机制：只有 props 发生变化时才重新渲染
> 下面的子组件通过 memo 进行包裹之后，返回一个新的组件 MemoSon, 只有传给 MemoSon 的 props 参数发生变化时才会重新渲染

```jsx
import React, { useState } from 'react'

const MemoSon = React.memo(function Son() {
  console.log('子组件被重新渲染了')
  return <div>this is span</div>
})

function App() {
  const [, forceUpdate] = useState()
  console.log('父组件重新渲染了')
  return (
    <>
      <MemoSon />
      <button onClick={() => forceUpdate(Math.random())}>update</button>
    </>
  )
}

export default App
```
### props 变化重新渲染
```jsx
import React, { useState } from 'react'

const MemoSon = React.memo(function Son() {
  console.log('子组件被重新渲染了')
  return <div>this is span</div>
})

function App() {
  console.log('父组件重新渲染了')

  const [count, setCount] = useState(0)
  return (
    <>
      <MemoSon count={count} />
      <button onClick={() => setCount(count + 1)}>+{count}</button>
    </>
  )
}

export default App
```
### props 的比较机制
> 对于 props 的比较，进行的是‘浅比较’，底层使用 `Object.is` 进行比较，针对于对象数据类型，只会对比俩次的引用是否相等，如果不相等就会重新渲染，React 并不关心对象中的具体属性

```jsx
import React, { useState } from 'react'

const MemoSon = React.memo(function Son() {
  console.log('子组件被重新渲染了')
  return <div>this is span</div>
})

function App() {
  // const [count, setCount] = useState(0)
  const [list, setList] = useState([1, 2, 3])
  return (
    <>
      <MemoSon list={list} />
      <button onClick={() => setList([1, 2, 3])}>
        {JSON.stringify(list)}
      </button>
    </>
  )
}

export default App
```
说明：虽然俩次的list状态都是 `[1,2,3]` , 但是因为组件 App 两次渲染生成了不同的对象引用 list，所以传给 MemoSon 组件的 props 视为不同，子组件就会发生重新渲染
### 自定义比较函数
> 如果上一小节的例子，我们不想通过引用来比较，而是完全比较数组的成员是否完全一致，则可以通过自定义比较函数来实现

```jsx
import React, { useState } from 'react'

// 自定义比较函数
function arePropsEqual(oldProps, newProps) {
  console.log(oldProps, newProps)
  return (
    oldProps.list.length === newProps.list.length &&
    oldProps.list.every((oldItem, index) => {
      const newItem = newProps.list[index]
      console.log(newItem, oldItem)
      return oldItem === newItem
    })
  )
}

const MemoSon = React.memo(function Son() {
  console.log('子组件被重新渲染了')
  return <div>this is span</div>
}, arePropsEqual)

function App() {
  console.log('父组件重新渲染了')
  const [list, setList] = useState([1, 2, 3])
  return (
    <>
      <MemoSon list={list} />
      <button onClick={() => setList([1, 2, 3])}>
        内容一样{JSON.stringify(list)}
      </button>
      <button onClick={() => setList([4, 5, 6])}>
        内容不一样{JSON.stringify(list)}
      </button>
    </>
  )
}

export default App
```
## useCallback
### 看个场景
上一小节我们说到，当给子组件传递一个`引用类型` prop 的时候，即使我们使用了 `memo` 函数依旧无法阻止子组件的渲染，其实传递 prop 的时候，往往传递一个回调函数更为常见，比如实现子传父，此时如果想要避免子组件渲染，可以使用 `useCallback` 缓存回调函数
```jsx
import { memo, useState } from 'react'

const MemoSon = memo(function Son() {
  console.log('Son组件渲染了')
  return <div>this is son</div>
})

function App() {
  const [, forceUpdate] = useState()
  console.log('父组件重新渲染了')
  const onGetSonMessage = (message) => {
    console.log(message)
  }

  return (
    <div>
      <MemoSon onGetSonMessage={onGetSonMessage} />
      <button onClick={() => forceUpdate(Math.random())}>update</button>
    </div>
  )
}

export default App
```
### useCallback 缓存函数
> useCallback 缓存之后的函数可以在组件渲染时保持引用稳定，也就是返回同一个引用

```jsx
import { memo, useCallback, useState } from 'react'

const MemoSon = memo(function Son() {
  console.log('Son组件渲染了')
  return <div>this is son</div>
})

function App() {
  const [, forceUpdate] = useState()
  console.log('父组件重新渲染了')
  const onGetSonMessage = useCallback((message) => {
    console.log(message)
  }, [])

  return (
    <div>
      <MemoSon onGetSonMessage={onGetSonMessage} />
      <button onClick={() => forceUpdate(Math.random())}>update</button>
    </div>
  )
}

export default App
```
## forwardRef
作用：允许组件使用 ref 将一个 DOM 节点暴露给父组件
```jsx
import { forwardRef, useRef } from 'react'

const MyInput = forwardRef(function Input(props, ref) {
  return <input {...props} type="text" ref={ref} />
}, [])

function App() {
  const ref = useRef(null)

  const focusHandle = () => {
    console.log(ref.current.focus())
  }

  return (
    <div>
      <MyInput ref={ref} />
      <button onClick={focusHandle}>focus</button>
    </div>
  )
}

export default App
```
## useImperativeHandle
作用：如果我们并不想暴露子组件中的 DOM 而是想暴露子组件内部的方法
```jsx
import { forwardRef, useImperativeHandle, useRef } from 'react'

const MyInput = forwardRef(function Input(props, ref) {
  // 实现内部的聚焦逻辑
  const inputRef = useRef(null)
  const focus = () => inputRef.current.focus()

  // 暴露子组件内部的聚焦方法
  useImperativeHandle(ref, () => {
    return {
      focus,
    }
  })

  return <input {...props} ref={inputRef} type="text" />
})

function App() {
  const ref = useRef(null)

  const focusHandle = () => ref.current.focus()

  return (
    <div>
      <MyInput ref={ref} />
      <button onClick={focusHandle}>focus</button>
    </div>
  )
}

export default App
```
