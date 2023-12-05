import React,{useState,useEffect} from 'react';
import './North.css';
import { Link } from 'react-router-dom';
import aos from 'aos';



function North() {
  const  [navbar,setNavbar]= useState(false);
  const changeNavbar = () =>{
    if (window.scrollY >=1){
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll',changeNavbar);
  useEffect(()=>{
    aos.init();
    aos.refresh();
  }, []);
  return (
    <div className="north-container">
      <div className='Header-nav'>    
      <nav class={navbar ? "navbar fixed-top navbar-expand-lg navbar-dark  navbar-scrolled" : "navbar  navbar-expand-lg navbar-dark bg-black" }>
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
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/West">West</a>
                  <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="/Semmering">Semmering Railway</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Effeltower">Eiffel Tower</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Berlinwall">Berlin Wall</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/East">East</a>
                  <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="/HimejiCastle">Himeji Castle</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Gyeongbokgung">Gyeongbokgung Palace</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Kinkaku">Rizal Monument</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/South">South</a>
                  <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="/Macchupicchu">Macchu Picchu</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Moai">Moai</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Sydneyoperahouse">Sydney Opera House</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/North">North</a>
                  <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="/truongthanh">The Great Wall</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/nuthantudo">Statue Of Liberty</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/rome">The Colosseum</a>
                      </li>
                    </ul></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/Wonder">Seven Wonders</a>             
                  </li>
                </ul>
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
      {/* <!-- ======= Hero Section ======= --> */}
  <section id="hero">
    
    <div class="hero-container">
      <h1>Northern Hemisphere</h1>
      <h2>Are you ready to explore some famous historical sites in the northern hemisphere ?</h2>
      <a href="#slider2 " class="btn btn-outline-secondary" title="Scroll Down">Discover Now</a>
     
    </div>
  </section>
  {/* <!-- End Hero --> */}

      <section id='slider2' className='slider2'>
        <div className="tieude1">
          <p>Northern Hemisphere</p>
          
        </div>
        <div className="north">
          <div className="north-1">
            <div className="image1" data-aos="zoom-in-down">
              <img src="img/North/nuthantudo/nuthantudo10.jpg" alt="Statue of Liberty" />
            </div>
            <h2>Statue of Liberty</h2>
            <p>Gifted to the United States from France, the Goddess of Liberty is a symbol of freedom and independence.</p>
            <Link to='/nuthantudo'>
              <button type="button" className="btn btn-outline-secondary">
              Discover Now
              </button>
            </Link>
          </div>
          <div className="north-1">
            <div className="image1" data-aos="zoom-in-down">
              <img className='hinhrome1' src="img/North/rome/rome2.jpg" alt="The Colosseum" />
            </div>
            <h2>The Colosseum</h2>
            <p>The Colosseum, where fierce battles took place, but only immortality in legends.</p>
            <Link to='/rome'>
              <button type="button" className="btn btn-outline-secondary">
              Discover Now
              </button>
            </Link>
          </div>
          <div className="north-1">
            <div className="image1" data-aos="zoom-in-down">
              <img src="img/North/truongthanh/truongthanh1.jpg" alt="The Great Wall" />
            </div>
            <h2>The Great Wall</h2>
            <p>The Great Wall, a majestic historical landmark, witnesses to the outstanding development of human civilization.</p>
            <Link to='/truongthanh'>
              <button type="button" className="btn btn-outline-secondary">
              Discover Now
              </button>
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}

export default North;
