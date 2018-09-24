import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
// import AppStore from './store/index';
import stores from './store/index';
import { Provider } from 'mobx-react'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
