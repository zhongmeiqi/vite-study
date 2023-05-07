// fetch("https://www.360.com").then((data) => {
// axios.get("/api/getUserInfo").then((data) => {
fetch("/api").then((data) => {
  console.log("data", data);
});

// 浏览器会先帮我们做一步拼接

// http://127.0.0.1:5173/api 浏览器拼完以后 找Vite

// Vite发现这个path 有配置过跨域代理策略 然后他会根据策略的描述对象 **进行再次请求**

// /api https://www.360.com

// 偷天换日 ----
// 本来我们要请求360 我直接请求的话 是不是一定会被浏览器逮住
// 我自己开个服务器 --- 我先请求我自己的服务器 浏览器说你请求的是你自己的服务器是吧

// 请求阶段无论是请求自己的服务器还是360的服务器都会放行
// 请求到了我们自己的服务器 这就属于服务器和服务器之间的通信 用我们自己的服务器去请求360服务器

// 这一切都发生在服务器 我们自己的服务器拿到对应结果以后 我们直接把响应结果给浏览器

// 实际上响应体是360返回的东西
