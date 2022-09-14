import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './App.js'

function RouteSwitch (){
	return(
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</BrowserRouter>
	)
}
export default RouteSwitch;