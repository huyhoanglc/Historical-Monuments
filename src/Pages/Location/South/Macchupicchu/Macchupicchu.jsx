import '../Macchupicchu/Macchupicchu.css'
import React, { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';


function Macchupicchu() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div>
        {/* Hero Section */}
  <section id="heromacchupicchu" class="d-flex align-items-center justify-content-center">
    <div class="container" data-aos="fade-up">
      <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div class="col-xl-6 col-lg-8">
          <h1>Macchu Picchu</h1>
          <h2>Mysterious ancient city in Peru</h2>
        </div>
      </div>  
    </div>
  </section>
  {/* End Hero */}
 {/* Main Section */}
    <section id="main-mc" class="main">
    <div class="container section-title" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12">
          <h2>Macchu Picchu</h2>          
          <h6 className='ttl'>Download File PDF  <a download={'pdf/Macchupicchu.pdf'} href="./pdf/Macchupicchu.pdf"><i class="fa fa-download" aria-hidden="true"> Here</i></a></h6>
          </div>
        </div>          
      </div>
    
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2 " data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">
            <img src="./img/South/about1.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 order-2 order-lg-1 content" data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">
            
            <h3>Historic Sanctuary of Machu Picchu.</h3>
            <p>There are many ancient ruins, many beautiful mountain hikes, many places that combine history and mystery in an intriguing blend—but none like Machu Picchu. Perched high in the Peruvian Andes, Machu Picchu is one attraction that lives up to, and beyond, its hype.</p>
            <p>Built by the Incas around 1450 and later abandoned, Machu Picchu sat in relative obscurity until 100 years ago when Hiram Bingham, an American explorer and professor, stumbled upon the ruins in July of 1911. Bingham, guided by in-the-known locals, mapped and documented the jungle-covered stone ruins to the best of his ability before returning to the United States where he published his finding in National Geographic.</p>
            
          </div>
          <div className="col-lg-12 order-3 order-lg-3  content" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
          <p>
            Machu Picchu stands 2,430 m above sea-level, in the middle of a tropical mountain forest, in an extraordinarily beautiful setting. It was probably the most amazing urban creation of the Inca Empire at its height; its giant walls, terraces and ramps seem as if they have been cut naturally in the continuous rock escarpments. The natural setting, on the eastern slopes of the Andes, encompasses the upper Amazon basin with its rich diversity of flora and fauna.
            </p>
            <p>
            Often referred to as the "Lost City of the Incas", it is the most familiar icon of the Inca Empire. It is located in the Machupicchu District within Urubamba Province above the Sacred Valley, which is 80 kilometers northwest of Cusco.
            </p>
            <p>The Inca civilization had no written language and, after the discovery by a Spanish soldier Baltasar Ocampo, by the end of the 16th-century no more Europeans visited the site until the 19th century, so far as is known, so there are no written records of the site while it was in use. The names of the buildings, their supposed uses, and their inhabitants are the product of modern archaeologists based on physical evidence, including tombs at the site. Machu Picchu was built in the classical Inca style, with polished dry-stone walls. Its three primary structures are the Intihuatana, the Temple of the Sun, and the Temple of the Three Windows. </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-4  ">
            <div id='bg-img-mc' className="col-lg-6 order-1 order-lg-1 img-fluid"></div>
            <div className="col-lg-6 pt-2 order-2 order-lg-2 content mt-2" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500"><h3>History</h3>
            <p>
            Machu Picchu was believed to have been built in the 1450s. However, a 2021 study led by Burger used radiocarbon dating to reveal that Machu Picchu may have been occupied from around 1420 to 1530 AD. Construction appears to date from two great Inca rulers, Pachacutec Inca Yupanqui 1438–1471 and Túpac Inca Yupanqui 1472–1493
            </p>
            <p>
            The Inca civilization had no written language and, after the discovery by a Spanish soldier Baltasar Ocampo, by the end of the 16th-century no more Europeans visited the site until the 19th century, so far as is known, so there are no written records of the site while it was in use. The names of the buildings, their supposed uses, and their inhabitants are the product of modern archaeologists based on physical evidence, including tombs at the site. Machu Picchu was built in the classical Inca style, with polished dry-stone walls. Its three primary structures are the Intihuatana, the Temple of the Sun, and the Temple of the Three Windows.     
            </p>
          </div>
        </div>
    </div>
    <div class="container">
        <div class="row gy-4 align-items-center tourism mt-3">
          <div class="col-lg-5 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h3>Tourism in Macchu Picchu</h3>
            <p>
            Machu Picchu is only connected to the outside world by train tracks, manages to maintain part of its previous isolation. 
            Visitors must travel by train from either Cuzco or the Sacred Valley to the tiny to town of Machu Picchu Pueblo. From here, a bus follows a winding road up and around the mountain to the Machu Picchu citadel. 
            Alternatively, ambitious and fit visitors can hike to Machu Picchu via the Inca Trail.
            Most Machu Picchu tours include 2 hours with a specialist guide who details the most important and interesting structures. However, as the site contains over 200 buildings or partial buildings, there is plenty to explore, and an early morning visit is highly recommended. As the sun breaks through the mist, Machu Picchu is tantalizingly revealed bit by bit until the whole complex is enveloped in an amber glow. 
            To fully appreciate the splendor of a Machu Picchu sunrise, head directly to the Sun Gate or toward Wayna Picchu, both of which offer panoramic views of the entire complex.
            </p>            
          </div>
          <div class="col-lg-7 order-1 order-lg-2 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="100">
            <div class="image-stack-mc">
              <img src="./img/South/stackfront.jpg" alt="" class="stack-front-mc"/>
              <img src="./img/South/stackback.jpg" alt="" class="stack-back-mc"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Macchupicchu
