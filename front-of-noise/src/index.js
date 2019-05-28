import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './_helpers';
import Client from './Client';

import './styles/css/index.css';
import 'font-awesome/css/font-awesome.min.css';

import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router } from 'react-router-dom';

// import Firebase, {FirebaseContext} from './Firebase';

render(
  <Provider store={store}>
    <Client />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
