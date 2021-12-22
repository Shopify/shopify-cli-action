const core = require('@actions/core');
const execSync = require('./execSync');
const input = require('./input');

module.exports = () => {
  try {
    execSync('gem install shopify-cli');
    const path = input.path() || '.';
    core.debug(`Running ${input.command()} on path: ${path}`);
    execSync(`cd ${path} && shopify ${input.command()}`);
  } catch (error) {
    core.setFailed(error.message);
  }
};
