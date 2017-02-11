const shell = require('shelljs');

const zip = (args) => {
  console.log('λ zipping...');
  const key = args.key || `${args.name}.zip`;
  const file = args.file || `${args.name}.js`;
  shell.exec(`zip -r ${key} ${file} ${args.files.join(' ')} node_modules`, { silent: true });
};

module.exports = zip;
