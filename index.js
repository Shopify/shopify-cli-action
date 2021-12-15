process.env.INPUT_RUBY_VERSION = '2.7.5';

require('setup-ruby/dist');
const run = require('./src/index');
run();
