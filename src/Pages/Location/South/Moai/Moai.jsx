import React, { useEffect } from "react";
import './Moai.css';
import AOS from "aos";
import 'aos/dist/aos.css';

function Moai() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);  
  return (
    <div className="main-moai">
        {/* carousel */}
        <div id="carouselExampleAutoplaying" class="carousel" data-bs-ride="carousel-fade" data-bs-pause="false">
        <div class="carousel-inner">
          <div class="carousel-item active bg-1"data-bs-interval="5000">
          <div class="carousel-caption d-none d-md-block">
            <h1>Moai</h1>
            <p>Easter Island’s iconic statues</p>
          </div>
          </div>
          <div class="carousel-item bg-2" data-bs-interval="5000">
          <div class="carousel-caption d-none d-md-block">
            <h1>Moai</h1>
            <p>Easter Island’s iconic statues</p>
          </div>
          </div>
          <div class="carousel-item bg-3"data-bs-interval="5000">
          <div class="carousel-caption d-none d-md-block">
            <h1>Moai</h1>
            <p>Easter Island’s iconic statues</p>
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
      {/* title */}
      <div class="container section-title" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12">
          <h2>The Moai</h2>
          <p>A Brief History of Easter Island's Incredible Moai Statues</p>
          <h6 className='ttl'>Download File PDF  <a download={'pdf/Moai.pdf'} href="./pdf/Moai.pdf"><i class="fa fa-download" aria-hidden="true"> Here</i></a></h6>
          </div>
        </div>          
      </div>
      {/* content */}
      <main>
        <div className="container" >
          <div class="row mb-5">
            <div class="d-md-flex post-entry-2 half">
              <div class="me-4 thumbnail" data-aos="fade-up">
                <img src="./img/South/Moai01.jpg" alt="" class="img-fluid"/>
              </div>
              <div class="ps-md-5 mt-4 mt-md-0" data-aos="fade-up">
                <div class="post-meta mt-4 ">Rapa Nui</div>
                <h2 class="mb-2 display-6">Easter Island</h2>
                <p>Easter Island covers roughly 64 square miles in the South Pacific Ocean, and is located some 2,300 miles from Chile’s west coast and 2,500 miles east of Tahiti. 
                  Known as Rapa Nui to its earliest inhabitants, the island was christened Paaseiland, or Easter Island, by Dutch explorers in honor of the day of their arrival in 1722.
                  It was annexed by Chile in the late 19th century and now maintains an economy based largely on tourism.</p>
                <p>Easter Island’s most dramatic claim to fame is an array of almost 900 giant stone figures that date back many centuries. 
                  The statues reveal their creators to be master craftsmen and engineers, and are distinctive among other stone sculptures found in Polynesian cultures. 
                  There has been much speculation about the exact purpose of the statues, the role they played in the ancient civilization of Easter Island and the way they may have been constructed and transported</p>
              </div>
            </div>
            <div class="d-md-flex post-entry-2 half mt-5">
              <div class="me-4 thumbnail order-2" data-aos="fade-up">
                <img src="./img/South/Moai02.jpg" alt="" class="img-fluid"/>
              </div>
              <div class="pe-md-5 mt-4 mt-md-0" data-aos="fade-up">
                <div class="post-meta mt-4">Moai</div>
                <h2 class="mb-4 display-6">What are the Moai?</h2>
                <p>The Moai statutes date back nearly a thousand years and are the work of the early inhabitants of Easter Island. They are tall sculptures made out of volcanic rock, with disproportionately large heads. The average height of a Moai is about 4m and can weigh around 13.8 tones each, but some are up to 12m tall.</p>
                <p>The faces on these Moai have distinct features, such as broad noses and strong chins jutting out from the rest of the body. The Moai have eye sockets carved, with archaeologists believing coral eyes were used.</p>
              </div>
            </div>
          </div>
        </div>
        <section class="mb-5 bg-light py-5">
      <div class="container" data-aos="fade-up" data-aos-delay="200">
        <div class="row justify-content-between align-items-lg-center">
          <div class="col-lg-5 mb-4 mb-lg-0">
            <h2 class="display-6 mb-4">In the beginning</h2>
            <p>The culture and history of Easter Island called Rapa Nui by locals, and Isla de Pascua by Chileans is tumultuous and debated among experts. It is generally accepted that the island was originally inhabited by Polynesians, who probably came from the similarly remote island of Marquesas sometime between 700-1200 AD. Population growth and agricultural surplus spawned a thriving society which enabled the emergence of a priest and artisan class but ultimately resulted in clan conflict and environmental degradation. By the time Europeans discovered the island in 1722 (on Easter Sunday – hence the name), experts believe the local civilization was already in turmoil. The following centuries of foreign exploitation further denigrated local culture.</p>
            <p>Today, one-third of Easter Island is covered by Rapa Nui National Park and the island's main city of Hanga Roa houses over 85% of the island’s population of around 6,000. Most of the accommodation and dining options are located within the city but we also work with a couple of spectacular out-of-town lodgings. Due to the island’s small size, all popular destinations are easily visited during day tours and outdoor lovers will enjoy plentiful biking, hiking and horseback riding opportunities.</p>
             </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-6">
                <img src="./img/South/Moai03.jpg" alt="" class="img-fluid mb-4"/>
              </div>
              <div class="col-6 mt-5">
                <img src="./img/South/Moai04.jpg" alt="" class="img-fluid mb-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mb-5 bg-light py-5">
      <div class="container" data-aos="fade-up" data-aos-delay="300">
        <div class="row justify-content-between align-items-lg-center">
        <div class="col-lg-12">
            <div class="row">
              <div class="col">
                <img src="./img/South/Moai05.jpg" alt="" class="img-fluid mb-4"/>
              </div>
              
            </div>
          </div>
          <div class="col-lg-12 mb-4 mb-lg-0"data-aos="fade-up" data-aos-delay="300">
            <h2 class="display-6 mb-4">Main attractions</h2>
            <p>One of the most popular places to visit on Easter Island is Ahu Tongarik, which is the largest ahu on the island with 15 statues. It also contains the heaviest moai, weighing in at 86 tons. Like most of the statues, these were once toppled-first by humans, then by a tsunami-and were restored in the 1990s.</p>
            <p>An equally impressive site is Rano Kau, a volcanic crater with steep sides and a lake in the middle, which is nearly covered by totora reeds the same type of reed used to make the floating islands at Lake Titicaca. The ceremonial village of Orongo sits on the edge of the crater and contains over 50 oval-shaped houses.</p>
            <p>During the 18th and 19th centuries, Orongo served as the center of ceremonies for the Birdman cult. To earn favor from the deity Makemake, locals competed to find the first egg of a sooty tern,a local seabird by climbing down the cliff from the village and using a totora raft to scour the lake for an egg.</p>
            <p>To understand where the moai came from, a visit to the Rano Raraku quarry is a must. The volcanic crater is where many moai were carved from the soft volcanic rock, and a stroll along the grassy slope reveals statues in various stages of completion.</p>
             </div>          
        </div>
      </div>
    </section>
      </main>

  </div>

  )
}

export default Moai
