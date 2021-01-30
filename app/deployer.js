// 1.检测文件夹dist是否存在
// 2.build
// 3.发布
const fs = require('fs')
fs.exists(deployDir).then( (exist) => {
    log.info('-----------------------start--------------------');
    if (exist) return clear();
    return build();
}).then(() => {
    return config.github;
}).then((repo) =>{
    return gitPush(repo);
}).then(() =>{
    log.info('-----------------------finish-------------------');
})