const fs = require('fs');
const aws = require('aws-sdk');
const shell = require('shelljs');

const s3 = new aws.S3();

const upload = args => new Promise((resolve, reject) => {
  console.log('λ uploading...');
  const file = args.key || `${args.name}.zip`;

  fs.readFile(file, (err, data) => {
    if (err) {
      console.log('λ fs error', err);
      reject();
    }
    const params = {
      Bucket: args.bucket,
      Body: data,
      Key: file,
    };
    s3.upload(params, (uploadErr) => {
      if (uploadErr) {
        console.log(`λ ${uploadErr}`);
        reject();
      }
      shell.exec(`rm ${file}`);
      resolve();
    });
  });
});

module.exports = upload;
