import React from "react";

function Header(){
    return (
      <header className="App-header">
        <h1>
          <span className="material-icons app-logo">box</span> 
          <img src="" className="App-logo" alt="" />
          My Salon
        </h1>
        <ul className='nav-items'>
          <li>Services</li>
          <li>Offers</li>
          <li>About</li>
        </ul>
      </header>
    );
}

export default Header;