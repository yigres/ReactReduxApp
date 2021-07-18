const path = require("path")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const HTMLWebpakPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hash].js"
  },
  devServer: {
    port: 3000
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpakPlugin({template:"./src/index.html"}),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test:/\.(jpg|jpeg|png|svg)$/,
        use: ["file-loader"]
      },
      {
        test:/\.(css|less)$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      }
    ]
  }
}
