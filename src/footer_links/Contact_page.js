import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function ContactPage (){
	return (
		<div>
			<Navbar />
			<Cart />
			<h1>Contact</h1>
			<Footer />
		</div>
	)
}