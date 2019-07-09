/*
react 是React的核心库
ReactDOM 是提供与DOM相关的功能
*/

import React from 'react';
import ReactDOM from 'react-dom';
//可以删掉，单独引入
// import './index.css';

//引入App.js
import App from './App';
//加快运行js的工具
import * as serviceWorker from './serviceWorker';

//把App节点渲染到根上
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
