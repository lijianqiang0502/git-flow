var readlineSync = require('readline-sync');
const simpleGit = require('simple-git/promise');
const git = simpleGit();


var commitMsg = readlineSync.question('Please enter the commit message： ');

try{
    git.raw('add', '.');
    git.raw('commit', '-m', commitMsg);
    git.raw('pull', 'origin', 'jiuzhe');
    git.raw('push', 'origin', 'jiuzhe');
}
catch(error){
    console.error(error);
}