## Usage
`deployless` accepts two "verbs":

1. `deployless create`
2. `deployless update`

### create
The `create` verb requires a few arguments:

1. `bucket`, e.g. `bucket=deployless-bucket`: The S3 bucket to save the code.

2. `role`, e.g. `role=999999999`: The AMI role for the lambda function

3. `name`, e.g. `name=handleDeploy`: The function name.

4. `file`, e.g. `file=file.js`: The function file.

5. `key`, e.g. `key=deploy.zip`: The name of the file in S3.

#### Optional arguments
`handler`, e.g. `handler=deploy`: The name of the `exports.handler` if it's different than the function name.
If `handler` is not specified than the `name` will be used.


### update
The `update` verb requires a few arguments:

1. `bucket`, e.g. `bucket=deployless-bucket`: The S3 bucket to save the code.

2. `name`, e.g. `name=handleDeploy`: The function name.

3. `key`, e.g. `key=deploy.zip`: The name of the file in S3.

4. `file`, e.g. `file=file.js`: The function file.
