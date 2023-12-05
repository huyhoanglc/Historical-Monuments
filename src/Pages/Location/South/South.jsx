import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
import './South.css'


function South() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div  >
        {/* Start Hero-one section */}
        <section id="south-hero-one" className="south-hero-one">
          <img src="./img/South/hero-one-bg.png" alt="" data-aos="fade-in"/>
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2 data-aos="fade-up" data-aos-delay="100" >Macchu Picchu</h2>
                <p data-aos="fade-up" data-aos-delay="200">Discover the iconic Machu Picchu</p>
                <a href="/Macchupicchu" data-aos="fade-up" data-aos-delay="300" type="submit" class="btn btn-primary">Discover Now</a>
              </div>    
            </div>
          </div>
        </section>
         {/* End hero-one section */}
         {/* Start Hero-two section */}
         <section id="south-hero-two" className="south-hero-two">
          <img src="./img/South/hero-two-bg.png" alt="" data-aos="fade-in"/>
          <div class="container">
            <div class="row">
               <div >
                <h2 data-aos="fade-up" data-aos-delay="100" >Moai</h2>
                <p data-aos="fade-up" data-aos-delay="200">Discover The moai of Rapa Nui</p>
                  <div className="d-flex justify-content-end ">
                    <a href="/Moai" data-aos="fade-up" data-aos-delay="300" class="btn">Discover Now</a>
                  </div>
              </div>    
            </div>
          </div>
        </section>
        {/* End hero-one section */}
        {/* Start Hero-three section */}
        <section id="south-hero-three" className="south-hero-three">
          <img src="./img/South/hero-three-bg.png" alt="" data-aos="fade-in"/>
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h2 data-aos="fade-up" data-aos-delay="100" >Sydney Opera House</h2>
                <p data-aos="fade-up" data-aos-delay="200">One of the most iconic buildings in the world</p>
                <a href="/Sydneyoperahouse" data-aos="fade-up" data-aos-delay="300" type="submit" class="btn btn-primary">Discover Now</a>
              </div>    
            </div>
          </div>
        </section>   
        
        
           
    </div>
    
  )
}

export default South
