const execSync = require('./execSync');
const input = require('./input');

module.exports = () => {
  try {
    execSync('gem install shopify-cli');
    execSync(`shopify ${input.command()}`);
  } catch (error) {
    core.setFailed(error.message);
  }
};
