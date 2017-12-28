import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import App from './components/app/App';
import NotFound from './components/app/NotFound';
import Front from './components/app/Front';
import {fetchDevs} from './states/actions'
import { createStore ,applyMiddleware } from 'redux'
import devApp from './states/reducers'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

let store = createStore(devApp,{},applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  store.dispatch(fetchDevs());
console.log(store.getState())

const Root = () => {
  return (
    <Provider store={store}>
      <Router >
        
        <Switch>
          <Route exact path="/" component={Front} />
          <Route path="/dev" component={App} />
          <Route path="*" component={NotFound} />
          </Switch>
        
      </Router>
    </Provider>
  )
}
render(<Root />, document.querySelector('#main'));
