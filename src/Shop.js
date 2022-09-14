import React from 'react';
import './shop.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


export default function Shop (){
	
	
	return(
		<div id="shopMain">
			<Navbar />
			<div id="shoppingContainer">
				<div id="displayCurrent">Showing:</div>
				<div id="cardContainer">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				<div id="pageTurner"> --- 1,2,3,4--- </div>
			</div>
			<Footer />
		</div>
	)
}

function Card (){
	return (
		<div className="card">
			<div className="cardImage"></div>
			<div>Item Title</div>
			<div>$60</div>
			<button>details</button>
		</div>
	)
}