import React from 'react';

import '../css/index.css';
import '../images/woolset.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function WorkshopsPage () {
	const body = document.getElementsByTagName('body')[0];
	body.style.backgroundImage="url(./woolset.jpg)";
	return (
		<div>
			<Navbar />
			<h1>Workshops</h1>
			<h1>some text</h1>
			<h1>some text</h1>
			<Footer />
		</div>
	)
}