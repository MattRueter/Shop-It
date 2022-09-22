import React from 'react';

import './css/photoCredits_page.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const credits =[
	{img:"generic_clothing_rack",	credit:"" },
	{img:"designer",				credit:"pexls.com/@cottonbro"},
	{img:"chair_and_sweater", 		credit:"pexls.com/@karolina grabowska"},
	{img:"dress", 					credit:"pexls.com/@the lazy artist gallery"},
	{img:"jeans", 					credit:"pexls.com/@pixaby"},
	{img:"sweater", 				credit:"pexls.com/@domj"},
	{img:"camera", 					credit:"pexls.com/@atc comm photo"},
	{img:"lamb", 					credit:"pexls.com/@kat smith"},
	{img:"woolbackdrop", 			credit:"pexls.com/@engin-akyurt"},
	{img:"woolset", 				credit:"pexls.com/@pavel danilyuk"},
	{img:"office", 					credit:"pexls.com/@fauxels"},
	{img:"v_neck_sweater", 			credit:"pexls.com/@ron-lach"},
	{img:"dark_jeans", 				credit:"pexls.com/@pixaby"},
	{img:"wool_socks", 				credit:"pexls.com/@lumn"},
	{img:"handbag", 				credit:"pexls.com/@mart-production"},
	{img:"cotton_shorts", 			credit:"pexls.com/@kristina-paukshtite"}
];


export default function PhotoCreditsPage () {
	const photoCredits =credits.map((item,index)=>{
		if(item.credit!=""){
			return(
				<li>{item.credit}</li>
				)
		}
	});

	return (
		<div id="photoCreditsBackground">
			<Navbar />
			<div className="pageContainer">
				<header className="pageHeader">
					<div id="camera"></div>
					<div className="pusherLarge"></div>
					<h1>Thanks for the photos.</h1>
				</header>
				<main>
				<p className="lightText">We'd like to thank the very talented photographers whose work is displayed throughout this site.</p>
				<ul className="lightText">
					{photoCredits}
				</ul>
				</main>
			</div>
			<Footer />
		</div>
	)
}