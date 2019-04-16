import React from 'react'
import ReactDOM from 'react-dom'
import'./bulma/bulma.css'
import App from './components/App/App'

import * as serviceWorker from './serviceWorker'
import marvelApi from './marvel-api'

const { REACT_APP_MARVEL_API_KEY, REACT_APP_MARVEL_PRIVATE_API_KEY } = process.env

marvelApi.apiKey = REACT_APP_MARVEL_API_KEY

marvelApi.privateApiKey = REACT_APP_MARVEL_PRIVATE_API_KEY

ReactDOM.render(<App/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
