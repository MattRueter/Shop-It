import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer (){
	return(
	  <footer>
		<div className="logo"></div>
		<div className="footerContainer">
			<Link to='/Legal'>
		  		<div>Legal information</div>			
			</Link>	
			<Link to='/Recyle'>
		  		<div>Recycle-initiative</div>
			</Link>
		</div>
		<div className="footerContainer">
		  <Link to='/Careers'>
		  	<div>Careers</div>
		  </Link>
		  <div>Contact us.</div>
		</div>
		<div className="footerContainer">
		  <div>Blog</div>
		  <div>Workshops</div>
		  <div>Podcasts</div>
		</div>
	  </footer>
	)
  }
  