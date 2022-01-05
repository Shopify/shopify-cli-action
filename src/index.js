const core = require('@actions/core');
const execSync = require('./execSync');
const input = require('./input');

module.exports = () => {
  try {
    execSync('gem install shopify-cli');
    const path = input.path() || '.';
    const env = {};
    if (input.authToken()) {
      env.SHOPIFY_CLI_AUTH_TOKEN = input.authToken();
    }
    execSync(`shopify ${input.command()}`, { cwd: path }, env);
  } catch (error) {
    core.setFailed(error.message);
  }
};
