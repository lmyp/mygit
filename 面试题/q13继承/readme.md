# 类的继承和创建
#click在ios手机上有300ms延迟，原因及解决方案
1. <meta name="viewport" content="width=device-width, initial-scale=no">
2. FastClick,其原理是：监测到touchend事件后，立刻发出模拟click事件，并把浏览器300ms之后真实发出的事件阻断

# 浏览器自带缓存 cookie  localstorage  sessionstorage
1. Cookie：数据始终在同源的http请求中携带（即使不需要）,即cookie在浏览器和服务器之间来回传递，
而sessionstoreage和local不会自动吧数据发给服务器，仅在本地保存，cookie还有路径（path）的概念，可以限制
cookie只属于某个路径下,存储大小只有4k大小
补充说明一下cookie的作用：
- 保存用户登录状态。例如将用户id存储于一个cookie内，这样当用户下次访问该页面时就不需要重新登录了，现在很多论坛和社区都提供这样的功能。 cookie还可以设置过期时间，当超过时间期限后，cookie就会自动消失。因此，系统往往可以提示用户保持登录状态的时间：常见选项有一个月、三个 月、一年等。
- 跟踪用户行为。例如一个天气预报网站，能够根据用户选择的地区显示当地的天气情况。如果每次都需要选择所在地是烦琐的，当利用了 cookie后就会显得很人性化了，系统能够记住上一次访问的地区，当下次再打开该页面时，它就会自动显示上次用户所在地区的天气情况。因为一切都是在后 台完成，所以这样的页面就像为某个用户所定制的一样，使用起来非常方便

定制页面。如果网站提供了换肤或更换布局的功能，那么可以使用cookie来记录用户的选项，例如：背景色、分辨率等。当用户下次访问时，仍然可以保存上一次访问的界面风格。
2. sessionstorage
    仅在当前浏览器窗口关闭前有效，不能长久保存
3. localStorage
    在所有的同源窗口都是共享的,cookie 也是在所有同源窗口中也是共享的, localstorage的大小在5M左右
# Cookie如何防范XSS攻击
XSS（跨站脚本攻击）是指攻击者在返回的HTML中嵌入javascript脚本，为了减轻这些攻击，需要在HTTP头部配上，set-cookie：

httponly-这个属性可以防止XSS,它会禁止javascript脚本来访问cookie。
secure - 这个属性告诉浏览器仅在请求为https的时候发送cookie。
结果应该是这样的：Set-Cookie=.....

# cookie 和session 的区别：  
1、cookie数据存放在客户的浏览器上，session数据放在服务器上。   
2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗  考虑到安全应当使用session。   
3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能  考虑到减轻服务器性能方面，应当使用COOKIE。   
4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。  
5、所以个人建议：  将登陆信息等重要信息存放为SESSION 其他信息如果需要保留，可以放在COOKIE中

# 谈谈你对webpack的看法  
    WebPack 是一个模块打包工具，你可以使用WebPack管理你的模块依赖， 并编绎输出模块们所需的静态文件。它能够很好地管理、打包Web开发中所用到的HTML、Javascript、CSS以及各种静态文件（图片、字体等），让开发过程更加高效。对于不同类型的资源，webpack有对应的模块加载器。webpack模块打包器会分析模块间的依赖关系，最后生成了优化且合并后的静态资源。 webpack的两大特色：  1.code splitting（可以自动完成）  2.loader 可以处理各种类型的静态文件，并且支持串联操作 webpack是以commonJS的形式来书写脚本滴，但对 AMD/CMD 的支持也很全面，方便旧项目进行代码迁移。  webpack具有requireJs和browserify的功能，但仍有很多自己的新特性：  1. 对CommonJS、 AMD 、ES6的语法做了兼容 2. 对js、css、图片等资源文件都支持打包  3. 串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如提供对CoffeeScript、ES6的支持   4. 有独立的配置文件webpack.config.js  5. 可以将代码切割成不同的chunk，实现按需加载，降低了初始化时间  6. 支持SourceUrls和SourceMaps，易于调试  7. 具有强大的Plugin接口，大多是内部插件，使用起来比较灵活 8.webpack 使用异步 IO 并具有多级缓存。这使得webpack很快且在增量编译上更加快

#说说你对语义化的理解？  
1，去掉或者丢失样式的时候能够让页面呈现出清晰的结构  
2，有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；  3，方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；  
4，便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。

# 32、什么是JavaScript?(这是基本题，对很多程序员来说也是送分题!)    
    JavaScript是客户端和服务器端脚本语言，可以插入到HTML页面中，并且是目前较热门的Web开发语言。同时，JavaScript也是面向对象编程语言。    类似的基本题目还包括：JavaScript都有哪些类型?JavaScript是谁发明的?......  
# 33、列举Java和JavaScript之间的区别?  Java是一门十分完整、成熟的编程语言。相比之下，JavaScript是一个可以被引入HTML页面的编程语言。这两种语言并不完全相互依赖，而是针对不同的意图而设计的。 Java是一种面向对象编程(OOPS)或结构化编程语言，类似的如C ++或C，而JavaScript是客户端脚本语言，它被称为非结构化编程。   
# 34、什么是全局变量?这些变量如何声明，使用全局变量有哪些问题?    
全局变量是整个代码长度可用的变量，也就是说这些变量没有任 何作用域。var关键字用于声明局部变量或对象。如果省略var关键字，则声明一个全局变量。    例：// Declare a global globalVariable = “Test”;   使用全局变量所面临的问题是本地和全局变量名称的冲突。此外，很难调试和测试依赖于全局变量的代码。  
# 35、git fetch和git pull的区别  
git pull：相当于是从远程获取最新版本并merge到本地  git fetch：相当于是从远程获取最新版本到本地，不会自动merge  


# 原型
①所有引用类型都有一个__proto__(隐式原型)属性，属性值是一个普通的对象 
②所有函数都有一个prototype(原型)属性，属性值是一个普通的对象 
③所有引用类型的__proto__属性指向它构造函数的prototype

var a = [1,2,3];
a.__proto__ === Array.prototype; // true

# 原型链
当访问一个对象的某个属性时，会先在这个对象本身属性上查找，如果没有找到，则会去它的__proto__隐式原型上查找，即它的构造函数的prototype，如果还没有找到就会再在构造函数的prototype的__proto__中查找，这样一层一层向上查找就会形成一个链式结构，我们称为原型链。

function Parent(month){
    this.month = month;
}

var child = new Parent('Ann');

console.log(child.month); // Ann

console.log(child.father); // undefined


# link标签和import标签的区别
link属于html标签，而@import是css提供的
页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载。
link是html标签，因此没有兼容性，而@import只有IE5以上才能识别。
link方式样式的权重高于@import的。

#   transition和animation的区别
Animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from .... to，而animation可以一帧一帧的。

transition是过度属性，强调过度，他的实现需要触发一个事件（比如鼠标移动上去，焦点，点击等）才执行动画。它类似于flash的补间动画，设置一个开始关键帧，一个结束关键帧。
transition: all .5s linear;

animation是动画属性，他的实现不需要触发事件，设定好时间之后可以自己执行，且可以循环一个动画。他也类似于flash的补间动画，但是他可以设置多个关键帧（用@keyframe定义）完成动画。
animation-iteration-count: infinite;    /* 循环次数，infinite（无限次循环） */
@keyframes fillout {
    from {
        width: 200px;
        height: 200px;
    }
    to {
        width: 400px;
        height: 400px;

#   5.Flex布局
flex-direction：决定主轴的方向（即子item的排列方法）
.box {
flex-direction: row | row-reverse | column | column-reverse;
}
flex-wrap：决定换行规则
.box{
flex-wrap: nowrap | wrap | wrap-reverse;
}
flex-flow：
.box {
flex-flow: || ;
}
justify-content：对其方式，水平主轴对齐方式
align-items：对齐方式，竖直轴线方向