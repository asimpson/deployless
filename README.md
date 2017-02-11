## Usage
`deployless` accepts two "verbs":

1. `deployless create`
2. `deployless update`

### create
The `create` verb requires a few arguments:

1. `bucket`, e.g. `bucket=deployless-bucket`: The S3 bucket to save the code.

2. `role`, e.g. `role=999999999`: The AMI role for the lambda function

3. `name`, e.g. `name=handleDeploy`: The function name.


### update
The `update` verb requires a few arguments:

1. `bucket`, e.g. `bucket=deployless-bucket`: The S3 bucket to save the code.

2. `name`, e.g. `name=handleDeploy`: The function name.


#### Optional arguments
`handler`, e.g. `handler=deploy`: The name of the `exports.handler` if it's different than the function name.
If `handler` is not specified than the `name` will be used.

`file`, e.g. `file=file.js`: The function file.

`key`, e.g. `key=deploy.zip`: The name of the file in S3.


### Additional Files
Specify additional support files that need to be zipped up by adding them as extra arguments: `deployless create bucket=test file=file.js ./support.js ./module.js`
