const aws = require('aws-sdk');
const upload = require('../utils//upload');
const zip = require('../utils/zip');

const lambda = new aws.Lambda({ region: 'us-east-1' });

const update = (args) => {
  zip(args);
  upload(args)
  .then(() => {
    const params = {
      S3Bucket: args.bucket,
      S3Key: args.key || `${args.name}.zip`,
      FunctionName: args.name,
      Publish: true,
    };

    lambda.updateFunctionCode(params, (err) => {
      if (err) console.log('λ not created: ', err);
      else console.log('λ done');
    });
  });
};

module.exports = update;
