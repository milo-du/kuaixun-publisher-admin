/*
 * @Author: Milodu
 * @Date:   2017-06-23 16:00:21
 * @Last Modified by:   Milodu
 * @Last Modified time: 2017-07-21 14:58:03
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, browserHistory } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import Routes from './routes';

const store = createStore(todoApp);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}