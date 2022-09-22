import React from 'react';
import {Link} from 'react-router-dom';


export default function Navbar (){


	return(
	  <nav className="navbar">
		<div className="logo"></div>
		<Link to='/'className="navbarItem" >HOME</Link>
		<Link to='/Shop' className="navbarItem" >SHOP</Link>
		<Link to='/Cart' className="navbarItem">CART</Link>
	  </nav>
	)
  }