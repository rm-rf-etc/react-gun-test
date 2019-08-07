import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';
import { Main1, Main2 } from './App';

ReactDOM.render(<><Main1 /><Main2 /></>, document.getElementById('root'));

serviceWorker.unregister();
