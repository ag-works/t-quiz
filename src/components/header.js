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
          <li class="dropdown">
            <span>Contests</span>
            <i class="material-icons">arrow_drop_down</i>
            <div class="dropdown-content">
              <span>Link 1</span>
              <span>Link 2</span>
              <span>Link 3</span>
            </div>
          </li>
          <li>About</li>
        </ul>
        {/* <img src="" className="App-logo" alt="logo" /> */}
      </header>
    );
}

export default Header;