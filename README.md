## react 技术栈
- react react-router4 redux  react-redux
## 安装初始化  package.json
```
    npm init -y
```

## webpack
```
    npm install webpack webpack-dev-server -D 
```
## babel
```
    npm install babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react css-loader less less-loader style-loader html-webpack-plugin -D  开发依赖 
```
## react 
```
 npm install react redux react-redux react-router-dom(4版本) react-dom -S 项目依赖
```
## fetch
```
    npm install es6-promise whatwg-fetch(如果fetch不兼容 可以自动转到低版本) -D
```
## express
```
    npm install express -S
```
## scripts
```
    "start","webpack-dev-server --port 5000 --open --progress(进度条) --colors"
    "build","webpack -p"
```