import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js'
import Shop from './components/Shop.js';
import LegalPage from './footer_links/Legal_page';
import RecyclePage from './footer_links/Recycle_page';
import CareersPage from './footer_links/Careers_page';

function RouteSwitch (){
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' 		element={<Home/>} 			/>
				<Route path='/Shop' 	element={<Shop/>} 			/>
				<Route path='/Legal' 	element={<LegalPage/>} 		/>
				<Route path='/Recyle'	element={<RecyclePage />}	/>
				<Route path='/Careers' 	element={<CareersPage/>}	/>
			</Routes>
		</BrowserRouter>
	)
}
export default RouteSwitch;