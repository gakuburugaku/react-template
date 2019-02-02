import React from 'react';
import {render} from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from '~/src/redux/reducer'
import Router from './Router'
import thunkMiddleware from 'redux-thunk'
import defaultcss from '~/assets/css/default.css'

let store = createStore(reducer, applyMiddleware(thunkMiddleware))


render(
  <Provider store={store}>
    <Router/>
  </Provider>,
  document.getElementById('root')
)
