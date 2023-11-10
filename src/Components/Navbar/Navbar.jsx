import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div  className='Navbar' >
      <nav   class="navbar  navbar-expand-lg bg-black ">
  <div class="container-fluid">
    
      
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/"><p className='chu_link'>Home</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><p className='chu_link'>Link</p></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><p className='chu_link'>Link</p></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <p className='chu_link'>Location</p>
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/North"><p className='chu_link'>North</p></a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/South"><p className='chu_link'>South</p></a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/East"><p className='chu_link'>East</p></a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/West"><p className='chu_link'></p>West</a></li>
            
            
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true"><p className='chu_link'>Disabled</p></a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
