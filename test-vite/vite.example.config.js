// 用来复习的
import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  optimizeDeps: {
    exclude: [], //将指定数组中的以来不进行依赖预购建
  },
  envPrefix: "ENV_", //配置vite注入客户端环境变量校验的前缀，默认是VITE_开头
  css: {
    //对css的行为进行配置
    modules: {
      // modules配置最终会丢给postcss modules,是对css模块化的默认行为进行覆盖
      localsConvention: "camelCaseOnly", //修改生成的配置对象 key 的展示形式（驼峰还是中划线形式）
      scopeBehaviour: "local",
      // generateScopedName: "[name]_[local]_[hash:5]",https://github.com/webpack/loader-utils#interpolatename
      generateScopedName: (name, filename, css) => {
        // name --->代表的是你此刻长css文件中的类名
        // filename ->是你当前csss文件的绝对路径
        // css -> 给的是你当前的类名的样式
        // console.log("name", name, "filename", filename, "css", css); //输出在node终端

        // 配置成函数后，返回值就决定了他最终显示的类型
        return `${name}_${Math.random().toString(36).substr(3, 8)}`;
      },
      hashPrefix: "hello", //生成的hash值会更加不规则，包含其中的字母
      globalModulePaths: ["./componentB.module.css"], //代表你不想参与到css模块化的路径
    },
    preprocessorOptions: {
      //key + config (key:value的形式) key代表预处理的名称（比如less,sass）
      less: {
        // 整个的配置对象都会最终给到less的执行参数（全局参数）中去
        math: "always",
        globalVars: {
          //全局变量
          // 在webpack里面就给less-loader去配置就好
          mainColor: "red",
        },
      },
      // sass: {},
    },
    devSourcemap: true, //开启 css 的 sourceMap(文件索引),默认是 false
    postcss: {}, //配置postcss相关
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), //设置别名，以后我们在其他组件中可以使用@来代替src目录
    },
  },
  build: {
    //构建生产包时的一些配置策略
    rollupOptions: {
      // 配置rollup的一些构建策略
      output: {
        //控制输出
        // 在rollup里面，hash代表将你的文件名和文件内容进行组合计算的得来的结果
        assetFileNames: "[hash].[name].[ext]",
      },
    },
    assetsInlineLimit: 4096000, //4000kb：图片静态资源如果小于4kb会转化成base64字符，如果大于就会转化成图片
    outDir: "testDist", //配置输出目录
    assetsDir: "static", //配置输出目录中的静态资源目录
    emptyOutDir: true, //清除输出目录中的所有文件，默认也是true
  },
});

