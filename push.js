var readlineSync = require('readline-sync');
const simpleGit = require('simple-git');
const git = simpleGit();


var commitMsg = readlineSync.question('Please enter the commit message： ');

git.raw('add', '.');
git.raw('commit', '-m', commitMsg);
git.raw('pull', 'origin', 'jiuzhe');
git.raw('push', 'origin', 'jiuzhe');