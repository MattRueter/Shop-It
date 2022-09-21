import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar (){

	const toggleCart =()=>{
		const cartView = document.getElementById('blackOutScreen');
		
		if(!cartView.style.display || cartView.style.display==='none'){
			show(cartView);
		}else{
			hide(cartView);
		}

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
		<Link to='/'className="navbarItem" >HOME</Link>
		<Link to='/Shop' className="navbarItem" >SHOP</Link>

		  <button className="navbarItem" onClick={toggleCart}>CART</button>
	  </nav>
	)
  }