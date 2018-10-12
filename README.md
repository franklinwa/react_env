#  一、安装sass-loader和node-sass依赖
npm install sass-loader node-sass --save-dev

# ES6 模块导出
// profile.js
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;

export {firstName, lastName, year};

…or create a new repository on the command line
 echo "# 111" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/franklinwa/111.git
git push -u origin master

…or push an existing repository from the command line
 git remote add origin https://github.com/franklinwa/111.git
git push -u origin master

# 如何布局react
https://zhuanlan.zhihu.com/p/39799393

index.js 自然不用说，属于项目入口的文件，所有的起点都在这里，统一做一些初始化工作，例如加载各种依赖、加载状态管理库等等



router.js 是一个单独的文件，这个文件确定了整个 React 应用的路由表，我会尽量想方设法的把所有的路由都放在这里进行统一的管理，这么做的好处极其明显：统一。（偷偷告诉你们，我会在项目中写一个 eslint 插件对 router 类似的关键词进行检查，如果定义超出了 router.js 的范围，那程序直接报错，无法编译）



controller 是一个目录，目录下装着各种各样的控制器文件，这些控制器文件对应到 DVA 和 rematch 之类的状态管理库就是所谓的 model，我个人认为 model 的叫法其实并不合适，而 controller 更为贴切？当然，叫什么随便你，这里不多做撕逼。



assets 公共资源文件。请注意公共二字我特别打上了重点，其原因是很多开发人员将组件级别的资源文件放置到了公共资源文件进行统一的管理，但是在实践中我并不认为这是一个特别好的选择。与组件强依赖的资源文件我认为和组件一起放置在一个文件夹内，能够更快、更容易的进行管理。只有通用的公共文件才会放在这里来。



pages 和 components 文件夹，前者放置的是页面以及页面强依赖的组件，例如注册页面 login，用户管理界面 user 等等。后者则放置的是公共组件。与公共资源文件一样，强依赖的组件就应该和其页面在同一个文件夹中去管理。



component 文件夹比较特殊，里面可能装着 button/select/card 等等组件
# ES6 Javascript 实用开发技巧
ES6 实用开发技巧
定义变量/常量

ES6 中新增加了 let 和 const 两个命令，let 用于定义变量，const 用于定义常量 两个命令与原有的 var 命令所不同的地方在于，let, const 都是块级作用域，其有效范围仅在代码块中，实例如下：

//es5
if(1==1){
  var b = 'foo';
}
console.log(b);//foo

//es6
if(1==1){
  let b = 'foo';
}
console.log(b);//undefined
定义常量对象

const a = {a:1,b:2};
a.b = 3;
console.log(a);//{a:1,b:3}
上例中，常量 a 中的内容在定义后，再进行修改依然有效，原因是对于对象类型的使用是指针式引用，常量只是指向了对象的指针，对象本身的内容却依然可以被修改，注意，数组(Array) 也是对象； 那么如果在定义常量时使用基础数据类型：string, number, boolean 等

const a = 1;
a = 2;// Uncaught TypeError: Assignment to constant variable.
在使用中，建议使用 let 与 const 完全代替 var 命令

数值扩展

转换 Number.parseInt - 将字符串或数字转换为整数 Number.parseFloat - 将字符串或数字转换为浮点数

Number.parseInt, Number.parseFloat 与 parseInt, parseFloat 功能一致，在ES6中，推荐使用 Number. 的方式进行调用，这么做的目的是为了让代码的使用方式尽可能减少全局性方法，使用得语言逐步模块化

测试函数

//测试是否整数
Number.isInteger(21)//true
Number.isInteger(1.11)//false

//测试是否NaN
Number.isNaN(Nan)//true
Number.isNaN(1)//false
<br><br>

字符串扩展

字符串内容测试

'abcdef'.includes('c');//true
'abcdef'.includes('ye');//false
'abcdef'.startsWith('a');//true
'abcdef'.endsWitch('f');//true

//includes(), startsWith(), endsWith() 都支持第二个参数，
//类型为数字类型，意为从第 n 个字符开始，endsWith()的第二个参数有点不一样
'abcdef'.includes('c', 4);//false 从第5个字符开始查找是否有 'c' 这个字符
'abcdef'.startsWith('d', 3);//true 从第4个字符开始查找是否是以 'd' 字符为开头
'abcdef'.endsWith('d', 4);//true 前面的4个字符里，是否以 'd' 字符为结尾
字符串内容重复输出

'a'.repeat(5);//aaaaa 重复输出5遍
原生支持模板语言

//es5
$('#result').append(
  'There are <b>' + basket.count + '</b> ' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);
//es6
//在es6中，内容模板，可以定义在 `` 包起来的字符串中，其中的内容会保持原有格式
//另外可以在字符串中直接使用模板语言进行变量填充，优雅而简洁
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
字符串遍历输出

//for ...of 格式为 es6 中的 Iterator 迭代器的输出方式
for(let c of 'abc'){
  console.log(c);
}
//a
//b
//c
字符串补全

//参数1：[number] 目标字符串长度
//参数2：[string] 进行补全的字符串
'12345'.padStart(7, '0')//0012345 - 字符串不足7位，在头部补充不足长度的目标字符串
'12345'.padEnd(7, '0')//1234500 - 在尾部进行字符串补全
数组扩展

合并数组

let a = [1, 2];
let b = [3];
let c = [2, 4];
let d = [...a, ...b, ...c];//[1, 2, 3, 2, 4] 所有内容合并，但并不会去除重复
快速转换为数组

Array.of(3,4,5)//[3,4,5]
数组内容测试

//判断对象是否为数组
if(Array.isArray(obj)){...}

[1,2,3].includes(5);//false，检索数据中是否有5

//找出第一个匹配表达式的结果，注意是只要匹配到一项，函数即会返回
let a = [1, 3, -4, 10].find(function(value, index, arr){
  return value < 0;
});
console.log(a);//-4

//找出第一个匹配表达式的结果下标
let a = [1, 3, -4, 10].findIndex(function(value, index, arr){
  return value < 0;
});
console.log(a);//2
内容过滤

//排除负数内容
let a = [1, 3, -4, 10].filter(function(item){
  return item > 0;
});
console.log(a);//[1, 3, 10]
内容实例

.keys() - 获得数组中所有元素的键名（实际上就是下标索引号）

.values() - 获得数组中所有元素的数据

.entries() - 获得数组中所有数据的键名和数据

for (let index of ['a', 'b'].keys()) {
  console.log(index);
}
// 0
// 1

for (let elem of ['a', 'b'].values()) {
  console.log(elem);
}
// 'a'
// 'b'

for (let [index, elem] of ['a', 'b'].entries()) {
  console.log(index, elem);
}
// 0 "a"
// 1 "b"
.entries(), .keys(), .values() 功能与 Object 中的几个同名函数功能类似，实际使用中实用性不高，对于数组的操作，直接进行遍历即可

对象扩展

属性的简洁表示

//直接使用变量/常量的名称个为对象属性的名称
let a = 'abc';
let b = {a};//{a: 'abc'}

function f(x, y){ return {x, y};}
//等效于
function f(x, y){ return {x: x, y: y}}

let o = {
  f(){ return 1; }
}
//等效于
let o = {
  f: function(){ return 1; }
}
判断对象是否为数组

if(Object.isArray(someobj)){}
对象内容合并

let a = {a:1,b:2}, b = {b:3}, c = {b:4,c:5};
let d = Object.assign(a, b, c);
console.log(d);//{a:1,b:4,c:5}
console.log(a);//{a:1,b:4}
//上面的合并方式会同时更新 a 对象的内容，a 的属性如果有多次合并会被更新数据，
//但自身没有的属性，其它对象有的属性不会被添加到 a 身上；
//参数列中的对象只会影响第一个，后面的参数对象不会被修改数据

//推荐使用这种方式进行对象数据合并
let a = {a:1,b:2}, b = {b:3}, c = {b:4,c:5};
let d = Object.assign({}, a, b, c);//第一个参数增加一个空对象，在合并时让它被更新，不影响实际的对象变量内容
console.log(d);//{a:1,b:4,c:5}//与上面的方式合并结果一致，使用这种方式, a 对象的内容就不会被影响了
对象内容合并的方向是从参数顺序的后向前合并

对象内容集合

Object.keys() - 获得对象中所有的键名，以数组的形式返回

var obj = { a:1,b:2 };
var names = Object.keys(obj);//['a', 'b']
Object.values() - 获得对象中所有的值内容，以数组的形式返回

var obj = { a:1,b:2 };
var values = Object.values(obj);//[1, 2]
Object.entries() - 获得对象中所有的成员数据，以数组的形式返回，成员的内容也是数组形式

var obj = { a:1,b:2 };
var values = Object.entries(obj);//[['a',1], ['b',2]]
其实观察可发现，Object.keys(), Object.values(), Object.entries()，与 Java 的 MAP 中的方法是一致的，不论是方法名还是具体的用法，这也可以帮忙理解这些功能 API

解构赋值

let [a, b, c] = [1, 2, 3];
//定义了三个变量，并对应赋了值；如果值的个数与变量名个数不匹配，没有对应上的变量值为 undefined

let [a, b, c='default'] = [1, 2];
//指定默认值，在定义变量时就指定了默认值，如果赋值时，没有给定内容，则会取默认值

let [a, …b] = [1,2,3];
//这里 b 的值为[2，3]，这样可以快速使用剩余的数据赋值给变量，
//但实际使用中为了避免代码阅读的歧义，不推荐这么使用，仅作了解即可

let [a,b,c] = 'yes';
console.log(a);//y
console.log(b);//e
console.log(c);//s
字符串的解构赋值会以单个字符的方式进行赋值

let {length}='yes';
console.log(length);//3
以对象赋值的方式，如果名称是字符串的自带属性，则会获得属性值

let arr = [1,2];
let obj = {a:1,b:2};
function test ({a = 10, b}){
	console.log('a:',a);
	console.log('b:',b);
}
test(obj);
解构赋值的使用实例，作为函数传参，并使用默认值
对象结构解构

let obj = {a: 1, b: 2};
let {a, b} = obj;//a=1,b=2
使用变量的方式进行结构赋值，需要严格匹配名称，数组的模式是严格匹配下标

let obj = {a: 1, b: 2};
let {a=0, b=5} = obj;
赋值并给定默认值

let obj = {a: 1, b: 2};
let {a:A, b} = obj;//A=1,b=2,a报错，变量未定义
获得内容后，将变量进行改名

let obj = {a: 1, b: 2};
let a = 0;
({a, b} = obj);
对已存在的 a 进行修改值，并生成新的变量 b

let obj = {
	arr: ['aaa',{a:1}]
};
let {arr:[b, {a}]} = obj;//这里的arr互相映射
console.log(b);
console.log(a);
获得对象的子数据，并映射到相应的变量，这里需要注意的是结构要对应
模块化

最简单实例的使用场景

//a.js
let a = {a:1,b:2,c:3};
export default a;

//b.js
import a from 'a.js';//假设 a.js 与 b.js 同在一个目录中
console.log(a.a);//1
以上简单的实例就两个脚本文件举例说明了两个文件在实际使用，可以进行互相引用，并获得目标文件中的数据；我们可以认为一个脚本文件就是一个 模块，那么在实际开发过程中，可以将业务处理内容，或是数据处理过程 抽象 在一个文件中，在需要使用时，由其它模块引入并使用其中的数据


# React实战-代码规范
https://blog.csdn.net/abs9879/article/details/79686670