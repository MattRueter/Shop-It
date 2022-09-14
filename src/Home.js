import React from 'react';
import './home.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';


const contentProps= [
  {
    id:"contentDark", 
    img:"imageOne", 
    heading:"Shop-It connects thousands of artisans and buyers.",
    p:`The items on Shop-It are designed and made by individuals 
    throughout the world who are passionate about creating unique,
    handmade clothes to suit every style and pocket.`
  },
  {
    id:"contentLight", 
    img:"imageTwo", 
    heading:"Whatever your style, find it on Shop-It.",
    p:`The clothes on this site reflect our global society,
    featuring fabrics and designs inspired by different cultures
    and time periods, as well as keeping pace with current trends.`
  },
  {
    id:"contentDark", 
    img:"imageThree", 
    heading:"We care about clothes; we care about the Earth.",
    p:`Shop-It partners with designers who care about 
    creating clothes using sustainable means.
    All fabrics and yarns are from sustainable sources and
    our sellers use recycled and recyclable packaging.`
  }
]

export default function Home() {
  

  return (
    <div id="homeMain">
      <Navbar />  
      <h1>Find quality handmade clothes.</h1>
      <Content id={contentProps[0].id} img={contentProps[0].img} heading={contentProps[0].heading} p={contentProps[0].p} />
      <Content id={contentProps[1].id} img={contentProps[1].img} heading={contentProps[1].heading} p={contentProps[1].p} />
      <Content id={contentProps[2].id} img={contentProps[2].img} heading={contentProps[2].heading} p={contentProps[2].p} />
      <Footer />
    </div>
  );
}

function Content (props){
  return(
    <div className="content" id={props.id}>
        <h2>{props.heading}</h2>    
        <p>{props.p}</p>
        <div id={props.img}></div>
      </div> 
  )
}