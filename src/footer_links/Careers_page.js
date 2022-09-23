import React from 'react';

import './css/careers_page.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {InfoCard} from './Blog_page.js';

let jobPostsDB =[
	{
	img:'an image', 
	title:"Front end developer", 
	post:`Sed scelerisque venenatis quam, 
	quis vehicula lorem tristique nec. Pellentesque eleifend felis lacus, eu 
	pellentesque dui rutrum quis. Cras ligula elit, porttitor eu quam ultricies, 
	fermentum scelerisque diam.`
	}
]


export default function CareersPage (){
	const jobPosts = jobPostsDB.map((item,index)=>{
		return(
			<InfoCard image={item.img} title={item.title} post={item.post} />
		)
	})
	return (
		<div id="careersBackground">
			<Navbar />
			<div className="pageContainer">
				<header className="pageHeader" id="careerPageHeader">
					<h1>Come work with us.</h1>
					<div id="office"></div>
					<p className="lightText">
					Fusce congue mi eget magna tristique, a viverra arcu molestie. 
					Praesent in leo ac ex aliquam varius. Donec id euismod turpis. 
					Mauris luctus ullamcorper pellentesque. Sed scelerisque venenatis quam, 
					quis vehicula lorem tristique nec. Pellentesque eleifend felis lacus, eu 
					pellentesque dui rutrum quis. Cras ligula elit, porttitor eu quam ultricies, 
					fermentum scelerisque diam. Fusce a orci eget felis placerat pharetra in non odio. 
					Cras interdum aliquet fringilla.
					</p>
				</header>
				<main className="lightMain">
					<h2 className="lightText">Available positions:</h2>
					<p className="lightText">Even if what you're looking for isn't available, 
					we'd always like to hear from you. 
					</p>
					{jobPosts}
				</main>

			</div>
			<Footer />
		</div>
	)
}
