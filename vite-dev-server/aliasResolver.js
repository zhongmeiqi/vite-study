module.exports = function (aliasConf, JSContent) {
  console.log(aliasConf, JSContent);

  const entries = Object.entries(aliasConf);
  console.log("entires", entries);
  let lastContent = JSContent;
  entries.forEach((entrie) => {
    const [alias, path] = entrie;
    console.log(alias, path);
    // 会做path的相对路径的处理
    // 如果我用官方的方式去找相对路径的化
    const scrIndex = path.indexOf("/src");
    console.log(srcIndex, 1111111111111111111);
    const realPath = path.slice(scrIndex, path.length);
    console.log("srcIndex", srcIndex, realPath);
    lastContent = JSContent.replace(alias, path);
  });
  console.log("lastContent-------------------", lastContent);
  return lastContent;
};
