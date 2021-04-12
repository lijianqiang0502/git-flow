const simpleGitP = require('simple-git/promise');
const gitP = simpleGitP();
var readlineSync = require('readline-sync');


gitP.diffSummary().then(
    (diffSummary) => {
        const ignoreFilterList = ['package.lock.json', 'dist'];
        const changes = {
            insertions: 0,
            deletions: 0,
            fileCounts: 0,
            files: [],
        };
        diffSummary.files.forEach((item) => {
            const isIgnore = ignoreFilterList.includes(item.file);
            if (!isIgnore) {
                changes.insertions += item.insertions;
                changes.deletions += item.deletions;
                changes.fileCounts += 1;
                changes.files.push(item.file);
            }
        });
        const codeChange = changes.insertions + changes.deletions;
        const error =
            `
        此次设计到${changes.fileCounts}个文件修改；
        所有改动的文件：${changes.files.join('，')}；
        新增${changes.insertions}行，删除${changes.deletions}行;
        共计改动${codeChange}行；
        `;
        console.log('\x1B[31m%s\x1B[0m', error);

    },
);




async function quickBoe() {
    //获取当前branch名称
    let branchs = await gitP.branch();
    branchs = branchs.branches;
    let currentBranch;
    let mask = 0;

    let rebaseBranch = readlineSync.question('Please enter the rebase branch： ');


    for(let key in branchs){
        if (key === rebaseBranch) {mask = 1}
        if(branchs[key].current === true){
            currentBranch = key;
        }
    }

    if (mask === 0){
        const error = new Error('分支不存在！')
        console.error('\x1B[31m%s\x1B[0m', error);
        process.exit(1);
    }


    // //提交自己的分支
    // await gitP.raw('checkout', currentBranch);
    // await gitP.add('./*');
    // await gitP.commit("");
    // await gitP.push('origin', `boe-${currentBranch}`);

    //拉取rebase分支的最新代码
    await gitP.raw('checkout', rebaseBranch);
    await gitP.pull('origin', rebaseBranch);

    //切换到自己分支
    await gitP.raw('checkout', currentBranch);
    await gitP.rebase(rebaseBranch);
    //解决冲突


}
quickBoe();