#! /usr/bin/env node

/* eslint no-unused-vars: 0 */
const create = require('./actions/create');
const update = require('./actions/update');

const processArgs = (args) => {
  if (args[2] !== 'create' && args[2] !== 'update') {
    console.log(`λ ${args[2]} is not a recognized command`);
    return false;
  }
  const options = args.slice(3);
  const optionObj = {};
  const optionKeys = options.map(x => x.split('=')[0]);

  /* eslint no-return-assign: 0 */
  options.forEach((x, i) => optionObj[optionKeys[i]] = x.split('=')[1]);
  optionObj.action = args[2] === 'create' ? create : update;

  return optionObj;
};

const parseArgs = () => {
  const args = processArgs(process.argv);
  args.action(args);
};

parseArgs();
