import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.js'
import Shop from './Shop.js';

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