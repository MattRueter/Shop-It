import React from 'react';

import './css/blog_page.css'
import bloglabel from '../images/blog_logos/bloglabel.jpg';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


let postsDB =[
	{
	img:bloglabel, 
	title:"Change of Season", 
	post:`Lately I've been making some stuff with some other stuff and I've 
	finally managed to finish a lot of these things.`
	},
	{
	img:bloglabel, 
	title:"New Skills Fun", 
	post:`Learning a new skill can be exciting and a bit daunting at firs. I've 
	always found it useful to start learning a new skill by first choosing.`
	},
	{
	img: bloglabel,
	title:"Staying O rganized: Establish a Workflow", 
	post:`The business side of making and selling your own clothes and accessories can
	quickly turn the fun of it all upside down.`
	},
	{
	img:bloglabel, 
	title:"Set up a Local Recycling Run", 
	post:`Let's face it, many areas of the U.S. are not very good at recycling. I recently 
	got to talking to some neighbours of my and it became clear that we all agreed on this 
	point.`
	},
]




export default function BlogPage (){
	return (
		<div id='blogBackground'>
			<Navbar />
			<main className="lightMain" id="blogMain">
				<h1>Blog</h1>
				<p>Enjoy articles written by staff and community members. 
				Topics range from fashion, to small business management, 
				crafting to sustainable living.
				</p>
				<InfoCard database={postsDB}/>
			</main>
			<Footer />
		</div>
	)
}

export function InfoCard ({database}) {

	return(
		<div>
			{database.map((item,index) =>(
			<div className="infoCard" key={index}>
					<img src={item.img}></img>
					<h3>{item.title}</h3>			
				<div className="infoCardSummary">{item.post}</div>
			</div>
			))}
		</div>

	)
}