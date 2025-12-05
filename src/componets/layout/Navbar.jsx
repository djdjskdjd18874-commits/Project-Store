import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return <>
    
    <nav className="navbar navbar-expand-lg sticky-top  ">

    
  <div className="container-fluid">
    

    
    <a className="navbar-brand" href="#"><h3>Fake Store</h3></a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="toggle">
      <label class="switch">
    <input type="checkbox"/>
    <span className="slider"></span>
</label>
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">product</a>
        </li>
       
      </ul>
    
<div class="group ">
    <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
        <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
        </g>
    </svg>
    <input class="input" type="search" placeholder="Search"/>
</div>

    </div>
  </div>
</nav>
    
    </>
  }
}
