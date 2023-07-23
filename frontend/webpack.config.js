module.exports = {
  // Other webpack configuration options ...
  module: {
    rules: [
      // Other rules ...
      {
        test: /\.node$/,
        use: 'node-loader',
        include: /node_modules/
      }
    ]
  }
};
