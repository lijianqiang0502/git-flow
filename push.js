var readlineSync = require('readline-sync');
const simpleGit = require('simple-git/promise');
const git = simpleGit();


// var commitMsg = readlineSync.question('Please enter the commit message： ');

async function quickGit() {
    // await git.status();
    // await simpleGit.checkout('master');
    await git.add('./*');
    await git.commit('first commit!');
    await git.pull('origin', 'jiuzhe');  
    await git.push('origin', 'jiuzhe');
    // await simpleGit.mergeFromTo('from', 'to');
}
quickGit();