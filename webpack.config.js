const path = require('path');
module.exports = {
  entry: {
    wheels: './lib/index.tsx',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'wui',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.s([ac])ss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "sass-loader",
            options: {
              includePaths: [path.resolve(__dirname, 'stylesheets', 'include')]
            }
          }]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          'file-loader',
        ]
      }
    ],
  }
}