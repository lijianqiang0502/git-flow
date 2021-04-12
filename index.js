#!/usr/bin/env node

const {createHotfixBranch} = require('./src/hotfix');
const {createFeatureBranch} = require('./src/feature');
const {push} = require('./src/push');
const {pull} = require('./src/pull');
const {test} = require('./src/test');

function showHelp() {
    console.log('  usage:\n');
    console.log('  -v --version [show version]');
    console.log('  -h --help [show help]');
    console.log('  hotfix [create hotfix-[name] branch and checkout hotfix-[name]]');
    console.log('  feature [create feature-[name] branch and checkout feature-[name]]');
}


function run (argv) {
    if (argv[0] === '-v' || argv[0] === '--version') {

        console.log('  version is 0.0.1');

    }
    else if (argv[0] === 'hotfix') {
        createHotfixBranch();
    }
    else if (argv[0] === 'feature') {
        createFeatureBranch();
    }
    else if (argv[0] === 'ph' || argv[0] === 'push') {
        push();
    }
    else if (argv[0] === 'test') {
        test();
    }
    else if (argv[0] === 'pl' || argv[0] === 'pull') {
        pull();
    }
    else if (argv[0] === '-h' || argv[0] === '--help'){
        showHelp();
    }
    else{
        const error = `The command cannot be found, please refer to the following document`;
        console.log('\x1B[31m%s\x1B[0m', error);
        showHelp();
    }
}
run(process.argv.slice(2));