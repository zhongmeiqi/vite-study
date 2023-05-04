import mockJS from "mockjs";

const userList = mockJS.mock({
  "data|100": [
    {
      name: "@cname", //表示生成不同的中文名
      ename: "@name", //生成不同的英文名
      "id|+1": 1, // avatar、角度、cos、sin ，各种小数
      time: "@time",
      date: "@date",
    },
  ],
});
console.log("uselist", userList);

module.exports = [
  {
    method: "post",
    url: "/api/users",
    response: ({ body }) => {
      // body --->请求体
      // page pageSize body
      return {
        code: 200,
        msg: "success",
        data: userList,
      };
    },
  },
];
