import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from "./components/Counter";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Counter />, document.getElementById("root"));
registerServiceWorker();
