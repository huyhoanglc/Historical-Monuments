
import { useState } from "react";

import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    feedback: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    feedback: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      phone: "",
      address: "",
      email: "",
      feedback: "",
    };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone is required";
      valid = false;
    }
    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (formData.feedback.trim() === "") {
      newErrors.feedback = "Feedback is required";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Order has been placed");
      window.location.reload();
    } else {
      console.log("Form validation failed");
    }
  };

  



  

  
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
 <form onSubmit={handleSubmit} action="">

      <div class="row">
      <div class="col-md-6">
          <div id="Map" class="map_container ">
            <div id="googleMap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.584483898166!2d106.70939677495853!3d10.843076389309799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d33d4a21d21%3A0x6efb856cd8d033af!2sVAN%20PHUC%20CITY!5e0!3m2!1svi!2s!4v1701610479595!5m2!1svi!2s" width="700" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        
           
            
          
          <div class="col-md-6">
          
            <div  className="form-group ten">
                    <b>Name</b>
                    <input
                      className="form-control"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    <span className="error">{formErrors.name}</span>
                  </div>
                  <div  className="form-group so">
                    <b>Phone</b>
                    <input
                      className="form-control"
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <span className="error">{formErrors.phone}</span>
                  </div>
                  
                  <div  className="form-group meo">
                    <b>Email:</b>
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="xxx@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <span className="error">{formErrors.email}</span>
                  </div>
                  </div>
                  
                  <div id="fit" className="form-group fit mt-3">
                    <b> Feedback:</b>
                    <textarea className="form-control"
                      type="text"
                      id="feedback"
                      name="feedback"
                      placeholder="Something here"
                      
                      value={formData.feedback}
                      onChange={handleChange}>
                      
                      </textarea>
                    <span className="error">{formErrors.feedback}</span>
                  </div>
                  &nbsp;&nbsp;
                  <button
                    type="submit"
                    className="btn btn-block btn-primary my-3 py-3"
                  >
                    SUBMIT
                  </button>
              
                  </div>
       
        
</form>
{/* <!-- Modal --> */}
{/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
</div> */}
              
          
        
      
    </div>
  </section>
  
   
  )
}

export default Contact
