import componentACss from "./componentA.module.css";
import componentAless from "./index.module.less";

console.log(componentACss);

const div = document.createElement("div");

document.body.appendChild(div);

div.className = componentACss.footer;
