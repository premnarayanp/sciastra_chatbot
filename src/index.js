import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router ,HashRouter} from 'react-router-dom';
import './styles/index.css';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import {createStore,applyMiddleware} from 'redux'; 
import { Provider } from 'react-redux';

import { App } from './components/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
//=====================logger function==============================
const logger=({dispatch,getState})=>(next)=>(action)=>{
  //middleware code
  //console.log("ACTION_TYPE=",action.type);
  next(action);
}

const store=createStore(rootReducer,applyMiddleware(logger,thunk));

root.render(
  <React.StrictMode>
        <HashRouter basename='/'> 
          <Provider store={store}>
            <App/>
          </Provider>,
        </HashRouter>
  </React.StrictMode>
);

