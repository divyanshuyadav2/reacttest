import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {add,sub,mul,div} from './Calc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<> <ul>
  <li>The sum of two no. is {add(40,4)}</li>
  <li>The Subtraction is{sub(40,4)}</li>
  <li>The multiplication of two no.  {mul(40,4)}</li>
  <li>The divison of two no is{div(40,4)}</li>
</ul>
</>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
