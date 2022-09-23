import React from 'react';

import './css/blog_page.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

let postsDB =[
	{
	img:"an image", 
	title:"Change of Season", 
	post:`Lately I've been making some stuff with some other stuff and I've 
	finally managed to finish a lot of these things.`
	},
	{
	img:"an image", 
	title:"New Skills Fun", 
	post:`Learning a new skill can be exciting and a bit daunting at firs. I've 
	always found it useful to start learning a new skill by first choosing.`
	},
	{
	img:"an image", 
	title:"Staying Organized: Establish a Workflow", 
	post:`The business side of making and selling your own clothes and accessories can
	quickly turn the fun of it all upside down.`
	},
	{
	img:"an image", 
	title:"Set up a Local Recycling Run", 
	post:`Let's face it, many areas of the U.S. are not very good at recycling. I recently 
	got to talking to some neighbours of my and it became clear that we all agreed on this 
	point.`
	},
]




export default function BlogPage (){
	const posts = postsDB.map((item,index)=>{
		return(
			<InfoCard image={item.img} title={item.title} post={item.post} />
		)
	})

	return (
		<div id='blogBackground'>
			<Navbar />
			<main className="lightMain" id="blogMain">
				<h1>Blog</h1>
				<p>Enjoy articles written by staff and community members. 
				Topics range from fashion, to small business management, 
				crafting to sustainable living.
				</p>
				{posts}
			</main>
			<Footer />
		</div>
	)
}

export function InfoCard ({image,title,post}) {
	return(
		<div className="blogPost">
			<div>{image} </div>
			<h4>{title}</h4>
			<div className="blogSummary">{post}</div>
		</div>
	)
}