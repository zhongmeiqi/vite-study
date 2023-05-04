import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "[hash].[name].[ext]",
      },
    },
  },
  plugins: [
    {
      config(options) {
        console.log("config options执行", options);
        // Object.assign(),
        // return{
        //     mode:"development"
        // }
      },
      configureServer(server) {
        // server.middlewares.use((req, res, next) => {});
      },
      transformIndexHtml(html) {
        // return html.replace();
      },
      configResolved(options) {
        // 整个配置文件的解析流程完全完毕以后会走的钩子
        // vite在内部有一个默认的配置文件
        console.log("options", options);
      },
      configurePreviewServer() {},
      //   universal hooks --->vite和rollup都会关注的hooks
      options(rollupOptions) {
        console.log("rollupOptions", rollupOptions);
      },
      buildStart(fullRollupOptions) {
        console.log("fullRollupOptions", fullRollupOptions);
      },
    },
  ],
});

// 默认的cli参数 比如yarn dev --mode development
// 预览：npx vite preview(live server)
// webpack5 federation 联邦

// 比如有2个个项目（也就是2个文件夹）从一个工程调用另一个工程的工具函数
