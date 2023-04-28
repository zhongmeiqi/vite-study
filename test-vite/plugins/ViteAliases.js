// vite 的插件必须返回给vite一个配置对象
const fs = require("fs");
const path = require("path");

function diffDifAndFile(dirFilesArr = [], basePath = "") {
  const result = {
    dirs: [],
    files: [],
  };
  dirFilesArr.forEach((name) => {
    // 一般都是异步读取文件之类的，但是这里为了方便看报错以及理解，用了同步
    const currentFileStat = fs.statSync(
      path.resolve(__dirname, basePath + "/" + name)
    );
    // console.log("current file stat", name, currentFileStat.isDirectory());

    const isDirectory = currentFileStat.isDirectory();
    if (isDirectory) {
      result.dirs.push(name);
    } else {
      result.files.push(name);
    }
  });
  return result;
}

function getTotalSrcDir(keyName) {
  const result = fs.readdirSync(path.resolve(__dirname, "../src"));
  const diffResult = diffDifAndFile(result, "../src");
  // console.log(diffResult);
  const resolveAliaseObj = {}; // 放到就是一个一个的别名配置 @assets:xxx
  diffResult.dirs.forEach((dirName) => {
    const key = `${keyName}${dirName}`;
    const absPath = path.resolve(__dirname, "../src" + "/" + dirName);
    // console.log("key", key, absPath);
    resolveAliaseObj[key] = absPath;
  });
  return resolveAliaseObj;
}

module.exports = ({ keyName = "@" } = {}) => {
  return {
    // config函数可以返回一个对象，这个对象是部分的viteconfig配置【其实就是你想改的那一部分】
    config(config, env) {
      // 只是传给你 但是没有执行配置文件
      // console.log("config", config, env);
      // config:目前的一个配置对象
      // 【production、development】、【serve、build、yarn dev yarn build】
      // env:mode:string command:string
      const resolveAliaseObj = getTotalSrcDir(keyName);
      // console.log("resolveAliaseObj", resolveAliaseObj);
      return {
        // 在这我们要返回一个resolve出去，将src目录下的所有文件夹进行别名控制
        // 读目录
        resolve: {
          resolve: {
            alias: resolveAliaseObj,
          },
        },
      };
    },
  };
};

// 输出一个函数的话，可以让传进很多参数，扩展性变得足够高
// 比如：输出index.html的插件
// export default (option)=>{
//     return {
//         name:option.name || "index.html"
//     }
// }

// Object.assign({},defaultCOnfig,{evnPrefix:'abc'})
