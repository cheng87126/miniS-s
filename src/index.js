import React from 'react'
import ReactDOM from 'react-dom'

import './css/index.scss'

import App from './App.jsx'

import axios from 'axios'
axios.defaults.baseURL = ' https://easy-mock.com/mock/5b7984a3bcb2ab748b0c2559'
axios.interceptors.request.use(function (config) {
	return config
}, function (error) {
	return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
	return response.data
}, function (error) {
	return Promise.reject(error)
})

ReactDOM.render(
	<App />,
	document.getElementById('app')
)