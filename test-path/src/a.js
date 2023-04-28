// console.log("__dirname", __dirname);

// 涉及到commandjs规范的一个原理

// node.fs读文件的时候，会把该文件复制一份到一个【立即函数】里面执行（就可以实现模块化隔离文件，有单独的作用域）
// (function () {
//   // console.log("__dirname", __dirname);
// })();

// console.log("arugumnent", arguments);
// 第一个是空对象，就是我们export的东西
// 第二个是require
// 第三个是module;
// 第四个是__filename，当前文件所在的绝对路径

// exports = modules.exports = {};

// 第5个成员就是 __dirname

(function (exports, require, module, __filename, __dirname) {
  require("");
  // console.log("__dirname", __dirname);
})();
