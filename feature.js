const simpleGit = require('simple-git');

const git = simpleGit();


git.add(['feature.js']);
git.commit("message");