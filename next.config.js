const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages], { target: 'serverless' , 
webpack: config => {
    config.node = {
      fs: 'empty',
      child_process: 'empty',
      net: 'empty',
      dns: 'empty',
      tls: 'empty',
    };
    return config;
  }, });
