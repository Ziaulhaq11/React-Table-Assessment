import * as ReactDOMClient from 'react-dom/client'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Provider } from "react-redux";
import employeeReducer from './store/reducer'
import createSagaMiddleware from '@redux-saga/core';
import { watcherSaga } from './store/action';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
  empReducer : employeeReducer
})
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const store = createStore(reducer, {} ,composeWithDevTools(applyMiddleware(...middleware)))
sagaMiddleware.run(watcherSaga)
// const container: any = document.getElementById('root')
// const root = ReactDOMClient.createRoot(container)
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

