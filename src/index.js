import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.min.css'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import './index.scss'
import App from './components/app/App'
import rootReducer from './redux/reducer/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
