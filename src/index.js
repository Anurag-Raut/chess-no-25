import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App, { setupData } from './App';
import { Theme } from './Theme';
import reportWebVitals from './reportWebVitals';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
	console.log(`Welcome to Chess No. 25 debugger console!
@
	You can change log level by calling the loglevel function. The default log level is 2.`);
	global.uselog = 2;
}

const data = new setupData(new Theme('default'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<App setupData={data} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
