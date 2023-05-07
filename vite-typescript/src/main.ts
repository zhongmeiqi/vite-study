/* console.log("main.js");

let str = "hellloWorld"; //类型推定

interface PresonField {
  name: string;
  age: number;
}
// 我们假设这个bar函数会有很多if else判断 某一个if就返回一个数字

str = bar(demo()); // 能保证这个bar一定返回的是字符串嘛？

// 为什么不允许这样做（字符串==> 数字）
function demo(params: PresonField) {
  console.log("name", params.name);
}

console.log("str", str, demo({ name: "zmq", age: 16 }));

// 在企业级应用里面，ts是怎么去配置的， 怎么去约束别人的
// 强类型锁定
// 我们怎么让ts的错误直接输出到控制台

// str.charAt(); // 如果是数字就会报错

// 三斜线指令
console.log("meta", import.meta.env.VITE_PROXY_TARGET);
 */

import { forEach } from "lodash";

// ts的类型声明
const mainArr = [];

forEach(mainArr, (ele) => {
  console.log("1ele", ele);
});
