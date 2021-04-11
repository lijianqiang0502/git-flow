const simpleGit = require('simple-git/promise');
var readlineSync = require('readline-sync');
const gitP = simpleGit();




async function quickGit() {

    var branchName = readlineSync.question('Please enter the branch name： ');
    await gitP.raw('checkout', '-b', branchName);
    await gitP.add('./*');
    await gitP.commit("init");
    await gitP.pull('origin', branchName);  
    await gitP.push('origin', branchName);
}
quickGit();