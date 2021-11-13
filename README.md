# React-Typescript-2021

```
yarn
```

## Babel の環境セットアップ
### webpack
```
yarn add --dev webpack webpack-cli webpack-dev-server html-webpack-plugin
```

### Babel
```
yarn add --dev @babel/core @babel/runtime @babel/plugin-transform-runtime @babel/preset-env babel-loader
```

## React

```
yarn add react react-dom
```

```
yarn add --dev @babel/preset-react
```

## Test
``index.html``, ``app.js``, ``Hello.jsx``を作成
### webpack.config.js
```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/app.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js",
  },
  resolve: {
    modules: [path.resolve(__dirname, "node_modules")],
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    }
  },
};
```
### ビルド

```
yarn webpack --config webpack.config.js
```
### 開発サーバー
```
yarn webpack serve --config webpack.config.js
```
### npm-script

```package.json
...
  "scripts": {
    "build": "webpack --config webpack.config.js",
    "start": "webpack serve --config webpack.config.js"
  }
```
