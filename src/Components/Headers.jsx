import Navbar from './Navbar';
import React, { useState } from 'react';
import './Headers.css'

const Headers = () => {
    const  [navbar,setNavbar]= useState(false);
  const changeNavbar = () =>{
    if (window.scrollY >=200){
      setNavbar(true); 
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',changeNavbar);
  return (
    <header>
        <div className='Header-nav'>    
      <nav class={navbar ? "navbar fixed-top navbar-expand-lg navbar-dark  navbar-scrolled" : "navbar fixed-top navbar-expand-lg navbar-dark " }>
        <div class="container-fluid">          
          <a href="/" class=" navbar-brand logo me-auto me-lg-0"><img src="./img/logo-navbar.png" alt="" class="img-fluid"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse button-navbar" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item dropdown ">
              <a href="/Region" type="button" class="btn btn-outline-light">Region</a>
              <button type="button" id="navbarDropdown" class="btn btn-outline-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              </button>
              <Navbar/>                
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Gallery">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact Us</a>
            </li>
        
      </ul>      
    </div>
  </div>
</nav>

    </div>
      
    </header>
  );
};

export default Headers;