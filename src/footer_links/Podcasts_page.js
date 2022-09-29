import React from 'react';

import './css/podcasts_page.css';
import bloglabel from '../images/blog_logos/bloglabel.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {InfoCard} from './Blog_page.js';

let podcastsDB =[
	{
	img:bloglabel, 
	title:'Podcast Title', 
	post:`In this episdode we talk
	 about how you might go about 
	 breeding your own sheep to produce your own wool.`
	},
	{
	img:bloglabel, 
	title:'Podcast Title', 
	post:`In ac tortor quis lorem fringilla dapibus in et mauris. Quisque gravida, nisl a 
	consequat mollis, tortor purus malesuada nulla, vel viverra ex ipsum vitae sapien. 
	Etiam at nisi a dolor tempus congue. Curabitur ornare nec lorem sed aliquam. Duis ut dolor 
	eget sapien ultricies rhoncus ut vel augue. Cras vel ornare nisi. Donec in tortor metus. 
	Morbi posuere dui mi, ut luctus risus commodo non. Vestibulum luctus, ipsum a iaculis 
	interdum, risus lectus volutpat dui, at mollis lacus leo non ligula. Aenean suscipit 
	nunc eu sem auctor dapibus. Sed arcu lectus, cursus in quam at, blandit porttitor ligula. 
	Curabitur quis tempor nisi, vel ultricies justo. Morbi vestibulum justo ac sapien consectetur congue. `
	},
	{
	img:bloglabel, 
	title:'Podcast Title', 
	post:`In ac tortor quis lorem fringilla dapibus in et mauris. Quisque gravida, nisl a 
	consequat mollis, tortor purus malesuada nulla, vel viverra ex ipsum vitae sapien. 
	Etiam at nisi a dolor tempus congue. Curabitur ornare nec lorem sed aliquam. Duis ut dolor 
	eget sapien ultricies rhoncus ut vel augue. Cras vel ornare nisi. Donec in tortor metus. 
	Morbi posuere dui mi, ut luctus risus commodo non. Vestibulum luctus, ipsum a iaculis 
	interdum, risus lectus volutpat dui, at mollis lacus leo non ligula. Aenean suscipit 
	nunc eu sem auctor dapibus. Sed arcu lectus, cursus in quam at, blandit porttitor ligula. 
	Curabitur quis tempor nisi, vel ultricies justo. Morbi vestibulum justo ac sapien consectetur congue. `
	},
	{
	img:bloglabel, 
	title:'Podcast Title', 
	post:`In ac tortor quis lorem fringilla dapibus in et mauris. Quisque gravida, nisl a 
	consequat mollis, tortor purus malesuada nulla, vel viverra ex ipsum vitae sapien. 
	Etiam at nisi a dolor tempus congue. Curabitur ornare nec lorem sed aliquam. Duis ut dolor 
	eget sapien ultricies rhoncus ut vel augue. Cras vel ornare nisi. Donec in tortor metus. 
	Morbi posuere dui mi, ut luctus risus commodo non. Vestibulum luctus, ipsum a iaculis 
	interdum, risus lectus volutpat dui, at mollis lacus leo non ligula. Aenean suscipit 
	nunc eu sem auctor dapibus. Sed arcu lectus, cursus in quam at, blandit porttitor ligula. 
	Curabitur quis tempor nisi, vel ultricies justo. Morbi vestibulum justo ac sapien consectetur congue. `
	},
]
export default function PodcastsPage () {
	return (
		<div>
			<Navbar />				
				<header className="lightText" id="headerContainer">
					<h1>Podcasts</h1>
					<p>
					Join Edu and Maree as they chat about things related to 
					making and selling clothes etc. etc..
					</p>
				</header>			
			<main className="lightMain">
				<InfoCard database={podcastsDB} />
			</main>
			<Footer />
		</div>
	)
}