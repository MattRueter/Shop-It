import React from 'react';

import '../css/index.css';
import './css/workshops_page.css'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function WorkshopsPage () {
	const body = document.getElementsByTagName('body')[0];
	body.style.backgroundImage="url(./woolset.jpg)";
	return (
		<div id="workshopBackground" >
			<Navbar />
			<Cart />
			<h1>Workshops</h1>
			<h1>some text</h1>
			<h1>some text</h1>
			<Footer />
		</div>
	)
}