const childProcess = require('child_process');

/**
 * Runs a command synchronously forwarding the stdout and stderr to the current process'
 * stdout and stderr.
 *
 * @param {string} command - The command to be executed
 * @param {*} options - An object with options to be passed to childProcess.execSync
 * @param {*} env - An object containing a set of env. variables to extend the process'.
 */
module.exports = (command, options = {}, env = {}) => {
  const extendedOptions = { ...options };
  if (!process.env.JEST_WORKER_ID) {
    extendedOptions.stdio = 'inherit';
  }
  extendedOptions.env = { ...env, ...process.env };
  childProcess.execSync(command, extendedOptions);
};
