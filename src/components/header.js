import React from "react";

function Header(){
    return (
        <header className="App-header">
        <h1>
          <span className="material-icons app-logo">quiz</span> 
          &nbsp; T-Quiz
        </h1>
        <ul className='nav-items'>
          <li>Home</li>
          <li>Contests</li>
          <li>About</li>
        </ul>
        {/* <img src="" className="App-logo" alt="logo" /> */}
      </header>
    );
}

export default Header;