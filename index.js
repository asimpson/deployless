#! /usr/bin/env node

const path = require('path');
/* eslint no-unused-vars: 0 */
const create = require('./actions/create');
const update = require('./actions/update');

const actions = {
  create,
  update,
};

const processArgs = (args) => {
  if (!actions[args[2]]) {
    console.log(`λ ${args[2]} is not a recognized command`);
    return false;
  }
  const options = args.slice(3).filter(x => /=/.test(x));
  const additionalFiles = args.slice(3)
  .filter(x => !(/=/.test(x)));

  const optionObj = {};
  const optionKeys = options.map(x => x.split('=')[0]);

  /* eslint no-return-assign: 0 */
  options.forEach((x, i) => optionObj[optionKeys[i]] = x.split('=')[1]);
  if (additionalFiles) {
    optionObj.files = additionalFiles;
  }
  optionObj.action = actions[args[2]];

  return optionObj;
};

const parseArgs = () => {
  const args = processArgs(process.argv);
  args.action(args);
};

parseArgs();
