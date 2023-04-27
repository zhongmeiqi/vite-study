const postcssPressEnv = require("postcss-preset-env");
const path = require("path"); //做路径处理的（做文件路径补全）
module.exports = {
  plugins: [
    postcssPressEnv({
      importFrom: path.resolve(__dirname, "./variable.css"), //就好比你现在让postcss去知道，有一些全局变量他是需要记下来
    }),
  ],
};
