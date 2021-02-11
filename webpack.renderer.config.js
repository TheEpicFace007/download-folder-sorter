const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

/* rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
}); */

rules.push({
  test: /\.(s[ac]ss|css)$/i,
  use: [
    // Creates `style` nodes from JS strings
    "style-loader",
    // Translates CSS into CommonJS
    "css-loader",
    // Compiles Sass to CSS
    {
      loader: "sass-loader",
      options: {
        // implementation: require("sass"),
        sassOptions: { sourceMap: true }
      }
    },
  ]
});

rules.push({
  test: /\.(png|jpe?g|gif)$/i,
  use: [
    {
      loader: "file-loader?name=[name].[ext]"
    }
  ]
});

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', ".sass", "scss"]
  },
};
