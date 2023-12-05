import React,{useState,useEffect} from 'react'
import './Region.css'
import aos from 'aos'
function Region() {
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
    <div class="test">     
    <section id="more-services" class="more-services">
    <div class="container">
    <div class="section-title" data-aos="fade-up">
        <h2>REGION</h2>
      
      </div>
      <div class="row">
        <div class="col-md-6 d-flex align-items-stretch">
          <div class="card" style={{backgroundImage: "url(img/Region/Sydney-05.jpg)"}} data-aos="fade-up" data-aos-delay="100">
            <div class="card-body">
              <h5 class="card-title"><a href="">Southestern Hemisphere</a></h5>
              <p class="card-text">"The term "Southeastern Hemisphere" is not commonly used to refer to a specific geographic region. However, if you are referring to monuments in the southern part of the Eastern Hemisphere (including Southeast Asia and Oceania), here are descriptions of some notable monuments in that general area"</p>
              <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div class="card" style={{backgroundImage: "url(img/Region/Eiffel-03.jpg)"}} data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <h5 class="card-title"><a href="">Western hemisphere</a></h5>
              <p class="card-text">"The Western Hemisphere is home to a diverse range of monuments that reflect the cultural, historical, and architectural heritage of the Americas. Here are descriptions of some notable monuments in the Western Hemisphere"</p>
              <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
            </div>
          </div>

        </div>
        <div class="col-md-6 d-flex align-items-stretch mt-5">
          <div class="card" style={{backgroundImage: "url(img/Region/Statue-02.jpg)"}} data-aos="fade-up" data-aos-delay="100">
            <div class="card-body">
              <h5 class="card-title"><a href="">Noththern Hemisphere</a></h5>
              <p class="card-text">"
The Northern Hemisphere is home to a diverse array of monuments that showcase the cultural, historical, and architectural richness of the region. Here are descriptions of some notable monuments in the Northern Hemisphere"</p>
              <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
            </div>
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-stretch mt-5">
          <div class="card" style={{backgroundImage: "url(img/Region/Himeji-03.jpg)"}} data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <h5 class="card-title"><a href="">Eastern Hemisphere</a></h5>
              <p class="card-text">"The Eastern Hemisphere is home to a multitude of iconic monuments that stand as testaments to the rich history, diverse cultures, and architectural brilliance of the region. Here are descriptions of some notable monuments in the Eastern Hemisphere"</p>
              <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
            </div>
          </div>
        </div>
      </div>
      <div class="wonders">
          <div class="card"  data-aos="fade-up" data-aos-delay="100">
            <div class="card-body">
              <h5 class="card-title"><a href="">Seven Wonders</a></h5>
              <p class="card-text">"The Seven Wonders of the Ancient World is a list of magnificent structures from ancient times, marking the marvels of architecture and art in human history"</p>
              <div class="read-more"><a href="#"><i class="bi bi-arrow-right"></i> Read More</a></div>
            </div>
          </div>
        </div>

    </div>
  </section>
  </div>
  )
}

export default Region
