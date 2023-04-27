import { defineConfig, loadEnv } from "vite"; // 传入一个对象，返回一个相同的对象，有ts类型检测，可以自动提示
import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

//策略模式 ，尽量少if-else，还有一个状态模式
const envResolver = {
  // 这里也可以不用函数，但是可以方便扩展，比如要调试 console.log
  // Object.assign({},viteBaseConfig, viteProdConfig ) === { ...viteBaseConfig, ...viteProdConfig }
  build: () => {
    console.log("生产环境");
    return { ...viteBaseConfig, ...viteProdConfig };
  },
  serve: () => {
    console.log("开发环境");
    return { ...viteBaseConfig, ...viteDevConfig }; //新配置里可能会被配置envDir .envA
  },
};

// export default defineConfig(config:({command:"build"|"serve"})=>){}) // webstrom自带提示
export default defineConfig((command) => {
  // console.log("command", command);
  // console.log("cwd", process.cwd());
  // 第二个参数传：当前env文件所在的目录，不是必须使用process.cwd() envDir:"D:\vite-study\test-vite"
  // 第三个参数默认是.env，如果不传应该传空字符串,prefixes接受的环境变量前缀，默认为VITE_
  const env = loadEnv(command.mode, process.cwd());
  console.log("env////", env);
  // console.log("mode", command.mode);
  return envResolver[command.command]();
  // 是build还是serve主要取决于我们敲的命令是开启开发环境还是生产环境
  // if (command.command === "build") {
  //   代表生产环境的配置;
  //   console.log("生产环境");
  //   return { ...viteBaseConfig, ...viteProdConfig };
  // } else {
  //   代表开发环境的配置;
  //   console.log("开发环境");
  //   return { ...viteBaseConfig, ...viteDevConfig };
  // }
});

/** @type {import ("vite").UserConfig} */
/* const viteConfig = {
  optimizeDeps: {
      exclude: ["lodash-es"], //当遇到 lodash-es这个依赖的时候不进行依赖预构建
  },
}; 

export default viteConfig;
*/

/**js文件里面有语法提示 bar().展示的字符串的方法
 * @param
 * @return {string}
 */
// function bar() {}
