import React from 'react';

import '../css/index.css';
import './css/workshops_page.css'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function WorkshopsPage () {
	const body = document.getElementsByTagName('body')[0];
	body.style.backgroundImage="url(./woolset.jpg)";
	return (
		<div id="workshopBackground" >
			<Navbar />
			<h1>Workshops</h1>
			<h2>some text</h2>
			<h2>some text</h2>
			<Footer />
		</div>
	)
}