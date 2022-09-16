import React from 'react';

import './css/blog_page.css'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function BlogPage (){
	return (
		<div id='blogBackground'>
			<Navbar />
			<h1>Blog</h1>
			<p>Some text</p>
			<p>Some text</p>
			<p>Some text</p>
			<p>Some text</p>
			<p>Some text</p>
			<Footer />
		</div>
	)
}