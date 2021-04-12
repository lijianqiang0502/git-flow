const simpleGit = require('simple-git/promise');
var readlineSync = require('readline-sync');
const gitP = simpleGit();




async function createHotfixBranch() {
    var branchName = readlineSync.question('Please enter the hotfix-branch name： ');
    await gitP.raw('checkout', '-b', `hotfix-${branchName}`);
    await gitP.add('./*');
    await gitP.commit("init");
    await gitP.push('origin', `hotfix-${branchName}`);
}
createHotfixBranch();