import React,{useState,useEffect} from 'react'
import './About.css'
import aos from 'aos'
function About() {  
  useEffect(()=>{
    aos.init();
    aos.refresh();
  }, []);
  return (
    <div>
      <section>           
      <div id='About' class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-12 text-center mb-5">
          
            <h1 class="page-title">About us</h1>
          </div>
        </div>

        <div class="row mb-5">

          <div class="d-md-flex post-entry-2 half">
            <a href="#" class="me-4 thumbnail">
              <img src="img/about/aboutmain.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="ps-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Welcome to Historical Monuments</h2>

              <p className='lichsu'>At the heart of World, Historical Monuments stands as a testament to the rich tapestry of history woven through the ages. This iconic monument, dating back to history, has witnessed centuries of human triumphs, struggles, and cultural evolution.</p>
              
              
            </div>
          </div>

          <div class="d-md-flex post-entry-2 half mt-5">
            <a href="#" class="me-4 thumbnail order-2">
              <img src="img/about/about1.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="pe-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Architectural Marvel</h2>

              <p className='lichsu'>The architectural brilliance of Historical Monuments is a marvel that has withstood the test of time. Hisrorical Team, the visionary behind its design, incorporated  features that have inspired awe and admiration for generations. As you explore Region include South, North, East, West and Seven Ancient Wonders, imagine the skilled hands that meticulously crafted each detail, leaving an indelible mark on the landscape.</p>
              
            </div>
          </div>

        </div>

      </div>
    </section>

    <section class="mb-5 bg-light py-5">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-between align-items-lg-center">
          <div class="col-lg-5 mb-4 mb-lg-0">
            <h2 class="display-4 mb-4">Visit and Experience</h2>
            <p className='lichsumoi'>We invite you to step into the corridors of time and immerse yourself in the history that Historical Monuments encapsulates. Whether you are a history enthusiast, a cultural explorer, or simply someone seeking inspiration, Historical Monuments welcomes you to embark on a journey through the annals of time.</p>
            
            
            
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-6">
                <img src="img/about/about2.jpg" alt="" class="img-fluid mb-4"/>
              </div>
              <div class="col-6 mt-4">
                <img src="img/about/about3.jpg" alt="" class="img-fluid mb-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div class="container" data-aos="fade-up">
        

        <div class="row mb-5">

          <div class="d-md-flex post-entry-2 half">
            <a href="#" class="me-4 thumbnail">
              <img src="img/about/about4.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="ps-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Cultural Significance</h2>

              <p className='lichsu'>Beyond its physical grandeur, Historical Monuments holds profound cultural significance. It has been a focal point for cultural events, ceremonies, or rituals for centuries, bringing communities together and fostering a sense of shared identity. Today, it stands as a symbol of our collective heritage, inviting visitors from around the globe to connect with the stories embedded in its stones.</p>
              
              
            </div>
          </div>

          

        </div>

      </div>
    </section>


      

    <hr />
    <br />
    <br />


    
  =

      
    </div>
  )
}

export default About
