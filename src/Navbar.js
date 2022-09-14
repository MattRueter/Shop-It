import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar (){
	return(
	  <nav className="navbar">
		<div className="logo"></div>
		<Link to='/'className="navbarItem">
			<button className="navbarItem">HOME</button>
		</Link>
		<Link to='/Shop' className="navbarItem">
		  <button className="navbarItem">SHOP</button>
		</Link>
		  <button className="navbarItem">CART</button>
	  </nav>
	)
  }