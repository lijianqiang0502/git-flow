const simpleGit = require('simple-git/promise');
const gitP = simpleGit();


async function pull() {

    let branchs = await gitP.branch();
    branchs = branchs.branches;
    let currentBranch;

    for(let key in branchs){
        if(branchs[key].current === true){
            currentBranch = key;
        }
    }
    await gitP.pull('origin', currentBranch).then(
        res => {
            for (let key in res.deletions){
                console.log('\x1B[32m%s\x1B[0m', key + "-" + res.deletions[key]);
            }
            for (let key in res.insertions){
                console.log('\x1B[31m%s\x1B[0m', key + "+" + res.insertions[key]);
            }
            // console.log('\x1B[32m%s\x1B[0m', "pull files: \n\n"+res.files.join('\n'));
        }
    );
}
module.exports = {
    pull,
}