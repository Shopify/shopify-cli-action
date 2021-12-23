const core = require('@actions/core');
const execSync = require('./execSync');
const input = require('./input');

module.exports = () => {
  try {
    execSync('gem install shopify-cli');
    const path = input.path() || '.';
    const envVars = input.authToken()
      ? `SHOPIFY_CLI_AUTH_TOKEN = ${input.authToken()}`
      : '';
    execSync(`cd ${path} && ${envVars} shopify ${input.command()}`);
  } catch (error) {
    core.setFailed(error.message);
  }
};
