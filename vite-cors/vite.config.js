import { defineConfig } from "vite";

export default defineConfig({
  server: {
    //开发服务器中的配置
    proxy: {
      //配置跨域解决方案
      "/api": {
        //key+描述对象 以后再遇到 /api开头的请求时，都将其代理到
        target: "https://www.360.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), //是否要重写api路径
      },
    },
  },
});
