import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './utilities/rootReducer';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION___ &&
  window.__REDUX_DEVTOOLS_EXTENSION___();
const store = createStore(rootReducer, devTools, applyMiddleware(thunk));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
