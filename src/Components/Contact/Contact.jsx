
import { useState } from "react";

import './Contact.css'

function Contact() {
  

  

  
  return (      
  <section class="book_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2 className="title">
          Contact Us
        </h2>
      </div>
      <div  class="row">
            {/* <!-- Start contact icon column --> */}
            <div id="Number" class="col-md-4">
              <div class="contact-icon text-center">
                <div class="single-icon">
                <i class="fa fa-phone" aria-hidden="true"></i>
                  <p>
                    Call: 0983-653-420<br/>
                    <span>Monday-Friday (9am-5pm)</span>
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Start contact icon column --> */}
            <div id="Email" class="col-md-4">
              <div class="contact-icon text-center">
                <div class="single-icon">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                  <p>
                    Email: team2aptechvp@gmail.com
<br/>
                    
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Start contact icon column --> */}
            <div id="Address" class="col-md-4">
              <div class="contact-icon text-center">
                <div class="single-icon">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <p>
                    Location: Van Phuc City - Ho Chi Minh - Viet Nam<br/>
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
      <div class="row">
      <div class="col-md-6">
          <div id="Map" class="map_container ">
            <div id="googleMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.584483898166!2d106.70939677495853!3d10.843076389309799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d33d4a21d21%3A0x6efb856cd8d033af!2sVAN%20PHUC%20CITY!5e0!3m2!1svi!2s!4v1701610479595!5m2!1svi!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form_container">
            <form action="">
              <div>
                <input type="text" class="form-control" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" class="form-control" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" class="form-control" placeholder="Your Email" />
              </div>
              
              <div>
                <input type="date" class="form-control"/>
              </div>
             
</form>
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Notification</h1>
        
      </div>
      <div class="modal-body">
        Submit Succesfull!
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
              
          </div>
        </div>
        <div class="col-md-12">
          <div class="form_container">
              <form action="">
              <div class="form-group">
              <textarea class="form-control" name="message" rows="5" placeholder="Feedback" required></textarea>
            </div>
              <div class="btn_box">
              {/* <!-- Button trigger modal --> */}
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Send Feedback
        </button>
        </div>
                </form>
          </div>
        </div>
      </div>
      
    </div>
  </section>
  
   
  )
}

export default Contact
