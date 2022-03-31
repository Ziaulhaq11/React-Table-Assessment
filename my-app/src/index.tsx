import * as ReactDOMClient from 'react-dom/client'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import thunk from 'redux-thunk'
import { applyMiddleware, createStore } from 'redux';
import { Provider } from "react-redux";
import employeeReducer from './store/reducer'

const store = createStore(employeeReducer, applyMiddleware(thunk))
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

