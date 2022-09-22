import React from 'react';
import { useState } from 'react';

import '../css/shop.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import Cart from './Cart.js';

import stock from '../data/stock.js';
import usrCart from '../data/usrCart.js';




export default function Shop (){

	const allItems = stock.map((item)=>{
		
		return(
			<Card img={item.img} product={item.product} price={item.price} id={item.id} />
		)
	});

	//handleClick here

	return(
		<div id="shopMain">
			<Navbar />
			<Cart />
			<div id="shoppingContainer">
				<div id="displayCurrent">Showing: /All items</div>
				<div id="cardContainer">
					{allItems}		
				</div>
				<div id="pageTurner"> --- 1,2,3,4--- </div>
			</div>
			<Footer />
		</div>
	)
}

function Card ({img,product, price, id}){

	function addItem (){
		usrCart.push({product, price, img,quantity:1, id});
		console.log(usrCart);
	}

	return (
		<div className="card" >
			<img  src= {img} alt={product} className="cardImage"></img>
			<div>{product}</div>
			<div>{price} </div>
			<button>details</button>
			<button onClick={addItem}>+</button>
		</div>
	)
}