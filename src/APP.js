import React, {Component} from 'react'
import Header from './common/header'
import Login from './page/login'
import Write from './page/write'
import Home from './page/home'
import Detail from './page/detail/loadable'
import {Provider} from 'react-redux'
import {Global} from './statics/icon/iconfont'
import {GlobalStyle} from './style'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
export default class App extends Component{
	render() {
		return (
			<Provider store={store}>
				<div>
					<GlobalStyle/>
					<Global/>
					<BrowserRouter>
						<div>
							<Header />
							<Route path='/' exact component={Home}></Route>
							<Route path='/login' exact component={Login}></Route>
							<Route path='/write' exact component={Write}></Route>
							<Route path='/detail/:id' exact component={Detail}></Route>
						</div>

					</BrowserRouter>
					<div>2222</div>
				</div>
			</Provider>
		)
	}
}