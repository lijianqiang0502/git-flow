var readlineSync = require('readline-sync');
const simpleGit = require('simple-git');
const git = simpleGit();


var commitMsg = readlineSync.question('Please enter the commit message： ');

console.log(git);

git.raw('add', '.');
git.raw('commit', '-m', commitMsg);
git.raw('pull', 'origin', 'new');
git.raw('push', 'origin', 'new');