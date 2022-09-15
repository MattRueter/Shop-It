import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar (){

	const toggleCart =()=>{
		const cartView = document.getElementById('blackOutScreen');
		cartView.style.display==="none" ? show(cartView): hide(cartView);

		function hide (element){
			element.style.display = "none";
		}
		function show(element){
			element.style.display ="flex";
		}
	}

	return(
	  <nav className="navbar">
		<div className="logo"></div>
		<Link to='/'className="navbarItem">
			<button className="navbarItem">HOME</button>
		</Link>
		<Link to='/Shop' className="navbarItem">
		  <button className="navbarItem">SHOP</button>
		</Link>

		  <button className="navbarItem" onClick={toggleCart}>CART</button>
	  </nav>
	)
  }