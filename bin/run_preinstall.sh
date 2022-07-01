# aws-mfa authentication
echo '---------------------------1. aws-mfa authentication'
aws-mfa

# snowplow authentication
echo '---------------------------2. snowplow authentication'
aws codeartifact login --tool npm --repository Snowplow --domain gforces --namespace snowplow --domain-owner 139798301967 --profile FrontendTeam

# export npm token
echo '---------------------------3. export npm token'
FILE_NAME=.env.development.local

if [ ! -f .env.development.local ]; then
  echo "On server!"
  FILE_NAME=.env.props
else
  echo "On localhost!"
fi

echo $FILE_NAME
# export env vars
export $(grep '^NPM_CONFIG_TOKEN' $FILE_NAME | xargs)
# show the exported enviroment variables
env | grep '^NPM_CONFIG_TOKEN'

# install the latest NDC module
echo '---------------------------4. install the latest NDC module'
npm install --save @rddev/web-components@latest
