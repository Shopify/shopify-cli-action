const core = require('@actions/core');
const path = require('path');
const execSync = require('./execSync');
const input = require('./input');

module.exports = () => {
  try {
    execSync('gem install shopify-cli');
    const cwd = input.path()
      ? path.resolve(input.path())
      : process.cwd();
    const env = { SHOPIFY_CLI_STACKTRACE: 1 };
    if (input.authToken()) {
      env.SHOPIFY_CLI_AUTH_TOKEN = input.authToken();
    }
    execSync(`shopify ${input.command()}`, { cwd }, env);
  } catch (error) {
    core.setFailed(error.message);
  }
};
