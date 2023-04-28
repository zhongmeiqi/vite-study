module.exports = (options) => {
  return {
    // 转换html
    // 将我们插件的一个执行实际提前
    transformIndexHtml: {
      enforce: "pre", //执行时机非常靠前
      transform: (html, ctx) => {
        // ctx 表示当前整个请求的一个执行期上下文（一个数据的集合）：api /index.html /user/userlist 返回的json数据 post请求，请求头什么的
        console.log(html, options.inject, "html------------");
        return html.replace(/<%= title %>/g, options.inject.data.title);
      },
    },
  };
};
