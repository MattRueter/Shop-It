import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

export default function PodcastsPage () {
	return (
		<div>
			<Navbar />
			<Cart />
			<h1>Podcasts</h1>
			<Footer />
		</div>
	)
}