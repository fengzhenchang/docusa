---
title: CSS
hide_title: true
sidebar_position: 3
toc_max_heading_level: 2
---

## CSS如何画一个三角形？原理是什么？

在CSS中，我们可以通过一些技巧来绘制简单的形状，包括三角形。绘制三角形的常用方法有两种：利用边框和利用伪元素。

### 利用边框绘制三角形

绘制三角形最简单的方法是利用元素的边框。我们可以通过设置元素的宽度和高度为0，并设置对应的边框，然后隐藏不需要的边框，从而得到三角形的形状。

```css
.triangle {
  width: 0;
  height: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```

在这个例子中，我们设置了一个`triangle`类的元素，并且将其宽度和高度都设置为0。接着，通过`border-width`属性设置边框的宽度为20px，并设置边框的颜色。我们在这里选择了一个红色的边框，你可以根据需求设置不同的颜色。

`border-color`属性的四个值分别表示四个边框的颜色，它们的顺序是：上、右、下、左。在这里，我们只让上边框显示出来，而其他三个边框设置为透明，从而形成一个三角形。

### 利用伪元素绘制三角形

除了利用边框，我们还可以利用伪元素来绘制三角形。伪元素可以在元素的内容前或内容后插入内容，利用这个特性，我们可以在元素的`::before`或`::after`伪元素中绘制三角形。

```css
.triangle {
  position: relative;
  width: 0;
  height: 0;
}

.triangle::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border-width: 20px;
  border-style: solid;
  border-color: transparent transparent red transparent;
}
```

在这个例子中，我们同样创建了一个`triangle`类的元素，并将其宽度和高度都设置为0。然后，我们在`::before`伪元素中插入一个空内容，并将其设置为绝对定位，使得它可以覆盖在`triangle`元素的上方。

接下来，我们通过设置伪元素的边框属性来绘制三角形，方法与之前的方法相同，只显示上边框，并将其他三个边框设置为透明，形成三角形的形状。

### 原理

这两种方法的原理都是利用CSS的边框属性来绘制三角形。对于利用边框绘制三角形的方法，我们通过将元素的宽度和高度设置为0，然后利用边框的特性来实现三角形的形状。而对于利用伪元素绘制三角形的方法，我们在元素的`::before`或`::after`伪元素中插入一个空内容，并设置其边框属性来绘制三角形。

总结来说，绘制三角形的关键在于合理利用CSS的边框属性，通过设置不同边框的宽度和颜色，以及隐藏不需要的边框，来实现所需的形状。这样的技巧在实际开发中非常有用，能够减少额外的HTML标记和图像资源的使用，从而提高页面性能和加载速度。

## css选择器有哪些？优先级？哪些属性可以继承？


### 一、选择器
CSS选择器是CSS规则的第一部分

它是元素和其他部分组合起来告诉浏览器哪个HTML元素应当是被选为应用规则中的CSS属性值的方式

选择器所选择的元素，叫做“选择器的对象”

我们从一个`Html`结构开始

```html
<div id="box">
    <div class="one">
        <p class="one_1">
        </p >
        <p class="one_1">
        </p >
    </div>
    <div class="two"></div>
    <div class="two"></div>
    <div class="two"></div>
</div>
```

关于`css`属性选择器常用的有：

- id选择器（#box），选择id为box的元素

- 类选择器（.one），选择类名为one的所有元素
- 标签选择器（div），选择标签为div的所有元素

- 后代选择器（#box div），选择id为box元素内部所有的div元素
- 子选择器（.one>one_1），选择父元素为.one的所有.one_1的元素
- 相邻同胞选择器（.one+.two），选择紧接在.one之后的所有.two元素
- 群组选择器（div,p），选择div、p的所有元素



还有一些使用频率相对没那么多的选择器：

- 伪类选择器

```css
:link ：选择未被访问的链接
:visited：选取已被访问的链接
:active：选择活动链接
:hover ：鼠标指针浮动在上面的元素
:focus ：选择具有焦点的
:first-child：父元素的首个子元素
```

- 伪元素选择器

```css
:first-letter ：用于选取指定选择器的首字母
:first-line ：选取指定选择器的首行
:before : 选择器在被选元素的内容前面插入内容
:after : 选择器在被选元素的内容后面插入内容
```

- 属性选择器

```css
[attribute] 选择带有attribute属性的元素
[attribute=value] 选择所有使用attribute=value的元素
[attribute~=value] 选择attribute属性包含value的元素
[attribute|=value]：选择attribute属性以value开头的元素
```

在`CSS3`中新增的选择器有如下：

- 层次选择器（p~ul），选择前面有p元素的每个ul元素
- 伪类选择器

```css
:first-of-type 表示一组同级元素中其类型的第一个元素
:last-of-type 表示一组同级元素中其类型的最后一个元素
:only-of-type 表示没有同类型兄弟元素的元素
:only-child 表示没有任何兄弟的元素
:nth-child(n) 根据元素在一组同级中的位置匹配元素
:nth-last-of-type(n) 匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数
:last-child 表示一组兄弟元素中的最后一个元素
:root 设置HTML文档
:empty 指定空的元素
:enabled 选择可用元素
:disabled 选择被禁用元素
:checked 选择选中的元素
:not(selector) 选择与 <selector> 不匹配的所有元素
```

- 属性选择器

```css
[attribute*=value]：选择attribute属性值包含value的所有元素
[attribute^=value]：选择attribute属性开头为value的所有元素
[attribute$=value]：选择attribute属性结尾为value的所有元素
```



### 二、优先级

相信大家对`CSS`选择器的优先级都不陌生：

> 内联 > ID选择器 > 类选择器 > 标签选择器

到具体的计算层⾯，优先级是由 A 、B、C、D 的值来决定的，其中它们的值计算规则如下：

- 如果存在内联样式，那么 A = 1, 否则 A = 0

- B的值等于 ID选择器出现的次数

- C的值等于 类选择器 和 属性选择器 和 伪类 出现的总次数

- D 的值等于 标签选择器 和 伪元素 出现的总次数

这里举个例子：

```css
#nav-global > ul > li > a.nav-link
```

套用上面的算法，依次求出 `A` `B` `C` `D` 的值：

- 因为没有内联样式 ，所以 A = 0

- ID选择器总共出现了1次， B = 1

- 类选择器出现了1次， 属性选择器出现了0次，伪类选择器出现0次，所以 C = (1 + 0 + 0) = 1
- 标签选择器出现了3次， 伪元素出现了0次，所以 D = (3 + 0) = 3

上面算出的`A` 、 `B`、`C`、`D` 可以简记作：`(0, 1, 1, 3)`

知道了优先级是如何计算之后，就来看看比较规则：

- 从左往右依次进行比较 ，较大者优先级更高
- 如果相等，则继续往右移动一位进行比较
- 如果4位全部相等，则后面的会覆盖前面的

经过上面的优先级计算规则，我们知道内联样式的优先级最高，如果外部样式需要覆盖内联样式，就需要使用`!important`



### 三、继承属性

在`css`中，继承是指的是给父元素设置一些属性，后代元素会自动拥有这些属性

关于继承属性，可以分成：

- 字体系列属性

```css
font:组合字体
font-family:规定元素的字体系列
font-weight:设置字体的粗细
font-size:设置字体的尺寸
font-style:定义字体的风格
font-variant:偏大或偏小的字体
```

- 文本系列属性

```css
text-indent：文本缩进
text-align：文本水平对刘
line-height：行高
word-spacing：增加或减少单词间的空白
letter-spacing：增加或减少字符间的空白
text-transform：控制文本大小写
direction：规定文本的书写方向
color：文本颜色
```

- 元素可见性

```css
visibility
```

- 表格布局属性

```css
caption-side：定位表格标题位置
border-collapse：合并表格边框
border-spacing：设置相邻单元格的边框间的距离
empty-cells：单元格的边框的出现与消失
table-layout：表格的宽度由什么决定
```

- 列表属性

```css
list-style-type：文字前面的小点点样式
list-style-position：小点点位置
list-style：以上的属性可通过这属性集合
```

- 引用

```css
quotes：设置嵌套引用的引号类型
```

- 光标属性

```css
cursor：箭头可以变成需要的形状
```

继承中比较特殊的几点：

- a 标签的字体颜色不能被继承

- h1-h6标签字体的大下也是不能被继承的



#### 无继承的属性

- display

- 文本属性：vertical-align、text-decoration

- 盒子模型的属性：宽度、高度、内外边距、边框等

- 背景属性：背景图片、颜色、位置等

- 定位属性：浮动、清除浮动、定位position等

- 生成内容属性：content、counter-reset、counter-increment

- 轮廓样式属性：outline-style、outline-width、outline-color、outline

- 页面样式属性：size、page-break-before、page-break-after



### 参考文献

- https://www.html.cn/qa/css3/13444.html
- https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors

## 介绍一下grid网格布局

![image](https://proxy.augustf.top/https://github.com/linwu-hi/code-interview/assets/137023716/977123a4-0aa8-4a15-9e7d-97817108302d)

在现代Web开发中，页面布局是一个重要的任务，它决定了网页的结构和外观。在CSS中，我们通常使用Flexbox（弹性盒布局）和Grid布局来实现不同的布局需求。本文将重点介绍Grid布局，它是一种二维布局方式，通过纵横相交的网格线来创建布局结构，能够同时处理行和列，使得布局更加灵活多样。

### 一、什么是Grid布局？

Grid布局，又称为网格布局，是一种强大而灵活的CSS布局模型。它通过在容器中创建一个二维网格，将页面划分为多个主要区域，并定义这些区域的大小、位置、层次等关系。与Flexbox的一维布局不同，Grid布局是一个二维布局，它在排列元素时不仅考虑主轴方向（水平或垂直），还考虑交叉轴方向，使得布局更加精确和直观。

要使用Grid布局，我们需要将元素的`display`属性设置为`grid`或`inline-grid`，这样浏览器渲染引擎会启动网格布局算法。

```css
.container {
  display: grid;
  /* 或者 display: inline-grid; */
}
```


### 二、Grid布局的属性

Grid布局的属性分为容器属性和项目属性两类，我们逐一介绍。

#### 容器属性：

1. `grid-template-columns`和`grid-template-rows`: 用于设置网格的列宽和行高。可以指定固定的宽度和高度，也可以使用`repeat()`函数简化重复的值。

```css
.container {
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
}
```

2. `grid-gap`：设置行间距和列间距的简写属性，相当于同时设置`grid-row-gap`和`grid-column-gap`。

```css
.container {
  display: grid;
  grid-gap: 10px 20px;
}
```

3. `grid-template-areas`：用于定义网格区域，将多个单元格组成一个命名区域，通过字符串来表示。

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 100px 100px;
  grid-template-areas: 
    'a b c'
    'd e f';
}
```

![Grid-template-areas示意图](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2fc9195b6577452aae00b4a062c4d40b~tplv-k3u1fbpfcp-zoom-1.image)

4. `grid-auto-flow`：用于指定项目的放置顺序，默认为`row`，即先行后列。可以设置为`column`，使项目先列后行排列。

```css
.container {
  display: grid;
  grid-auto-flow: column;
}
```

5. `justify-items`和`align-items`：分别用于设置单元格内容在水平和垂直方向上的对齐方式。

```css
.item {
  justify-items: center; /* left, right, stretch */
  align-items: center; /* start, end, stretch */
}
```

#### 项目属性：

1. `grid-column-start`和`grid-column-end`：用于指定项目左边框和右边框所在的垂直网格线，定义项目在列方向的位置。

```css
.item {
  grid-column-start: 2;
  grid-column-end: 4;
}
```

2. `grid-row-start`和`grid-row-end`：用于指定项目上边框和下边框所在的水平网格线，定义项目在行方向的位置。

```css
.item {
  grid-row-start: 1;
  grid-row-end: 3;
}
```

3. `grid-area`：用于指定项目放置在哪一个命名区域。

```css
.item {
  grid-area: e;
}
```

4. `justify-self`和`align-self`：分别用于设置单元格内容在水平和垂直方向上的对齐方式，只作用于单个项目。

```css
.item {
  justify-self: center; /* left, right, stretch */
  align-self: center; /* start, end, stretch */
}
```

### 三、Grid布局的应用场景

Grid布局在实际开发中有着广

泛的应用场景，以下是一些常见的应用示例：

1. 网格导航：通过网格布局可以轻松实现水平或垂直的网格导航菜单，使得导航链接整齐排列。

![网格导航示例](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c61ce99442249b7bc7760b5ac365d54~tplv-k3u1fbpfcp-zoom-1.image)

2. 居中布局：通过设置容器的对齐方式和项目的自身对齐方式，可以实现内容在容器中的水平和垂直居中，使得布局更加美观。

![居中布局示例](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dd96d21fab1a4ec0941186f3c81e2942~tplv-k3u1fbpfcp-zoom-1.image)

3. 多栏布局：Grid布局可以轻松实现多栏布局，使得栏目的宽度相等或不等，适用于新闻列表、产品展示等场景。

![多栏布局示例](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f65286498e840b38da247b836825e41~tplv-k3u1fbpfcp-zoom-1.image)

4. 自适应布局：通过设置项目的放大和缩小比例，可以实现根据容器大小自适应调整布局，使得页面在不同屏幕尺寸下都能良好展示。

5. 等高布局：通过设置项目的高度为`1fr`，可以使得多个项目拥有相同的高度，适用于类似产品卡片的布局。

6. 响应式布局：在移动设备和桌面端的响应式布局中，Grid布局表现优秀，可以在不同尺寸的屏幕上显示不同的布局，提升用户体验。

### 四、兼容性和使用建议

目前，Grid布局在现代主流浏览器中具有良好的兼容性，支持情况如下：

![Grid布局兼容性](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/651fbe7895a4498e952b2a38b6ae2a8f~tplv-k3u1fbpfcp-zoom-1.image)

综上所述，Grid布局是一种功能强大、灵活多样的布局方式，它在Web开发中有着广泛的应用场景。在实际开发中，我们可以灵活运用Grid布局来实现各种复杂的页面布局需求，提升网页的可读性和用户体验。然而，考虑到兼容性问题，建议在使用Grid布局时，及时做好兼容性处理，以确保网页在不同浏览器中都能正确显示和运行。希望本文能帮助读者深入理解Grid布局，并在实际项目中应用得心应手！

## 元素水平垂直居中的方法有哪些？如果元素不定宽高呢？


### 一、背景

在开发中经常遇到这个问题，即让某个元素的内容在水平和垂直方向上都居中，内容不仅限于文字，可能是图片或其他元素

居中是一个非常基础但又是非常重要的应用场景，实现居中的方法存在很多，可以将这些方法分成两个大类：

- 居中元素（子元素）的宽高已知
- 居中元素宽高未知



### 二、实现方式

实现元素水平垂直居中的方式：

- 利用定位+margin:auto

- 利用定位+margin:负值

- 利用定位+transform
- table布局
- flex布局
- grid布局



#### 利用定位+margin:auto

先上代码：

```html
<style>
    .father{
        width:500px;
        height:300px;
        border:1px solid #0a3b98;
        position: relative;
    }
    .son{
        width:100px;
        height:40px;
        background: #f0a238;
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        margin:auto;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```

父级设置为相对定位，子级绝对定位 ，并且四个定位属性的值都设置了0，那么这时候如果子级没有设置宽高，则会被拉开到和父级一样宽高

这里子元素设置了宽高，所以宽高会按照我们的设置来显示，但是实际上子级的虚拟占位已经撑满了整个父级，这时候再给它一个`margin：auto`它就可以上下左右都居中了



#### 利用定位+margin:负值

绝大多数情况下，设置父元素为相对定位， 子元素移动自身50%实现水平垂直居中

```html
<style>
    .father {
        position: relative;
        width: 200px;
        height: 200px;
        background: skyblue;
    }
    .son {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left:-50px;
        margin-top:-50px;
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```


- 初始位置为方块1的位置
- 当设置left、top为50%的时候，内部子元素为方块2的位置
- 设置margin为负数时，使内部子元素到方块3的位置，即中间位置

这种方案不要求父元素的高度，也就是即使父元素的高度变化了，仍然可以保持在父元素的垂直居中位置，水平方向上是一样的操作

但是该方案需要知道子元素自身的宽高，但是我们可以通过下面`transform`属性进行移动



#### 利用定位+transform

实现代码如下：

```css
<style>
    .father {
        position: relative;
        width: 200px;
        height: 200px;
        background: skyblue;
    }
    .son {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```

`translate(-50%, -50%)`将会将元素位移自己宽度和高度的-50%

这种方法其实和最上面被否定掉的margin负值用法一样，可以说是`margin`负值的替代方案，并不需要知道自身元素的宽高





#### table布局

设置父元素为`display:table-cell`，子元素设置 `display: inline-block`。利用`vertical`和`text-align`可以让所有的行内块级元素水平垂直居中

```html
<style>
    .father {
        display: table-cell;
        width: 200px;
        height: 200px;
        background: skyblue;
        vertical-align: middle;
        text-align: center;
    }
    .son {
        display: inline-block;
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```



#### flex弹性布局

还是看看实现的整体代码：

```html
<style>
    .father {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;
        background: skyblue;
    }
    .son {
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```

`css3`中了`flex`布局，可以非常简单实现垂直水平居中

这里可以简单看看`flex`布局的关键属性作用：

- display: flex时，表示该容器内部的元素将按照flex进行布局

- align-items: center表示这些元素将相对于本容器水平居中
- justify-content: center也是同样的道理垂直居中



#### grid网格布局

```html
<style>
    .father {
            display: grid;
            align-items:center;
            justify-content: center;
            width: 200px;
            height: 200px;
            background: skyblue;

        }
        .son {
            width: 10px;
            height: 10px;
            border: 1px solid red
        }
</style>
<div class="father">
    <div class="son"></div>
</div>
```

这里看到，`gird`网格布局和`flex`弹性布局都简单粗暴



#### 小结

上述方法中，不知道元素宽高大小仍能实现水平垂直居中的方法有：

- 利用定位+margin:auto
- 利用定位+transform
- flex布局
- grid布局



### 三、总结

根据元素标签的性质，可以分为：

- 内联元素居中布局
- 块级元素居中布局



#### 内联元素居中布局

水平居中

- 行内元素可设置：text-align: center
- flex布局设置父元素：display: flex; justify-content: center

垂直居中

- 单行文本父元素确认高度：height === line-height
- 多行文本父元素确认高度：display: table-cell; vertical-align: middle



#### 块级元素居中布局

水平居中

- 定宽: margin: 0 auto
- 绝对定位+left:50%+margin:负自身一半

垂直居中

- position: absolute设置left、top、margin-left、margin-top(定高)
- display: table-cell
- transform: translate(x, y)
- flex(不定高，不定宽)
- grid(不定高，不定宽)，兼容性相对比较差



### 参考文献

- https://juejin.cn/post/6844903982960214029#heading-10


## 如何实现单行／多行文本溢出的省略样式？

> 实现单行或多行文本溢出时的省略样式是前端开发中常见的需求。CSS提供了`text-overflow`属性来实现单行文本溢出的省略样式，同时结合`white-space`和`overflow`属性，可以实现多行文本溢出的省略样式。

### 单行文本溢出省略样式

实现单行文本的省略样式需要用到以下三个属性：

1. `white-space`: 用于控制元素内文本的换行方式。
2. `overflow`: 用于控制元素内容溢出时的处理方式。
3. `text-overflow`: 用于控制文本溢出时的省略样式。

```css
.single-line-ellipsis {
  white-space: nowrap; /* 文本不换行 */
  overflow: hidden; /* 内容溢出时隐藏超出部分 */
  text-overflow: ellipsis; /* 溢出部分用省略号代替 */
}
```

在上面的例子中，我们创建了一个类名为`.single-line-ellipsis`的样式。设置`white-space`属性为`nowrap`，表示文本不进行换行。设置`overflow`属性为`hidden`，当文本内容超出容器时，隐藏超出部分。最后，设置`text-overflow`属性为`ellipsis`，表示溢出部分用省略号（`...`）代替。

### 多行文本溢出省略样式

实现多行文本的省略样式需要用到以下三个属性：

1. `display`: 用于控制元素的显示方式，必须设置为`-webkit-box`或`-webkit-inline-box`，使得`-webkit-line-clamp`属性生效。
2. `-webkit-box-orient`: 用于设置元素内部的排列方向，值为`vertical`表示垂直排列。
3. `-webkit-line-clamp`: 用于设置显示的行数，超出行数的文本将被省略。

```css
.multi-line-ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 显示的行数 */
  overflow: hidden; /* 内容溢出时隐藏超出部分 */
}
```

在上面的例子中，我们创建了一个类名为`.multi-line-ellipsis`的样式。通过设置`display`为`-webkit-box`，并将`-webkit-box-orient`设置为`vertical`，实现多行文本的垂直排列。然后，设置`-webkit-line-clamp`为希望显示的行数（例如`3`），超出的文本将被省略。最后，设置`overflow`属性为`hidden`，当文本内容超出容器时，隐藏超出部分。

需要注意的是，`-webkit-line-clamp`是一个私有属性，目前主要用于WebKit浏览器（例如Safari和Chrome）。在其他浏览器中可能不被支持。因此，在使用多行省略样式时，建议考虑使用JavaScript等其他方案实现跨浏览器的兼容性。

## 如果要做优化，CSS提高性能的方法有哪些？


### 一、前言

每一个网页都离不开CSS，但是很多人又认为CSS主要是用来完成页面布局的，像一些细节或者优化，就不需要怎么考虑，实际上这种想法是不正确的。

作为页面渲染和内容展现的重要环节，CSS影响着用户对整个网站的第一体验。因此，在整个产品研发过程中，CSS性能优化同样需要贯穿全程。

### 二、实现方式

实现方式有很多种，主要有如下：

#### 1. 内联首屏关键CSS

在打开一个页面时，页面首要内容出现在屏幕的时间影响着用户的体验，而通过内联CSS关键代码能够使浏览器在下载完HTML后就能立刻渲染。

而如果外部引用CSS代码，在解析HTML结构过程中遇到外部CSS文件，才会开始下载CSS代码，再渲染。

所以，CSS内联使用使渲染时间提前。

注意：但是较大的CSS代码并不合适内联（初始拥塞窗口、没有缓存），而其余代码则采取外部引用方式。

#### 2. 异步加载CSS

在CSS文件请求、下载、解析完成之前，CSS会阻塞渲染，浏览器将不会渲染任何已处理的内容。

前面加载内联代码后，后面的外部引用CSS则没必要阻塞浏览器渲染。这时候就可以采取异步加载的方案，主要有如下：

*   使用JavaScript将link标签插到head标签最后

```js
// 创建link标签
const myCSS = document.createElement("link");
myCSS.rel = "stylesheet";
myCSS.href = "mystyles.css";
// 插入到header的最后位置
document.head.insertBefore(myCSS, document.head.childNodes[document.head.childNodes.length - 1].nextSibling);
```

*   设置link标签media属性为noexis，浏览器会认为当前样式表不适用当前类型，会在不阻塞页面渲染的情况下再进行下载。加载完成后，将`media`的值设为`screen`或`all`，从而让浏览器开始解析CSS

```html
<link rel="stylesheet" href="mystyles.css" media="noexist" onload="this.media='all'">
```

*   通过rel属性将link元素标记为alternate可选样式表，也能实现浏览器异步加载。同样别忘了加载完成之后，将rel设回stylesheet

```html
<link rel="alternate stylesheet" href="mystyles.css" onload="this.rel='stylesheet'">
```

#### 3. 资源压缩

利用webpack、gulp/grunt、rollup等模块化工具，将CSS代码进行压缩，使文件变小，大大降低了浏览器的加载时间。

#### 4. 合理使用选择器

CSS匹配的规则是从右往左开始匹配，例如`#markdown .content h3`匹配规则如下：

*   先找到h3标签元素
*   然后去除祖先不是.content的元素
*   最后去除祖先不是#markdown的元素

如果嵌套的层级更多，页面中的元素更多，那么匹配所要花费的时间代价自然更高。

所以我们在编写选择器的时候，可以遵循以下规则：

*   不要嵌套使用过多复杂选择器，最好不要三层以上
*   使用id选择器就没必要再进行嵌套
*   通配符和属性选择器效率最低，避免使用

#### 5. 减少使用昂贵的属性

在页面发生重绘的时候，昂贵属性如`box-shadow`/`border-radius`/`filter`/透明度/`:nth-child`等，会降低浏览器的渲染性能。

#### 6. 不要使用@import

CSS样式文件有两种引入方式，一种是`link`元素，另一种是`@import`。

`@import`会影响浏览器的并行下载，使得页面在加载时增加额外的延迟，增添了额外的往返耗时。

而且多个`@import`可能会导致下载顺序紊乱。

比如一个CSS文件`index.css`包含了以下内容：`@import url("reset.css")`。

那么浏览器就必须先把`index.css`下载、解析和执行后，才下载、解析和执行第二个文件`reset.css`。

#### 其他

*   减少重排操作，以及减少不必要的重绘
*   了解哪些属性可以继承而来，避免对这些属性重复编写
*   CSS Sprite，合成所有icon图片，用宽高加上`background-position`的背景图方式显现出我们要的icon图，减少了HTTP请求
*   把小的icon图片转成Base64编码
*   CSS3动画或者过渡尽量使用`transform`和`opacity`来实现动画，不要使用`left`和`top`属性

### 三、总结

CSS实现性能的方式可以从选择器嵌套、属性特性、减少HTTP这三面考虑，同时还要注意CSS代码的加载顺序。

### 参考文献

*   [知乎 - 如何优化 CSS 性能？](<https://www.zhihu.com/question/19886806>)

*   [掘金 - CSS性能优化，你真的了解吗？](https://juejin.cn/post/6844903649605320711#heading-1)

## 深入理解设备像素、CSS像素、设备独立像素、DPR、PPI之间的区别与适配方案

在前端开发中，经常会遇到关于像素的概念，如设备像素、CSS像素、设备独立像素、DPR（设备像素比）以及PPI（每英寸像素）等。这些概念之间的区别很重要，尤其在移动设备上开发时，需要进行适配，以确保页面在不同设备上显示良好。本文将深入探讨这些概念之间的区别，并介绍适配方案。

### 一、设备像素

设备像素（Device Pixel），也称为物理像素，是显示设备上的最小物理单位。它代表屏幕上的一个点，能够显示不同颜色和图像。设备像素是显示屏的固有属性，不可改变，每台设备在制造时都确定了其设备像素数量。

在高分辨率的显示屏上，设备像素更加密集，显示效果更加细腻。例如，若两台手机屏幕尺寸相同，但一台设备像素更多，则其显示效果更加清晰。

### 二、CSS像素

CSS像素（CSS Pixel，px）是Web开发中常用的长度单位。在CSS规范中，长度单位分为绝对单位和相对单位，而CSS像素是一种相对单位。大多数情况下，1个CSS像素对应1个设备独立像素，即1:1的关系。

然而，有时候1个CSS像素可能对应多个设备像素，这取决于设备的DPR（设备像素比）。

### 三、设备独立像素

设备独立像素（Device Independent Pixel），也称为逻辑像素或密度无关像素，是一个与设备无关的抽象单位。它是开发者可以通过程序控制使用的虚拟像素，目的是为了解决不同设备分辨率不同的问题。

设备独立像素可以通过`window.screen.width`和`window.screen.height`来获取。而设备像素比（DPR）可以通过`window.devicePixelRatio`来获取。

设备独立像素的引入使得开发者在不同设备上进行页面设计时更加灵活，不用考虑具体的物理像素数目，统一使用设备独立像素进行布局。

### 四、DPR（设备像素比）

DPR（Device Pixel Ratio）是设备像素和设备独立像素之间的转换关系。它表示1个设备独立像素由多少个设备像素组成。

计算公式如下：

```
DPR = 设备像素 / 设备独立像素
```

举例来说，当DPR为2时，1个设备独立像素由2个设备像素组成；当DPR为3时，1个设备独立像素由3个设备像素组成。

DPR通常用于移动设备，不同的移动设备可能有不同的DPR，用于适配不同分辨率的屏幕。

### 五、PPI（每英寸像素）

PPI（Pixel Per Inch），也称为每英寸像素，表示屏幕每英寸所包含的像素点数目，也可以理解为屏幕的像素密度。PPI的数值越高，屏幕的显示越清晰。

PPI是一个指标，用来描述屏幕像素的密度，并与屏幕的尺寸相关。例如，同样尺寸的屏幕，PPI越高，说明屏幕像素更密集，显示效果更细腻。

### 六、适配方案

在移动设备开发中，为了确保页面在不同设备上显示良好，我们需要考虑设备的DPR和PPI，以及设备独立像素。以下是一些常用的适配方案：

1. 使用rem单位：rem单位是相对于根元素（html元素）的字体大小进行计算的长度单位。通过动态设置根元素的字体大小，可以根据不同设备的DPR进行适配。

2. 使用viewport标签：通过设置viewport标签，可以控制页面的缩放和布局。设置`<meta name="viewport" content="width=device-width, initial-scale=1.0">`可以让页面宽度等于设备宽度，并且不进行缩放。

3. 使用媒体查询：媒体查询可以根据不同设备的宽度、高度、DPR等条件来应用不同的CSS样式，从而实现页面的适配。

4. 使用flexbox和grid布局：flexbox和grid布局可以更加灵活地进行页面布局，适应不同设备的屏幕尺寸和分辨率。

5. 使用图片的@2x和@3x版本：对于高分辨率设备，提供相应的高清晰度图片，以确保图片显示效果清晰。

### 七、总结

- 设备像素是显示设备上的最小物理单位，代表一个点，无法通过代码改变。

- CSS像素是Web开发

中常用的长度单位，大多数情况下1个CSS像素对应1个设备独立像素。

- 设备独立像素是与设备无关的抽象单位，通过程序控制使用，用于解决不同设备分辨率问题。

- DPR（设备像素比）表示1个设备独立像素由多少个设备像素组成，用于移动设备适配不同分辨率的屏幕。

- PPI（每英寸像素）是屏幕每英寸所包含的像素点数目，与屏幕的尺寸相关。

在移动设备开发中，我们需要考虑设备的DPR和PPI，以及设备独立像素，采取相应的适配方案，以确保页面在不同设备上显示效果一致和清晰。同时，灵活运用CSS单位和布局技巧，可以更好地适应不同设备的屏幕尺寸和分辨率。

## 说说flexbox（弹性盒布局模型）

![image](https://proxy.augustf.top/https://github.com/linwu-hi/code-interview/assets/137023716/1896fd60-95c7-4de6-a800-24eba8a89df5)


Flex布局(Flexible Box Layout)是一种用于定义容器内部元素布局方式的CSS3布局模型。它可以使元素具有弹性,让元素在容器内自动排列,简化了元素的定位。

### Flex布局的基本概念

采用Flex布局的元素可分为容器(container)和项目(item)。

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div> 
  <div class="item">3</div>
</div>
```

容器通过设置`display: flex`生成,项目默认沿主轴排列。

### 容器属性

#### flex-direction

决定主轴方向,即项目排列方向。

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- row:主轴为水平,起点在左端 
- row-reverse:主轴为水平,起点在右端
- column:主轴为垂直,起点在上沿
- column-reverse:主轴为垂直,起点在下沿

![image](https://proxy.augustf.top/https://github.com/linwu-hi/code-interview/assets/137023716/4e8cd301-7079-4925-89f5-42c210bfe8a9)

#### flex-wrap 

定义容器内项目是否可换行。

```css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse; 
}
```

- nowrap:不换行
- wrap:换行,第一行在下方
- wrap-reverse:换行,第一行在上方

#### justify-content

定义项目在主轴上的对齐方式。

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;  
}
```

- flex-start: 左对齐
- flex-end: 右对齐  
- center: 居中
- space-between: 两端对齐,项目之间间隔相等
- space-around: 每个项目两侧间隔相等

![image](https://proxy.augustf.top/https://github.com/linwu-hi/code-interview/assets/137023716/9a7e3845-5c63-44e2-a8bd-92a5e9353c2d)

#### align-items 

定义项目在交叉轴上如何对齐。

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- flex-start:交叉轴起点对齐
- flex-end:交叉轴终点对齐  
- center:交叉轴中点对齐
- baseline:项目第一行文字基线对齐
- stretch:项目高度撑满容器

![image](https://proxy.augustf.top/https://github.com/linwu-hi/code-interview/assets/137023716/31af9a79-a39e-4642-9d60-476eb4affd8f)
### 项目属性 

#### order

定义项目的排列顺序。

```css
.item {
  order: <integer>;
}
```

数值越小,排列越靠前。

#### flex-grow

定义项目的放大比例。

```css 
.item {
  flex-grow: <number>; /* default 0 */
}
```

如果所有项目都为1,则它们将等分剩余空间。

#### flex-shrink

定义了项目的缩小比例。 

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
```

如果空间不足,该项目将按比例缩小。

#### align-self

单个项目与其他项目对齐方式不同。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

### 总结

Flex布局提供了强大的容器属性,可以方便地控制项目布局、对齐和顺序,是实现响应式布局的首选方式。

## 深入理解CSS盒子模型

![image](https://proxy.augustf.top/https://github.com/linwu-hi/code-interview/assets/137023716/c9ed93e0-5c40-4ca6-9676-d313913d8bf6)

### 一、引言

在前端开发中，了解CSS盒子模型是非常重要的基础知识。盒子模型描述了网页中的每个元素都是由一个矩形的盒子组成，这个盒子由内容、内边距、边框和外边距组成。正确理解盒子模型对于设计合理的布局和样式至关重要。让我们深入了解CSS盒子模型，理解其中的概念和计算方式。

### 二、盒子模型概述

#### 1. 基本组成部分

CSS盒子模型由以下四个部分组成：

- `Content`：盒子内部的实际内容，例如文本、图像等。它的大小由`width`和`height`属性决定。

- `Padding`：围绕`Content`的内边距，用于控制内容与边框之间的空间。它的大小由`padding-top`、`padding-right`、`padding-bottom`和`padding-left`属性决定。

- `Border`：位于`Padding`之外的边框线，用于包围盒子。它的大小由`border-width`、`border-style`和`border-color`属性决定。

- `Margin`：位于`Border`之外的外边距，用于控制盒子与其他元素之间的空间。它的大小由`margin-top`、`margin-right`、`margin-bottom`和`margin-left`属性决定。

下图显示了盒子模型的基本结构：

![image](https://proxy.augustf.top/https://github.com/linwu-hi/code-interview/assets/137023716/24021c1e-b25b-4b07-9355-e8c53414f454)

#### 2. 宽度和高度计算

在CSS盒子模型中，元素的总宽度和总高度是由上述四个部分共同决定的。

- **总宽度** = `width` + `padding-left` + `padding-right` + `border-left` + `border-right` + `margin-left` + `margin-right`

- **总高度** = `height` + `padding-top` + `padding-bottom` + `border-top` + `border-bottom` + `margin-top` + `margin-bottom`

在默认情况下，CSS采用W3C标准盒子模型进行计算。也就是说，`width`和`height`属性只包含`Content`的宽度和高度，不包含`Padding`和`Border`的部分。

### 三、标准盒子模型与IE怪异盒子模型

#### 1. 标准盒子模型（content-box）

![image](https://proxy.augustf.top/https://github.com/linwu-hi/code-interview/assets/137023716/1109387c-3b77-4a37-b39c-3a8e7ebaf757)


如上文所述，默认情况下，CSS采用W3C标准盒子模型，也称为`content-box`。在这种模型中，`width`和`height`属性只包含`Content`的宽度和高度。当给元素设置宽度和高度时，这个宽度和高度仅仅是内容的大小。

#### 2. IE怪异盒子模型（border-box）

![image](https://proxy.augustf.top/https://github.com/linwu-hi/code-interview/assets/137023716/6906f0f2-f01f-4378-9d6e-205c3d5719f4)


除了标准盒子模型，还存在一种IE怪异盒子模型，也称为`border-box`。在这种模型中，`width`和`height`属性包含了`Content`、`Padding`和`Border`的宽度和高度。也就是说，设置了宽度和高度后，这个宽度和高度将包括内容、内边距和边框。

### 四、box-sizing属性

为了更好地控制元素的盒子模型，CSS提供了`box-sizing`属性。通过设置`box-sizing`属性，我们可以改变元素宽度和高度的计算方式。

- `box-sizing: content-box`：默认值，元素宽度和高度仅包含`Content`的部分（标准盒子模型）。

- `box-sizing: border-box`：元素宽度和高度包含`Content`、`Padding`和`Border`的部分（IE怪异盒子模型）。

```html
<style>
  .box {
    width: 200px;
    height: 100px;
    padding: 20px;
    box-sizing: border-box;
  }
</style>
<div class="box">
  盒子模型
</div>
```

通过上面的代码，我们将`.box`元素的`box-sizing`属性设置为`border-box`，这时候，它的总宽度和总高度将包括`Content`、`Padding`和`Border`的部分。因此，设置的`width: 200px`将完全生效，`padding`和`border`部分不会再撑开盒子，实际占用的空间为`200px`。

### 五、总结

CSS盒子模型是网页布局的基础，它决定了元素在页面中的大小和位置。了解盒子模型的概念和计算方式对于设计合理的布局和样式至关重要。在实际开发中，我们可以通过`box-sizing`属性来控制元素的宽度和高度的计算方式，从而更好地适应不同的布局需求。

### 参考文献

- [MDN Web Docs - Introduction to the CSS box model](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [MDN Web Docs - box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)

## 谈谈你对BFC的理解？

![image](https://proxy.augustf.top/https://github.com/linwu-hi/code-interview/assets/137023716/692504e8-6a26-4e82-9884-e41f9f170c33)

### 一、是什么

在页面布局的过程中，我们经常会遇到一些奇怪的情况，比如元素的高度消失了、两栏布局无法自适应、元素间距出现异常等等。这些问题往往是由于元素之间相互影响而导致的。在这里，就涉及到了BFC（Block Formatting Context）的概念。

BFC（块级格式化上下文）是页面中一块独立的渲染区域，具有一套独立的渲染规则：

- 内部的盒子会在垂直方向上一个接一个地放置。
- 同一个BFC的相邻盒子的margin会发生重叠，与方向无关。
- 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此。
- BFC的区域不会与float的元素区域重叠。
- 计算BFC的高度时，浮动子元素也参与计算。
- BFC是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然。

BFC的目的是形成一个相对于外界完全独立的空间，使内部的子元素不会影响到外部的元素。

### 二、触发条件

触发BFC的条件包含但不限于：

- 根元素，即HTML元素
- 浮动元素：float值为left、right
- overflow值不为visible，为auto、scroll、hidden
- display的值为inline-block、inline-table、table-cell、table-caption、flex、inline-flex、grid、inline-grid
- position的值为absolute或fixed

### 三、应用场景

利用BFC的特性，我们可以在以下场景中应用BFC：

#### 1. 防止margin重叠（塌陷）

```html
<style>
    .container {
        overflow: hidden; /* 触发BFC */
    }
    p {
        color: #f55;
        background: #fcc;
        width: 200px;
        line-height: 100px;
        text-align: center;
        margin: 100px;
    }
</style>
<body>
    <div class="container">
        <p>Haha</p>
    </div>
    <p>Hehe</p>
</body>
```

在没有触发BFC的情况下，两个p元素之间的距离为100px，发生了margin重叠（塌陷）。通过给包含p元素的容器触发BFC，两个p元素不再属于同一个BFC，从而避免了margin重叠。

#### 2. 清除内部浮动

```html
<style>
    .parent {
        border: 5px solid #fcc;
        width: 300px;
    }
 
    .child {
        border: 5px solid #f66;
        width: 100px;
        height: 100px;
        float: left;
    }
</style>
<body>
    <div class="parent">
        <div class="child"></div>
        <div class="child"></div>
    </div>
</body>
```

通过触发parent元素生成BFC，可以清除内部浮动的影响，从而使parent元素具有高度。

```css
.parent {
    overflow: hidden; /* 触发BFC */
}
```

#### 3. 自适应多栏布局

```html
<style>
    .wrapper {
        width: 300px;
    }
 
    .aside {
        width: 100px;
        height: 150px;
        float: left;
        background: #f66;
    }
 
    .main {
        height: 200px;
        background: #fcc;
    }
</style>
<body>
    <div class="wrapper">
        <div class="aside"></div>
        <div class="main"></div>
    </div>
</body>
```

在不触发BFC的情况下，.main元素的左边会与.wrapper元素的左边界相接触，从而无法实现两栏布局。

通过触发.main元素生成BFC，.main元素的左边不再与.wrapper元素的左边界相接触，从而实现自适应多栏布局。

```css
.main {
    overflow: hidden; /* 触发BFC */
}
```

#### 小结

通过上面的例子，我们可以看到BFC的实际效果就是形成一个页面中的独立容器，里面的子元素不影响外部的元素，反之亦然。BFC为我们解决了很多布局上的问题，提供了更灵活和可靠的布局手段。

### 参考文献

- [MDN Web Docs - Block Formatting Context](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)
- [BFC原理剖析 - Github笔记](https://github.com/zuopf769/notebook/blob/master/fe/BFC%E5%8E%9F%E7%90%86%E5%89%96%E6%9E%90/README.md)

## CSS3动画有哪些？

### 一、是什么？

CSS动画（CSS Animations）是一种使用CSS来实现动画效果的技术，它允许通过对元素样式的逐步变化，从而产生平滑过渡的动画效果。

常见的动画效果有很多，例如平移、旋转、缩放等等，复杂的动画可以由多个简单动画组合而成。

CSS提供了多种实现动画的方式，包括：

*   Transition（过渡）：用于设置元素的样式过渡效果。
*   Transform（变形）：用于对元素进行旋转、缩放、移动或倾斜等变形操作。
*   Animation（动画）：用于自定义复杂的动画效果。

### 二、实现方式

#### Transition 实现渐变动画

`Transition`通过定义元素属性的变化过程来实现动画效果，常用的属性有：

*   property：填写需要变化的CSS属性。
*   duration：完成过渡效果需要的时间，单位为秒（s）或毫秒（ms）。
*   timing-function：完成效果的速度曲线，可选值有`linear`、`ease`、`ease-in`、`ease-out`、`ease-in-out`等。
*   delay：动画效果的延迟触发时间，单位为秒（s）或毫秒（ms）。

举个例子，实现鼠标移动上去时发生变化的动画效果：

```html
<style>
    .base {
        width: 100px;
        height: 100px;
        display: inline-block;
        background-color: #0EA9FF;
        border-width: 5px;
        border-style: solid;
        border-color: #5daf34;
        transition-property: width, height, background-color, border-width;
        transition-duration: 2s;
        transition-timing-function: ease-in;
        transition-delay: 500ms;
    }

    /*简写*/
    /*transition: all 2s ease-in 500ms;*/
    .base:hover {
        width: 200px;
        height: 200px;
        background-color: #5daf34;
        border-width: 10px;
        border-color: #3a8ee6;
    }
</style>
<div class="base"></div>
```

#### Transform 转变动画

`Transform`用于对元素进行位移、缩放、旋转和倾斜等变换操作，一般与`Transition`结合使用实现动画效果。

`Transform`包含四个常用的变换功能：

*   translate：位移
*   scale：缩放
*   rotate：旋转
*   skew：倾斜

注意的是，`Transform`不支持`inline`元素，需要先将其设置为`block`。

举个例子，实现元素在鼠标悬停时的动画效果：

```html
<style>
    .base {
        width: 100px;
        height: 100px;
        display: inline-block;
        background-color: #0EA9FF;
        border-width: 5px;
        border-style: solid;
        border-color: #5daf34;
        transition-property: width, height, background-color, border-width;
        transition-duration: 2s;
        transition-timing-function: ease-in;
        transition-delay: 500ms;
    }

    .base2 {
        transform: none;
        transition-property: transform;
        transition-delay: 5ms;
    }

    .base2:hover {
        transform: scale(0.8) rotate(35deg) skew(5deg) translate(15px, 25px);
    }
</style>
<div class="base base2"></div>
```

在这个例子中，盒子会发生旋转、倾斜、平移和缩小的效果。

#### Animation 实现自定义动画

`Animation`是一种用于实现自定义动画效果的属性，它是由8个子属性组成：

*   animation-name：指定`@keyframes`动画的名称。
*   animation-duration：指定动画完成一个周期所需要的时间，单位为秒（s）或毫秒（ms）。
*   animation-timing-function：指定动画计时函数，即动画的速度曲线。
*   animation-delay：指定动画延迟时间，即动画何时开始。
*   animation-iteration-count：指定动画播放的次数。
*   animation-direction：指定动画播放的方向。
*   animation-fill-mode：指定动画填充模式。
*   animation-play-state：指定动画播放状态，正在运行或暂停。

`CSS`动画通过定义一些关键帧，浏览器会根据计时函数插值计算出中间帧，从而形成动画效果。关键帧使用`@keyframes`来定义，可以使用`from`和`to`关键字或百分比来刻画动画生命周期。

举个例子，实现一个元素旋转一圈的动画效果：

```css
@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

/* 或者使用百分比刻画生命周期 */
/*
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
*/

.element {
    animation: rotate 2s;
}
```

### 三、总结

在本文中，我们介绍了CSS3中三种实现动画的方式：

*   `Transition`（过渡）：用于设置元素的样式过渡效果。
*   `Transform`（变形）：用于对元素进行旋转、缩放、移动或倾斜等变形操作。
*   `Animation`（动画）：用于自定义复杂

的动画效果。

每种方式在实现动画效果时有各自的特点和用途，具体应用时根据需求选择合适的方式来实现动画效果。

### 参考文献

*   [CSS3 动画与过渡](https://segmentfault.com/a/1190000022540857)
*   [CSS 动画 - 维基百科](https://zh.m.wikipedia.org/wiki/CSS%E5%8A%A8%E7%94%BB)
