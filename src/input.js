const core = require('@actions/core');

exports.command = () => core.getInput('command', { required: true });
exports.path = () => core.getInput('path', { required: false });
exports.authToken = () =>
  core.getInput('auth-token', { required: false });
