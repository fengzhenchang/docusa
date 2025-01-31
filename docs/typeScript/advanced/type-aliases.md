---
sidebar_position: 1
---

# 类型别名

类型别名用来给一个类型起个新名字。

## 简单的例子

```ts
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

上例中，我们使用 `type` 创建类型别名。

类型别名常用于联合类型。

## 参考

- [Advanced Types # Type Aliases](http://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases)
