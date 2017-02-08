const shell = require('shelljs');

/* eslint arrow-body-style: 0 */
const zip = (args) => {
  return new Promise((resolve) => {
    console.log('λ zipping...');
    shell.exec(`zip -r ${args.key} ${args.file} node_modules`
        , { silent: true });
    resolve();
  });
};

module.exports = zip;
