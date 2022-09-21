import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function LegalPage (){
	return (
		<div>
			<Navbar />
			<Cart />
			<h1>See you in court!</h1>
			<Footer />
		</div>
	)
}