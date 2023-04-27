import _ from "lodash"; //lodash可能也 import 了其他东西
import lodashES from "lodash-es";
// 假设lodash又以来了其他的模块，并且这些模块都是用export导出

console.log("lodash", _);

export const count = 0;
