# 外部调用 js

外部调用Javascript 文件不用使用<script> 标签， 直接写javascript 代码

Java对大小写敏感

对某个部件 进行操作和控制

所以一般控制的部件都使用id 标识 一般来说 对css文件id用得越少越好

由于HTML 和 CSS 负责的是静态网页的编写 而Js做的是动态部件 所以 一般的web逆向都是对JS进行逆向

### How?

.css文件的外部调用在head为文件中

而js文件不是全局文件 所以 在外部调用时通常在<body>标签中 且需要使用script标签，指明何时开始 何时结束

# 函数写法

### 不定参数的写法

function 函数名(option){

​	body

}

其中option代表参数不唯一 可能有多个 或者只有一个 但是为了防止 调用的时候 有的参数没有对应的初始值 所以一般会给初始值 或者默认为零的情况

  options = options || {};

  this.x = options.x || 0;

  this.y = options.y || 0;

类似这样的写法

### 带参数的函数写法

function myFunction(var1, var2)

{

​	代码

}

调用方法：

myFunciton(argument1, argument2);

# JS数据类型

字符串（string） 数字（number 注：没有int char long 之分） 空(NULL)  未定义（undefined）symbol

对象类型：

对象 数组 函数 

特殊对象：

正则 日期

## 动态类型

var 关键字 定义变量

var x;  // 未定义

var x = 5; // 数字

var x = "John" // 字符串

这里的x由于初始值的不同 程序自动定义对应的动态类型  

###### typeof 返回变量的数据类型

由于没有char 与 string的区别 所以 对于JS中的字符串并没有要求是单引号还是双引号

# JS对象

对象也是一个变量，但对象可以包含多个值（多个变量）

###### 每个值以 name:value 对呈现。 

var car = {name:"Fiat", model:500, color:"white"};

var person = {
   firstName:"John",
   lastName:"Doe",
   age:50,
   eyeColor:"blue"
 };

JavaScript 对象是变量的容器

# 访问对象方法与属性

### 访问对象属性

person.lastName;

person["lastNmae"]

返回值为Doe

### 访问对象方法

对象中定义一个函数 并作为对象的属性存储

通过添加（）调用

函数名 ：function()

{

​	body 不同属性对象之间定义用逗号隔开 最后一个不添加逗号

}

name = 对象名.函数名()

var person = {

  firstname:"Jack",

  lastname:"Doe",

  age:50,

  eyeColor:"blue",

  printfirsname:function()

  {

​    window.alert(this.firstname);

  }

};

person.printfirsname();

# JS作用域

### 局部变量和全局变量

没有在函数中声明的变量就是全局变量

在函数中声明的变量就是局部变量 其中 局部变量在函数执行完成后 会被销毁

全局变量会在关闭页面的时候销毁

函数参数只在函数内起作用 局部变量

# JS事件

###  HTML 事件

是浏览器行为，也可以是用户行为。

以下是 HTML 事件的实例：

-  HTML 页面完成加载
-  HTML input 字段改变时
-  HTML 按钮被点击

通常，当事件发生时，你可以做些事情。

在事件触发时 JavaScript 可以执行一些代码。

HTML 元素中可以添加事件属性，使用 JavaScript 代码来添加 HTML 元素。

### JS的作用

事件可以用于处理表单验证，用户输入，用户行为及浏览器动作:

- 页面加载时触发事件
- 页面关闭时触发事件
- 用户点击按钮执行动作
- 验证用户输入内容的合法性
- 等等 ...

可以使用多种方法来执行 JavaScript 事件代码：

- HTML 事件属性可以直接执行 JavaScript 代码
- HTML 事件属性可以调用 JavaScript 函数
- 你可以为 HTML 元素指定自己的事件处理程序
- 你可以阻止事件的发生。



# 正则表达式

正则表达式是由一个**字符序列**形成的**搜索模式**。

当你在文本中搜索数据时，你可以用搜索模式来描述你要查询的内容。

var patt = /runoob/i

实例解析：

**/runoob/i** 是一个正则表达式。

**runoob** 是一个**正则表达式主体** (用于检索)。

**i** 是一个**修饰符** (搜索不区分大小写)。

正则表达式通常用于两个字符串方法 : **search()** 和 **replace()**。

**search()**  方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串，并返回子串的起始位置。

**replace()**  方法用于在字符串中用一些字符串替换另一些字符串，或替换一个与正则表达式匹配的子串。

实例：

var str = "Visit Runoob!";  var n = str.search(/Runoob/i);

输出结果为：

6

可以发现 字符串计数是从0开始 空格也算作一个字符 当字符串完全匹配的时候 就返回第一个字符的起始位置











