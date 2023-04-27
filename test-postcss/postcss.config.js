// 就类似于全屋净水系统的加 插槽 plugins(搜postcss-plugins list)
// 预设环境里面是会包含很多的插件
// 语法降级 ---> postcss-low-level
// 编译插件 ---> postcss-compiler
// ....
const postcssPresetEnv = require("postcss-preset-env"); //因为在node环境中，所以要用commonjs规范
// 预设就是帮你一次性的把这些必要的插件都给你装上了(只是一些基本插件，一些比较特别的还是没安装上去的)
// 做语法的编译 less语法 sass语法（语法嵌套 函数 变量） postcss
module.exports = {
  plugins: [postcssPresetEnv],
};
