import React from 'react';

import './css/careers_page.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function CareersPage (){
	return (
		<div id="careersBackground">
			<Navbar />
			<Cart />
			<div className="pageContainer">
				<header className="pageHeader">
					<h1>Come work with us.</h1>
					<p className="lightText">Working for us etc...Working for us etc...
					Working for us etc...Working for us etc...Working for us etc...Working for us etc...
					Working for us etc...Working for us etc...Working for us etc...Working for us etc...
					Working for us etc...Working for us etc...Working for us etc...Working for us etc...
					Working for us etc...Working for us etc...
					</p>
					<div id="office"></div>
				</header>
				<main>
					<h2 className="lightText">Available positions:</h2>
					<p className="lightText">Even if what you're looking for isn't available, 
					we'd always like to hear from you. 
					</p>			
				</main>

			</div>
			<Footer />
		</div>
	)
}