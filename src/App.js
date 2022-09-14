import React from 'react';

function App() {
  return (
    <div>
      <Navbar />  
      <h1>Find quality handmade clothes.</h1>
      
      <div className="content" id="contentDark">
        <h2>Shop-It connects thousands of artisans and buyers.</h2>    
        <p>The items on Shop-It are designed and made by individuals 
          throughout the world who are passionate about creating unique,
          handmade clothes to suit every style and pocket.
        </p>
        <div id="imageOne"></div>
      </div>


      <div className="content" id="contentLight" >
        <h2>Whatever your style, find it on Shop-It.</h2>
        <div id="imageTwo"></div>
        <p>The clothes on this site reflect our global society, 
          featuring fabrics and designs inspired by different cultures
          and time periods, as well as keeping pace with current trends. 
        </p>
      </div>

      
      <div className="content" id="contentDark">
        <h2>We care about clothes; we care about the Earth.</h2>    
        <p>Shop-It partners with designers who care about 
          creating clothes using sustainable means.
          All fabrics and yarns are from sustainable sources and
          our sellers use recycled and recyclable packaging. 
        </p>
        <div id="imageThree"></div>
      </div>

    </div>
  );
}

export default App;



function Navbar (){
  return(
    <nav className="navbar">
      <button className="navbarItem">HOME</button>
      <button className="navbarItem">SHOP</button>
      <button className="navbarItem">CART</button>
    </nav>
  )
}