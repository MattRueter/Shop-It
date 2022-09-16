import React from 'react';

import './css/photoCredits_page.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PhotoCreditsPage () {
	return (
		<div id="photoCreditsBackground">
			<Navbar />
			<div className="pageContainer">
				<header className="pageHeader">
					<div id="camera"></div>
					<div className="pusherLarge"></div>
					<h1>Thanks for the photos.</h1>
				</header>
				<main>
				<p className="lightText">We'd like to thank the very talented photographers whose work is displayed throughout this site.</p>
				<ul className="lightText">
					<li>name here</li>
					<li>name here</li>
					<li>name here</li>
					<li>name here</li>
					<li>name here</li>
					<li>name here</li>
					<li>name here</li>
					<li>name here</li>
				</ul>
				</main>
			</div>
			<Footer />
		</div>
	)
}