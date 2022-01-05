const core = require('@actions/core');
const path = require('path');
const execSync = require('./execSync');
const input = require('./input');

module.exports = () => {
  try {
    execSync('gem install shopify-cli');
    let cwd;
    if (input.path()) {
      cwd = path.resolve(input.path());
    } else {
      cwd = process.cwd();
    }
    const env = {};
    if (input.authToken()) {
      env.SHOPIFY_CLI_AUTH_TOKEN = input.authToken();
    }
    execSync(`shopify ${input.command()}`, { cwd }, env);
  } catch (error) {
    core.setFailed(error.message);
  }
};
