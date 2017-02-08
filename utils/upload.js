const fs = require('fs');
const aws = require('aws-sdk');
const shell = require('shelljs');

const s3 = new aws.S3();

/* eslint arrow-body-style: 0 */
const upload = (args) => {
  return new Promise((resolve, reject) => {
    fs.readFile(args.key, (err, data) => {
      if (err) {
        console.log('λ fs error', err);
        reject();
      }
      const params = { Bucket: args.bucket, Body: data, Key: args.key };
      s3.upload(params, (uploadErr) => {
        if (uploadErr) {
          console.log(`λ ${uploadErr}`);
          reject();
        }
        console.log('λ uploading...');
        shell.exec(`rm ${args.key}`);
        resolve();
      });
    });
  });
};

module.exports = upload;
