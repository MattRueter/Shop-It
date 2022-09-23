import React from 'react';

import './css/podcasts_page.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {InfoCard} from './Blog_page.js';

let podcastsDB =[
	{
	img:'an image', 
	title:'Podcast Title', 
	post:`In this episdode we talk
	 about how you might go about 
	 breeding your own sheep to produce your own wool.`
	}
]
export default function PodcastsPage () {
	const podcasts =podcastsDB.map((item,index)=>{
		return(
			<InfoCard image={item.img} title={`Episode-${index+1}: ${item.title}`} post={item.post} />
		)
	})

	return (
		<div>
			<Navbar />
			<header className="lightText" >
				<h1>Podcasts</h1>
				<h2>We have our own podcasts!</h2>
				<div id="headerContainer">
					<p>
					Join Edu and Maree as they chat about things related to 
					making and selling clothes etc. etc..
					</p>
				</div>
			</header>
			<main className="lightMain">
				{podcasts}
			</main>
			<Footer />
		</div>
	)
}