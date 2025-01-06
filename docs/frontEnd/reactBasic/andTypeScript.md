---
title: 与 TypeScript
hide_title: true
sidebar_position: 8
---

## Hooks 与 TypeScript

### useState
####  简单场景
> 简单场景下，可以使用 TS 的自动推断机制，不用特殊编写类型注解，运行良好

```typescript
const [val, toggle] = React.useState(false)

// `val` 会被自动推断为布尔类型
// `toggle` 方法调用时只能传入布尔类型
```

#### 复杂场景
> 复杂数据类型，useState 支持通过**泛型参数**指定初始参数类型以及 setter 函数的入参类型

```typescript
type User = {
  name: string
  age: number
}
const [user, setUser] = React.useState<User>({
  name: 'jack',
  age: 18
})
// 执行 setUser
setUser(newUser)
// 这里 newUser 对象只能是 User 类型
```
#### 没有具体默认值
> 实际开发时，有些时候 useState 的初始值可能为 null 或者 undefined，按照泛型的写法是不能通过类型校验的，此时可以通过完整的类型联合 null 或者 undefined 类型即可

```typescript
type User = {
  name: String
  age: Number
}
const [user, setUser] = React.useState<User>(null)
// 上面会类型错误，因为 null 并不能分配给 User 类型

const [user, setUser] = React.useState<User | null>(null)
// 上面既可以在初始值设置为 null，同时满足 setter 函数 setUser 的参数可以是具体的 User 类型
```
### useRef
> 在TypeScript的环境下，`useRef` 函数返回一个**只读**或者**可变**的引用，只读的场景常见于获取真实 dom，可变的场景，常见于缓存一些数据，不跟随组件渲染，下面分两种情况说明

#### 获取 dom
> 获取 DOM 时，通过泛型参数指定具体的 DOM 元素类型即可

```tsx
function Foo() {
  // 尽可能提供一个具体的 dom type, 可以帮助我们在用 dom 属性时有更明确的提示
  // divRef 的类型为 RefObject<HTMLDivElement>
  const inputRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  return <div ref={inputRef}>etc</div>
}
```
如果你可以确保 `divRef.current` 不是 null，也可以在传入初始值的位置
```typescript
// 添加非null标记
const divRef = useRef<HTMLDivElement>(null!)
// 不再需要检查`divRef.current` 是否为null
doSomethingWith(divRef.current)
```
#### 稳定引用存储器
> 当做为可变存储容器使用的时候，可以通过**泛型参数**指定容器存入的数据类型, 在还未存入实际内容时通常把 null 作为初始值，所以依旧可以通过联合类型做指定

```tsx
interface User {
  age: number
}

function App(){
  const timerRef = useRef<number | undefined>(undefined)
  const userRef = useRef<User | null> (null)
  useEffect(()=>{
    timerRef.current = window.setInterval(()=>{
      console.log('测试')
    },1000)
    
    
    return ()=>clearInterval(timerRef.current)
  })
  return <div> this is app</div>
}
```

## Component 与 TypeScript
### 为 Props 添加类型
> props 作为 React 组件的参数入口，添加了类型之后可以限制参数输入以及在使用 props 时有良好的类型提示

#### 使用 interface 接口
```tsx
interface Props {
  className: string
}

export const Button = (props:Props)=>{
  const { className } = props
  return <button className={ className }>Test</button>
}
```
#### 使用自定义类型 Type
```tsx
type Props =  {
  className: string
}

export const Button = (props:Props)=>{
  const { className } = props
  return <button className={ className }>Test</button>
}
```
### 为 Props 的 children 属性添加类型
> children 属性和 props 中其他的属性不同，它是 React 系统中内置的，其它属性我们可以自由控制其类型，children 属性的类型最好由 React 内置的类型提供，兼容多种类型

```tsx
type Props = {
  children: React.ReactNode
}

export const Button = (props: Props)=>{
   const { children } = props
   return <button>{ children }</button>
}
```
:::warning
说明：React.ReactNode是一个React内置的联合类型，包括 `React.ReactElement` 、`string`、`number`、`React.ReactFragment` 、`React.ReactPortal` 、`boolean`、 `null` 、`undefined`
:::

### 为事件 prop 添加类型
```tsx
// props + ts
type Props = {
  onGetMsg?: (msg: string) => void
}

function Son(props: Props) {
  const { onGetMsg } = props
  const clickHandler = () => {
    onGetMsg?.('this is msg')
  }
  return <button onClick={clickHandler}>sendMsg</button>
}

function App() {
  const getMsgHandler = (msg: string) => {
    console.log(msg)
  }
  return (
    <>
      <Son onGetMsg={(msg) => console.log(msg)} />
      <Son onGetMsg={getMsgHandler} />
    </>
  )
}

export default App
```
### 为事件 handle 添加类型
> 为事件回调添加类型约束需要使用 React 内置的泛型函数来做，比如最常见的鼠标点击事件和表单输入事件：

```tsx
function App(){
  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e)=>{
    console.log(e.target.value)
  }
  
  const clickHandler: React.MouseEventHandler<HTMLButtonElement> = (e)=>{
    console.log(e.target)
  }

  return (
    <>
      <input type="text" onChange={ changeHandler }/>
      <button onClick={ clickHandler }> click me!</button>
    </>
  )
}
```
