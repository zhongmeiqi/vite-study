const Koa = require("koa");

const fs = require("fs");

const path = require("path");

const app = new Koa();

//我们不用返回给客户端，而且我们这里约定的名字就叫做vite.config.js
const viteConfig = require("./vite.config");
const aliasResolver = require("./aliasResolver");

console.log(viteConfig);

app.use(async (ctx) => {
  if (ctx.request.url === "/") {
    const indexContent = await fs.promises.readFile(
      path.resolve(__dirname, "./index.html")
    );

    ctx.response.body = indexContent;
    ctx.response.set("Content-Type", "text/html");
  }

  if (ctx.request.url.endsWith(".js")) {
    const JSContent = await fs.promises.readFile(
      path.resolve(__dirname, "." + ctx.request.url)
    );
    // 直接进行alias的替换
    const lastCOntent = aliasResolver(
      viteConfig.resolve.alias,
      JSContent.toString()
    );

    ctx.response.body = lastCOntent;
    ctx.response.set("Content-Type", "text/javascript");
  }
  if (ctx.request.url === "/App.vue") {
    const mainVueContent = await fs.promises.readFile(
      path.resolve(__dirname, "./App.vue")
    );
    ctx.response.body = mainVueContent;
    ctx.response.set("Content-Type", "text/javascript");
  }
  if (ctx.request.url === "/api/getUserInfo") {
  }
});
app.listen(5173, () => {
  console.log("vite dev serve listen on 5173");
});
