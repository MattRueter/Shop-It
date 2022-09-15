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
		  <Link to='/Contact-us'>
		  	<div>Contact us</div>
		  </Link>
		</div>
		<div className="footerContainer">
			<Link to='/Blog'>
		  		<div>Blog</div>
			</Link>
			<Link to='/Workshops'>
		  		<div>Workshops</div>
			</Link>
			<Link to='/Podcasts'>
		  		<div>Podcasts</div>
			</Link>
		</div>
	  </footer>
	)
  }
  