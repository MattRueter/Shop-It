import React from 'react';

import './css/contact_page.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function ContactPage (){
	return (
		<div>
			<Navbar />
			<header>
				<h1>Contact us.</h1>
			</header>
			<main>
				<div id="contact" className="lightText">
					<p>Email: ouremail@email.com</p>
					<p>Facebook: shopitonline</p>
					<p>Twitter:  @shop-it</p>
				</div>
			</main>
			<Footer />
		</div>
	)
}