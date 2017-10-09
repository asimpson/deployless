const shell = require('shelljs');
const fs = require('fs');

const zip = args => {
  console.log('λ zipping...');
  const key = args.key || `${args.name}.zip`;
  const file = args.file || `${args.name}.js`;
  const dirs = args.files.filter(x => fs.statSync(x).isDirectory());
  const files = args.files.filter(x => !fs.statSync(x).isDirectory());
  shell.exec(`zip ${key} ${file} ${files.join(' ')}`, {
    silent: true,
  });
  shell.exec(`zip -ru ${key} ${dirs.join(' ')} node_modules`, {
    silent: true,
  });
};

module.exports = zip;
