const feature = require('./feature');
const program = require('commander');

program
    .command('feature [name]')
    .alias('f')
    .option('-s, --submodule <submodule>', 'open submodule', 'true')
    .description('create feature-[name] branch')
    .action(function (name, options) {
        if (!checkName(name)) {
            return false;
        }

        if (options.submodule === 'true' && submodules.length > 0) {
            commonSubmoduleResolve();
        } else {
            commonProcess(feature, name, {
                restoreStack: false,
            });
        }
    });
