import React, {useEffect} from 'react'
import './West.css';
import aos from 'aos'
function West() {
  useEffect(()=>{
    aos.init();
    aos.refresh();
  }, []);
  return (
    <div className='West'>
    <section id="heroLinh" class="heroLinh d-flex align-items-center">
    <div class="container">
      <div>
        <div >
          <h2 data-aos="fade-up">West Hismisphare</h2>
          <blockquote data-aos="fade-up" data-aos-delay="100">
            <p>The Historical Monument in West Hismisphare . </p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
<main id="main">
<section id="recent-posts" class="recent-posts">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Historical Sites</h2>
        </div>
        <div class="row gy-5">
          <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div class="post-box">
              <div class="post-img"><img src="img/West/berlinwall3.jpg" class="img-fluid" alt="berlinwall"/></div>
              <div class="meta">
                <span class="post-date">Form 1961 to 1989</span>
                <span class="post-author"> / The Berlin Wall</span>
              </div>
              <h3 class="post-title">The Berlin Wall</h3>
              <p>The Berlin Wall was a guarded concrete barrier that encircled West Berlin of the Federal Republic of Germany (FRG; West Germany) from 1961 to 1989, separating it from East Berlin and the German Democratic Republic (GDR; East Germany)...</p>
              <a href="/Berlinwall" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div class="post-box">
              <div class="post-img"><img src="img/West/Effieltower.jpg" class="img-fluid" alt="effiel"/></div>
              <div class="meta">
                <span class="post-date">1889</span>
                <span class="post-author"> / Effiel Tower</span>
              </div>
              <h3 class="post-title">The Eiffel Tower</h3>
              <p>The Eiffel Tower (French: Tour Eiffel) is a steel structure located on the Champ-de-Mars park, next to the Seine River, Paris, France. Originally named the Tour de 300 mètres Tower, it was designed and built between 1887 and 1889 by engineer Gustave Eiffel and his colleagues on the occasion of the 1889 World Exposition, and also the 100th anniversary of the French Revolution....</p>
              <a href="/Effeltower" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
          <div class="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div class="post-box">
              <div class="post-img"><img src="img/West/semmering1.jpg" class="img-fluid" alt="semmering"/></div>
              <div class="meta">
                <span class="post-date">1854</span>
                <span class="post-author"> / Semmering Railway</span>
              </div>
              <h3 class="post-title">The Semmering Railway</h3>
              <p>The Semmering Railway is a railway in Austria, starting from Glognitz and running through Semmering to Mürzzuschlag. It is the first mountain railway in the world, especially because it passes through very difficult terrain with very different altitudes...</p>
              <a href="/Semmering" class="readmore stretched-link"><span>Read More</span><i class="bi bi-arrow-right"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
    </div>
  )
}

export default West
