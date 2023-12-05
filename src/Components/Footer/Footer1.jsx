import React from 'react'
import './Footer1.css'

function Footer1() {
  return (
    
    <div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <div className="row">
            <h6>About</h6>
            <p class="doanvan-justify">Welcome to the <i>Historical Monuments</i>  website, your online guide to exploring the rich tapestry of our world's cultural heritage. Our mission is to connect enthusiasts, researchers, and curious minds with the stories behind some of the most iconic landmarks and historical sites across the globe.</p>
            </div>
           <div className="row">
             <a target='blank' href="https://www.booking.com">
             <h6>Sponsored by: Click For Booking <i class="fa fa-arrow-down" aria-hidden="true"></i></h6>
             
             <img  className='booking' src="./img/booking.jpg" alt="" />
             </a>
            
           </div>

          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li><a href="/Gallery">Image</a></li>
              <li><a href="/East">East</a></li>
              <li><a href="/North">North</a></li>
              <li><a href="/South">South</a></li>
              <li><a href="/Wonder">Wonder</a></li>
              <li><a href="/Contact">Phone</a></li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li><a href="/About">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/Region">Region</a></li>
              <li><a href="/Gallery">Gallery</a></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-5 col-sm-6 col-xs-12">
            <p class="copyright-text">Copyright &copy; 2023 All Rights Reserved by  
         <a href="/">Historical Monuments</a>.
            </p>
          </div>
          <div class="col-md-3 col-sm-6 col-xs-12">
            
          </div>
          
          <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="https://www.facebook.com/profile.php?id=61554439042431&mibextid=LQQJ4d"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="https://twitter.com/historical2ap"><i class="fa fa-twitter"></i></a></li>
              <li><a class="linkedin" href="/contact"><i class="fa fa-envelope"></i></a></li>   
            </ul>
          </div>
          
        </div>
      </div>
</div>
  )
}

export default Footer1
