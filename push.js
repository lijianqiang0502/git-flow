var readlineSync = require('readline-sync');
const simpleGit = require('simple-git');
const simpleGitP = require('simple-git/promise');
const git = simpleGit();
const gitP = simpleGitP();


git.diffSummary().then(
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


  

var commitMsg = readlineSync.question('Please enter the commit message： ');

async function quickGit() {
    let branchs = await gitP.branch();
    branchs = branchs.branches;
    let currentBranch;

    for(let key in branchs){
        if(branchs[key].current === true){
            currentBranch = key;
        }
    }

    console.log(currentBranch);

    await gitP.add('./*');
    await gitP.commit(commitMsg);
    await gitP.pull('origin', currentBranch);  
    await gitP.push('origin', currentBranch);
}
quickGit();