import React from 'react';

import './css/blog_page.css'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function BlogPage (){
	return (
		<div id='blogBackground'>
			<Navbar />
			<Cart />
			<main className="lightMain" id="blogMain">
				<h1>Blog</h1>
				<p>Enjoy articles written by staff and community members. 
				Topics range from fashion, to small business management, 
				crafting to sustainable living.
				</p>
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
				<BlogPost />
			</main>
			<Footer />
		</div>
	)
}

function BlogPost () {
	return(
		<div className="blogPost">
			<div>Image</div>
			<h4>Title of the Blog</h4>
			<div className="blogSummary">In this blog someone will tell us all about 
			....etc...etc...etc...etc... etc... etc...etc.. .etc... etc...
			etc...etc...etc... etc...etc... etc...etc...etc... etc...etc...
			 etc...etc...etc...
			</div>
		</div>
	)
}