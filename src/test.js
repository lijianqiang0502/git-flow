const simpleGit = require('simple-git/promise');
const gitP = simpleGit();

async function test() {
    let branchs = await gitP.branch();
    branchs = branchs.branches;
    let currentBranch;

    for(let key in branchs){
        if(branchs[key].current === true){
            currentBranch = key;
        }
    }

    await gitP.raw('checkout', `master`);
    await gitP.raw('checkout', '-b', `test-${currentBranch}`);
    await gitP.raw('merge', currentBranch);
    await gitP.add('./*');
    await gitP.commit("init");
    await gitP.push('origin', `test-${currentBranch}`);
}

module.exports = {
    test,
}