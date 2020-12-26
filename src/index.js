import React from 'react'
import ReactDOM from 'react-dom' // react 와 browser간 접착제(app간의 접착제는 ReactNative)
import './index.css'
import reportWebVitals from './reportWebVitals'
import 'tachyons'
import App from './containers/App' // 하나의 큰 구성요소
import { robots } from './robots' // default export가 아니면 {}로 감싸줘야함

// main js
ReactDOM.render(<App />,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // app become faster
