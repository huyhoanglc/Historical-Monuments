import React, { useEffect } from 'react'
import aos from 'aos'
import './Home.css'
import Galleryhome from './GalleryHome/Galleryhome';



function Home() {
  
  useEffect(()=>{
    aos.init();
    aos.refresh();
  }, []);
  return (
    <div id='Home' className='web'>
      

      
      <div className="content">
      <div className='home'>
      
      {/* <!-- ======= About Section ======= --> */}
    <div id="aboutHM" class="aboutHM-area area-padding">
      {/* carousel */}
      <div id="carouselExampleAutoplaying" class="carousel" data-bs-ride="carousel-fade" data-bs-pause="false">
        <div class="carousel-inner ">
          <div id='s1' class="carousel-item active bg-1"data-bs-interval="5000">
          <div  class="carousel-caption d-none d-md-block">
            <h1>HISTORICAL MONUMENT</h1>
            <p>"Preserving Heritage, Inspiring Futures."</p>
          </div>
          </div>
          <div id='s2' class="carousel-item bg-2" data-bs-interval="5000">
          <div class="carousel-caption d-none d-md-block">
            <h1>HISTORICAL MONUMENT</h1>
            <p>"Preserving Heritage, Inspiring Futures."</p>
          </div>
          </div>
          <div id='s3' class="carousel-item bg-3"data-bs-interval="5000">
          <div class="carousel-caption d-none d-md-block">
            <h1>HISTORICAL MONUMENT</h1>
            <p>"Preserving Heritage, Inspiring Futures."</p>
          </div>
          </div>
          <div id='s4' class="carousel-item bg-4"data-bs-interval="5000">
          <div class="carousel-caption d-none d-md-block">
            <h1>HISTORICAL MONUMENT</h1>
            <p>"Preserving Heritage, Inspiring Futures."</p>
          </div>
          </div>
          <div id='s5' class="carousel-item bg-5"data-bs-interval="5000">
          <div class="carousel-caption d-none d-md-block">
            <h1>HISTORICAL MONUMENT</h1>
            <p>"Preserving Heritage, Inspiring Futures."</p>
          </div>
          </div>
          <div id='s6' class="carousel-item bg-6"data-bs-interval="5000">
          <div class="carousel-caption d-none d-md-block">
            <h1>HISTORICAL MONUMENT</h1>
            <p>"Preserving Heritage, Inspiring Futures."</p>
          </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {/* end carousel */}
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              
              
            </div>
          </div>
        </div>
        <div class="row">
          {/* <!-- single-well start--> */}
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-left">
              <div class="single-well">
                <a >
                  <img src="img/about1.jpg" alt=""/>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- single-well end--> */}
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="well-middle">
              <div class="single-well">
                <a >
                  <h4 class="sec-head"><b>Project Maintenance</b></h4>
                </a>
                <p>
                Preserving and maintaining historical monuments is crucial for safeguarding cultural heritage and ensuring that future generations can appreciate and learn from the past, involves a combination of conservation, restoration, and ongoing care to protect these structures from deterioration and damage. 
                </p>
                <ul>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> Conservation and Restoration
                  </li>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> Community Involvement
                  </li>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> Adaptive Reuse
                  </li>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> Public Awareness and Education
                  </li>
                  <li>
                    <i class="fa fa-check" aria-hidden="true"></i> Regular Inspections
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- End col--> */}
        </div>
      </div>
    </div>
    {/* <!-- End About Section --> */}

    {/* <!-- ======= Services Section ======= --> */}
    <div id="services" class="services-area area-padding">
      <div id='Services' class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline services-head text-center">
              <h2 class='ser'>Our Services</h2>
            </div>
          </div>
        </div>
        <div class="row text-center">
          {/* <!-- Start Left services --> */}
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="about-move">
              <div class="services-details">
                <div class="single-services">
                  <a class="services-icon" >
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>
                  </a>
                  <h4>Content Creation</h4>
                  <p>
                  Write informative and engaging articles about various historical monuments, highlighting their history, architecture, significance, and any recent developments.
                  </p>
                </div>
              </div>
              {/* <!-- end about-details --> */}
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="about-move">
              <div class="services-details">
                <div class="single-services">
                  <a class="services-icon" >
                  <i class="fa fa-connectdevelop" aria-hidden="true"></i>
                  </a>
                  <h4>Visual Content</h4>
                  <p>
                  Include high-quality images, infographics, and videos to make your blog visually appealing and informative.
                  </p>
                </div>
              </div>
              {/* <!-- end about-details --> */}
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            {/* <!-- end col-md-4 --> */}
            <div class=" about-move">
              <div class="services-details">
                <div class="single-services">
                  <a class="services-icon" >
                  <i class="fa fa-search" aria-hidden="true"></i>
                  </a>
                  <h4>Research</h4>
                  <p>
                    Conduct in-depth research to provide accurate and reliable information about the historical monuments you feature.
                  </p>
                </div>
              </div>
              {/* <!-- end about-details --> */}
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12">
            {/* <!-- end col-md-4 --> */}
            <div class=" about-move">
              <div class="services-details">
                <div class="single-services">
                  <a class="services-icon" >
                  <i class="fa fa-audio-description" aria-hidden="true"></i>
                  </a>
                  <h4>SEO Optimization </h4>
                  <p>
                  Optimize your content for search engines to increase visibility and reach a wider audience.
                  </p>
                </div>
              </div>
              {/* <!-- end about-details --> */}
            </div>
          </div>
          {/* <!-- End Left services --> */}
          <div class="col-md-4 col-sm-4 col-xs-12">
            {/* <!-- end col-md-4 --> */}
            <div class=" about-move">
              <div class="services-details">
                <div class="single-services">
                  <a class="services-icon" >
                  <i class="fa fa-desktop" aria-hidden="true"></i>
                  </a>
                  <h4>Design and Layout</h4>
                  <p>
                  Create visually appealing and user-friendly blog designs that showcase the beauty of historical monuments.
                  </p>
                </div>
              </div>
              {/* <!-- end about-details --> */}
            </div>
          </div>
          {/* <!-- End Left services --> */}
          <div class="col-md-4 col-sm-4 col-xs-12">
            {/* <!-- end col-md-4 --> */}
            <div class=" about-move">
              <div class="services-details">
                <div class="single-services">
                  <a class="services-icon" >
                  <i class="fa fa-window-maximize" aria-hidden="true"></i>
                  </a>
                  <h4>Content Strategy</h4>
                  <p>
                  Develop a content strategy that includes a variety of topics related to historical monuments to keep the blog engaging and informative.
                  </p>
                </div>
              </div>
              {/* <!-- end about-details --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Services Section --> */}

    

    {/* <!-- ======= Rviews Section ======= --> */}
    <div class="reviews-area">
      <div class="row g-0">
        <div class="col-lg-6">
          <img src="img/South/Sydney06.jpg" alt="" class="img-fluid"/>
        </div>
        <div class="col-lg-6 work-right-text d-flex align-items-center">
          <div class="px-5 py-5 py-lg-0">
            <h2>Visit Our Website</h2>
            <h5>About Information, Photoshop, Animation Effects and Co-operate Buildings Website.</h5>
            <a href="/contact" class="ready-btn scrollto">Contact us</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Rviews Section --> */}

    {/* Gallery */}

    <Galleryhome/>

   {/* End Gallery */}

    {/* <!-- ======= Blog Section ======= --> */}
    <div id="blog" class="blog-area">
      <div class="blog-inner area-padding">
        <div class="blog-overly"></div>
        <div class="container ">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="section-headline text-center">
                <h2>Special Link To Monuments</h2>
              </div>
            </div>
          </div>
          <div class="row">
          <div class="col-md-1 col-sm-4 col-xs-12"></div>
            {/* <!-- Start Left Blog --> */}
            <div class="col-md-2 col-sm-4 col-xs-12">
              <div class="single-blog">
                <div class="single-blog-img">
                  <a href="blog.html">
                    <img  src="img/North/rome/rome10.jpg" alt=""/>
                  </a>
                </div>
                
                <div class="blog-text">
                  <h4>
                    <a href="/North">North</a>
                  </h4>
                  
                </div>
                <span>
                  <a href="/North" class="ready-btn">Read more</a>
                </span>
              </div>
              {/* <!-- Start single blog --> */}
            </div>
            {/* <!-- End Left Blog--> */}
            {/* <!-- Start Left Blog --> */}
            <div class="col-md-2 col-sm-4 col-xs-12">
              <div class="single-blog">
                <div class="single-blog-img">
                  <a href="/South">
                    <img src="img/South/Sydney03.jpg" alt=""/>
                  </a>
                </div>
                
                <div class="blog-text">
                  <h4>
                    <a href="/South"> South</a>
                  </h4>
                  
                </div>
                <span>
                  <a href="/South" class="ready-btn">Read more</a>
                </span>
              </div>
              {/* <!-- Start single blog --> */}
            </div>
            {/* <!-- End Left Blog--> */}
            {/* <!-- Start Right Blog--> */}
            <div class="col-md-2 col-sm-4 col-xs-12">
              <div class="single-blog">
                <div class="single-blog-img">
                  <a href="/East">
                    <img src="img/East/HimejiCastleBanner2.jpg" alt=""/>
                  </a>
                </div>
                
                <div class="blog-text">
                  <h4>
                    <a href="/East">East</a>
                  </h4>
                  
                </div>
                <span>
                  <a href="/East" class="ready-btn">Read more</a>
                </span>
              </div>
            </div>
            {/* <!-- End Right Blog--> */}
            {/* <!-- Start Right Blog--> */}
            <div class="col-md-2 col-sm-4 col-xs-12">
              <div class="single-blog">
                <div class="single-blog-img">
                  <a href="/West">
                    <img src="img/West/semmering5.jpg" alt=""/>
                  </a>
                </div>
                
                <div class="blog-text">
                  <h4>
                    <a href="/West">West</a>
                  </h4>
                  
                </div>
                <span>
                  <a href="/West" class="ready-btn">Read more</a>
                </span>
              </div>
            </div>
            {/* <!-- End Right Blog--> */}
            {/* <!-- Start Right Blog--> */}
            <div class="col-md-2 col-sm-4 col-xs-12">
              <div class="single-blog">
                <div class="single-blog-img">
                  <a href="/Wonder">
                    <img src="img/Wonder/Giza/1.jpg" alt=""/>
                  </a>
                </div>
                
                <div class="blog-text">
                  <h4>
                    <a href="/Wonder">Seven Wonders</a>
                  </h4>
                  
                </div>
                <span>
                  <a href="/Wonder" class="ready-btn">Read more</a>
                </span>
              </div>
            </div>
            {/* <!-- End Right Blog--> */}
            <div class="col-md-1 col-sm-4 col-xs-12"></div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Blog Section --> */}

    {/* <!-- ======= Suscribe Section ======= --> */}
    <div class="suscribe-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs=12">
            <div class="suscribe-text text-center">
              <h3> Welcome to our Historical Monuments website </h3>
              <a class="sus-btn" href="/About">              
                  <h5>
                    <i class="fa fa-align-right" aria-hidden="true"></i>
                     More Information About Website 
                     <i class="fa fa-align-left" aria-hidden="true"></i>
                     </h5>                   
                 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Suscribe Section --> */}

    
    </div>
      </div>
    </div>
  )
}

export default Home
