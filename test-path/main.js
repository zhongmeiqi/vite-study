/***
 * 一定会去读文件
 * 我们如果写的是相对路径，那么他会尝试去拼接成绝对路径
 *commonjs 规范 注入几个变量 __dirname
 *
 *
 */
const fs = require("fs"); //处理文件的模块（读文件，修改文件等一系列操作）

const path = require("path"); //path本质上就是一个字符串处理模块，他里面有非常多的路径字符串处理方法

// path.resolve()就是再拼接字符串，./是相对路径  /是绝对路径
const result = fs.readFileSync(path.resolve(__dirname, "./variable.css")); //我们希望基于main.js去进行一个绝对路径的生成（无论是客户端还是服务器，都是采用绝对路径，因为这样最准确）

// console.log("result", result.toString(), process.cwd(), __dirname);
// console.log("--------------");
// console.log(
//   __dirname + "/variable.css",
//   path.resolve(__dirname, "./variable.css")
// );

// node端去读取文件或者操作文件的时候，如果发现你用的是相对路径，则会去使用process.cwd()来进行对应的路径拼接
// process.cwd() :获取当前的node执行目录

//__dirname打印出来的是当前(有__dirname)文件（main.js、a.js）所在的根目录 D:\vite-study\test-path、D:\vite-study\test-path\src,所以./variable.css要变成/variable.css才行

require("./src/a.js");
