import React from 'react'
import ReactDOM from 'react-dom'
import MainRoute from './Routes/Main'
import './index.css'
import 'react-toastify/dist/ReactToastify.css'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { store } from './Services/Store'

ReactDOM.render(
    <Provider store={store}>
        <MainRoute />
    </Provider>, 
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
