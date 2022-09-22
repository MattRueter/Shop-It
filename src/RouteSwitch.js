import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js'
import Shop from './components/Shop.js';
import Cart from './components/Cart.js';
import LegalPage from './footer_links/Legal_page';
import RecyclePage from './footer_links/Recycle_page';
import CareersPage from './footer_links/Careers_page';
import ContactPage from './footer_links/Contact_page';
import BlogPage   from './footer_links/Blog_page';
import PodcastsPage from './footer_links/Podcasts_page';
import WorkshopsPage from './footer_links/Workshops_page';
import PhotoCreditsPage from './footer_links/PhotoCredits_page';

function RouteSwitch (){
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' 			element={<Home/>} 			/>
				<Route path='/Shop' 		element={<Shop/>}			/>
				<Route path='/Cart' 		element={<Cart/>}			/>
				<Route path='/Legal' 		element={<LegalPage/>} 		/>
				<Route path='/Recyle'		element={<RecyclePage />}	/>
				<Route path='/Careers' 		element={<CareersPage/>}	/>
				<Route path='/Contact-us'	element={<ContactPage />}	/>
				<Route path='/Blog'			element={<BlogPage />}		/>
				<Route path='/Podcasts'		element={<PodcastsPage/>}	/>
				<Route path='/Workshops'	element={<WorkshopsPage/>}	/>
				<Route path='/Photo-credits'element={<PhotoCreditsPage />}/>
			</Routes>
		</BrowserRouter>
	)
}
export default RouteSwitch;