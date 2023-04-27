import svgIcon from "../assets/svg/保存.svg?url"; //默认是 url，读的是路径
import svgRaw from "../assets/svg/保存.svg?raw"; //读的是原svg文件
console.log("svgIcon", svgIcon, svgRaw);
// 第一种使用svg的方式
// const img = document.createElement("img");
// img.src = svgIcon;
// document.body.appendChild(img);

// 第二种加载svg的方式
document.body.innerHTML = svgRaw;
const svgElement = document.getElementsByTagName("svg")[0];

svgElement.onmouseenter = function () {
  // 不是去改它的background，也不是color，而是fill属性
  // this.width.animVal.value = 100;
  this.style.fill = "red"; //未生效
  console.log(111111, this.style.fill);
};
