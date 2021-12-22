const core = require('@actions/core');
const execSync = require('./execSync');
const input = require('./input');

module.exports = () => {
  try {
    execSync('gem install shopify-cli');
    if (input.path) {
      execSync(`cd ${input.path}`);
    }
    execSync(`shopify ${input.command()}`);
  } catch (error) {
    core.setFailed(error.message);
  }
};
