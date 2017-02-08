const aws = require('aws-sdk');
const upload = require('../utils/upload');
const zip = require('../utils/zip');

const lambda = new aws.Lambda({ region: 'us-east-1' });

const create = (args) => {
  zip(args)
  .then(() => upload(args))
  .then(() => {
    const params = {
      Code: {
        S3Bucket: args.bucket,
        S3Key: args.key,
      },
      FunctionName: args.name,
      Handler: args.handler || args.name,
      Role: args.role,
      Runtime: 'nodejs4.3',
      Publish: true,
    };

    lambda.createFunction(params, (err) => {
      if (err) console.log('λ not created: ', err);
      else console.log(`λ ${args.name} is created!`);
    });
  });
};


module.exports = create;
