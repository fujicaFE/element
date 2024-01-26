const devConfig = require('./config/dev.js');
const buildConfig = require('./config/build.js');
module.exports = process.env.NODE_ENV === 'production' ? buildConfig : devConfig;