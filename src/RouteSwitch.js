import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js'
import Shop from './components/Shop.js';

function RouteSwitch (){
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home/>} 		/>
				<Route path='/Shop' element={<Shop/>} 	/>
			</Routes>
		</BrowserRouter>
	)
}
export default RouteSwitch;