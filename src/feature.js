const simpleGit = require('simple-git/promise');
var readlineSync = require('readline-sync');
const gitP = simpleGit();




async function createFeatureBranch() {
    var branchName = readlineSync.question('Please enter the feature-branch name： ');
    await gitP.raw('checkout', '-b', `feature-${branchName}`);
    await gitP.add('./*');
    await gitP.commit("init");
    await gitP.push('origin', `feature-${branchName}`);
}

module.exports = {
    createFeatureBranch,
}