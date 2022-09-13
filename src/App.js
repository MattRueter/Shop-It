import React from 'react';

function App() {
  return (
    <div>
      <Navbar />  
      <h1>Find quality handmade clothes.</h1>
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