import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function RecyclePage (){
	return (
		<div>
			<Navbar />
			<Cart />
			<h1>Recylce initiative.</h1>
			<Footer />
		</div>
	)
}