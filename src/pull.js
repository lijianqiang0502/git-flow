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
            console.log('\x1B[32m%s\x1B[0m', "changes files: \n"+res.files.join('\n'));
        }
    );
}

module.exports = {
    pull,
}