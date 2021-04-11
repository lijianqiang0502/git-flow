const simpleGit = require('simple-git');
var readlineSync = require('readline-sync');
const git = simpleGit();


var branchName = readlineSync.question('Please enter the branch name： ');

git.raw('checkout', '-b', branchName);