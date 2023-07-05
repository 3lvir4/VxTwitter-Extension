const { resolve } = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: resolve(__dirname, './src/main.js'),
    background: resolve(__dirname, './src/background.js'),  
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'extension'),
  },
};
