const Koa = require("koa"); //因为在写node,所以不能用esmodule，必须使用commonjs

const fs = require("fs"); // ./ npm install yarn add ，原本是要在node-modules里面找，但是这是node的内置模块

const path = require("path"); // 提供一些方法让我们组装路径

// document.getElementById(id名) ---> 是浏览器环境注入给JS的特殊能力

// 当我们安装了node以后， node 文件路径，就可以运行该文件

// 不同的宿主环境会给JS赋予一些不同的能力

const app = new Koa(); //const vue = new Vue()

// Node 最频繁做的事情就是在处理请求和操作文件

// 当请求来临以后会直接进入到use注册的回调函数中
app.use(async (ctx) => {
  //context 上下文 request ---> 请求信息 响应信息 get请求
  // console.log("ctx", ctx.request, ctx.response);
  //实际开发用中间件就行，不用这么多ifelse 进行路径判断
  if (ctx.request.url === "/") {
    // 这意味着其他人在我们要根路径的东西，比如你访问 baidu.com
    const indexContent = await fs.promises.readFile(
      path.resolve(__dirname, "./index.html")
    ); //在服务端一般不这么用，一般采用文件流的方式
    // 最终会生成一个绝对路径
    // console.log("///////", path.resolve(__dirname, "./index.html"));
    // console.log("indexContent", indexContent.toString());
    ctx.response.body = indexContent; // 作为响应体发给对应的请求的人

    // 你响应体是填充好了，那你要以什么形式发给他呢？你希望对方拿到你的东西的时候以什么方式去解析呢
    // json ---> application/json  text/html  text/javascript
    ctx.response.set("Content-Type", "text/html");
  }
  if (ctx.request.url === "/main.js") {
    //context 上下文 request ---> 请求信息 响应信息 get请求
    const mainContent = await fs.promises.readFile(
      path.resolve(__dirname, "./main.js")
    ); //在服务端一般不这么用，一般采用文件流的方式
    // 最终会生成一个绝对路径
    // console.log("mainContent", mainContent.toString());
    ctx.response.body = mainContent; // 作为响应体发给对应的请求的人

    // 你响应体是填充好了，那你要以什么形式发给他呢？你希望对方拿到你的东西的时候以什么方式去解析呢
    // json ---> application/json  text/html  text/javascript
    ctx.response.set("Content-Type", "text/javascript");
  }
  if (ctx.request.url === "/App.vue") {
    //如果是vue文件，会做一个字符串替换， mainVueContent.toString().find("<template>")如果匹配到了就直接全部进行字符串替换
    // AST语法分析 ===>Vue.createElement()---->构建原生DOM
    const mainVueContent = await fs.promises.readFile(
      path.resolve(__dirname, "./App.vue")
    );
    ctx.response.body = mainVueContent;
    // 即使你看到了 .vue文件，你也给也用JS的方式去解析
    // 在浏览器和服务器眼里，你的文件都是字符串
    ctx.response.set("Content-Type", "text/javascript");
  }
  //比如后台给我们一个获取用户信息的接口 api/getUserInfo post
  if (ctx.request.url === "/api/getUserInfo") {
    // 去数据库找到用户信息然后返回给前端
  }
});
app.listen(5173, () => {
  // console.log("vite dev serve listen on 5173");
});
