import React, { useEffect } from 'react'
import './Wonder.css'
import aos from 'aos'

function Woder() {
  
  useEffect(()=>{
    aos.init();
    aos.refresh();
  }, []);
  return (
    <div className='Wonder'>
      
      
      <div id="bgvideo" class="d-flex align-items-center">
            <video className="w-100" muted loop playsInline autoPlay id="mybgvideo">
                <source src="./video/Wonderbg.mp4" type="video/mp4"/>
            </video>
            <div class="container position-absolute text-syd" data-aos="fade-up" data-aos-delay="500">
             <h1>Seven Ancient Wonders</h1>
             {/* Hero Section */}
  <section id="heo" class="d-flex justify-cntent-center align-items-center">
    <div id="heroCarousel" class="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

      {/*  Slide 1 */}
      <div class="carousel-item active">
        <div class="carousel-container">
          
          <p class="animate__animated animate__fadeInUp">The Seven Wonders of the Ancient World, also known as the Seven Wonders of the World or simply the Seven Wonders, is a list of seven notable structures present during classical antiquity. The first known list of seven wonders dates back to the 2nd–1st century BC. </p>
          
        </div>
      </div>

      {/*  Slide 2 */}
      <div class="carousel-item">
        <div class="carousel-container">
          
          <p class="animate__animated animate__fadeInUp"> While the entries have varied over the centuries, the seven traditional wonders are the Great Pyramid of Giza, the Colossus of Rhodes, the Lighthouse of Alexandria, the Mausoleum at Halicarnassus, the Temple of Artemis, the Statue of Zeus at Olympia, and the Hanging Gardens of Babylon. Using modern-day countries, two of the wonders were located in Greece, two in Turkey, two in Egypt, and one in Iraq.</p>
          
        </div>
      </div>

      {/*  Slide 3  */}
      <div class="carousel-item">
        <div class="carousel-container">
          
          <p class="animate__animated animate__fadeInUp">Of the seven wonders, only the Pyramid of Giza, which is also by far the oldest of the wonders, still remains standing, while the others have been destroyed over the centuries. There is scholarly debate over the exact nature of the Hanging Gardens, and there is doubt as to whether they existed at all.</p>
          
        </div>
      </div>    
    </div>
  </section>
  {/*  End Hero  */}
                </div>
        </div>
       
  {/* Nav List Seven Wonder */}
  
  
  
  
  {/* End Nav List */}
      {/* Features Section */}
    <section class="features" className='Huy'>
      <div class="container">

        <div class="section-title">
          <h2>List Seven Ancient Wonders</h2>
          <p>Download File PDF  <a download={'pdf/wonder.pdf'} href="./pdf/wonder.pdf"><i class="fa fa-download" aria-hidden="true"> Here</i></a></p>
          
          
        </div>
        {/* Zeus */}
        <div class="row"  id='Zeus'>
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-md-5">
            <img src="img/Wonder/Zeus/Zeus.png" class="img-fluid" alt=""/>
          </div>
          <div data-aos="fade-left" class="col-md-7 pt-4">
            <h3>Statue of Zeus at Olympia</h3>
            <p class="fst-italic">
            Statue of Zeus, at Olympia, Greece, one of the Seven Wonders of the World. The statue was one of two masterpieces by the Greek sculptor Phidias (the other being the statue of Athena in the Parthenon) and was placed in the huge Temple of Zeus at Olympia in western Greece. 
            </p>
            <ul>
              <li><i class="bi bi-check"></i> The statue, which took eight years to construct, was noted for the divine majesty and goodness it expressed.</li>
              <li><i class="bi bi-check"></i>The discovery in the 1950s of the remains of Phidias’ workshop at Olympia confirmed the statue’s date of about 430 BCE. </li>
              <li><i class="bi bi-check"></i>The temple was destroyed in 426 CE, and the statue, of which no accurate copies survive, may have been destroyed then or in a fire at Constantinople (now Istanbul) about 50 years later. </li>
            </ul>
            
          </div>
        </div>
            {/* List IMG */}
            <div class="container my-5 "  className='List_img'>

            <div class="text-center text-white" >
              {/* Grid container  */}
              <div class="container p-4">
                {/* Section: Images  */}
                <section class="">
                  <div class="row">
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                          data-aos="fade-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                          
                            src="img/Wonder/Zeus/1.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div class="mask" ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Zeus/2.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Zeus/3.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div 
                      data-aos="fade-up"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Zeus/4.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Zeus/5.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Zeus/6.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section: Images  */}
              </div>
              {/* Grid container  */}     
            </div>

            </div>
            {/* End of .List IMG  */}
        {/* Rhodes */}
        <div class="row"  id='Rhodes'>
          <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-md-5 order-1 order-md-2" >
            <img src="img/Wonder/Rhodes/Rhodes.png" class="img-fluid" alt=""/>
          </div>
          <div data-aos="fade-right" class="col-md-7 pt-5 order-2 order-md-1">
            <h3>Colossus of Rhodes</h3>
            <p class="fst-italic">
            The Colossus of Rhodes was a statue of the Greek Titan god of the sun Helios, erected in the city of Rhodes, on the Greek island of the same name, by Chares of Lindos in 280 BC.
            </p>
            <ul>
              <li><i class="bi bi-check"></i> It was constructed to celebrate the successful defence of Rhodes city against an attack by Demetrius I of Macedon , who had besieged it for a year with a large army and navy. </li>
              <li><i class="bi bi-check"></i> According to the Chronicle of Theophanes the Confessor, the statue was completely destroyed and the remains sold; this account may be unreliable.</li>
              <li><i class="bi bi-check"></i>Since 2008, a series of as-yet-unrealized proposals to build a new Colossus at Rhodes Harbour have been announced, although the actual location of the original monument remains in dispute </li>
              
            </ul>
          </div>
        </div>
            {/* List IMG */}
            <div class="container my-5"  className='List_img'>

            <div class="text-center text-white" >
              {/* Grid container  */}
              <div class="container p-4">
                {/* Section: Images  */}
                <section class="">
                  <div class="row">
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Rhodes/1.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div class="mask" ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Rhodes/2.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Rhodes/3.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Rhodes/4.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Rhodes/5.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Rhodes/6.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section: Images  */}
              </div>
              {/* Grid container  */}     
            </div>

            </div>
            {/* End of .List IMG  */}
        {/* Giza */}
        <div class="row"  id='Giza'>
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-md-5">
            <img src="img/Wonder/Giza/Giza.png" class="img-fluid" alt=""/>
          </div>
          <div data-aos="fade-left" class="col-md-7 pt-5">
            <h3>Great Pyramid of Giza</h3>
            <p class="fst-italic">The Great Pyramid of Giza is the largest Egyptian pyramid and served as the tomb of pharaoh Khufu , who ruled during the Fourth Dynasty of the Old Kingdom. Built in the early 26th century BC, over a period of about 27 years.</p>
            <ul>
              <li><i class="bi bi-check"></i>  The pyramid is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact.</li>
              <li><i class="bi bi-check"></i> It is the most famous monument of the Giza pyramid complex, which is part of the UNESCO World Heritage Site "Memphis and its Necropolis".</li>
              <li><i class="bi bi-check"></i>It is situated at the northern end of the line of the three pyramids at Giza .Initially standing at 146.6 metres (481 feet), the Great Pyramid was the world's tallest human-made structure for more than 3,800 years.</li>
            </ul>
          </div>
        </div>
            {/* List IMG */}
            <div class="container my-5" className='List_img'>

            <div class="text-center text-white" >
              {/* Grid container  */}
              <div class="container p-4">
                {/* Section: Images  */}
                <section class="">
                  <div class="row">
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Giza/1.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div class="mask" ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Giza/2.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Giza/3.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Giza/4.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Giza/5.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Giza/6.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section: Images  */}
              </div>
              {/* Grid container  */}     
            </div>

            </div>
            {/* End of .List IMG  */}
        {/*  Babylon */}
        <div class="row"  id='Babylon'>
          <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-md-5 order-1 order-md-2">
            <img src="img/Wonder/Babylon/Babylon.png" class="img-fluid" alt=""/>
          </div>
          <div data-aos="fade-right" class="col-md-7 pt-5 order-2 order-md-1">
            <h3>The Hanging Gardens of Babylon </h3>
            <p class="fst-italic">
            It were one of the Seven Wonders of the Ancient World listed by Hellenic culture. They were described as a remarkable feat of engineering with an ascending series of tiered gardens containing a wide variety of trees, shrubs, and vines, resembling a large green mountain constructed of mud bricks.
            </p>
            <ul>
              <li><i class="bi bi-check"></i> It was said to have been built in the ancient city of Babylon , near present-day Hillah , Babil province, in Iraq. </li>
              <li><i class="bi bi-check"></i> The Hanging Gardens' name is derived from the Greek word κρεμαστός (kremastós, lit. 'overhanging'), which has a broader meaning than the modern English word "hanging" and refers to trees being planted on a raised structure such as a terrace. </li>
              <li><i class="bi bi-check"></i>The Hanging Gardens are the only one of the Seven Wonders for which the location has not been definitively established. There are no extant Babylonian texts that mention the gardens, and no definitive archaeological evidence has been found in Babylon. </li>
              
            </ul>
          </div>
        </div>
            {/* List IMG */}
            <div class="container my-5"  className='List_img'>

            <div class="text-center text-white" >
              {/* Grid container  */}
              <div class="container p-4">
                {/* Section: Images  */}
                <section class="">
                  <div class="row">
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Babylon/1.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div class="mask" ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Babylon/2.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Babylon/3.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Babylon/4.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Babylon/5.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Babylon/6.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section: Images  */}
              </div>
              {/* Grid container  */}     
            </div>

            </div>
            {/* End of .List IMG  */}
        {/* Halicarnassus */}
        <div class="row"  id='Halicarnassus'>
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-md-5">
            <img src="img/Wonder/Hali/Hali.png" class="img-fluid" alt=""/>
          </div>
          <div data-aos="fade-left" class="col-md-7 pt-5">
            <h3>The Mausoleum at Halicarnassus or Tomb of Mausolus</h3>
            <p class="fst-italic">It was a tomb built between 353 and 350 BC in Halicarnassus (present Bodrum, Turkey) for Mausolus , an Anatolian from and a satrap in the Achaemenid Empire , and his sister-wife Artemisia II of Caria . </p>
            <ul>
              <li><i class="bi bi-check"></i>  The structure was designed by the Greek architects Satyros and Pythius of Priene.</li>
              <li><i class="bi bi-check"></i> The Mausoleum contained total 400 freestanding sculptures.</li>
              <li><i class="bi bi-check"></i>The mausoleum was considered to be such an aesthetic triumph that Antipater of Sidon identified it as one of his Seven Wonders of the Ancient World.</li>
              <li><i class="bi bi-check"></i>  It was destroyed by successive earthquakes from the 12th to the 15th century, it was the last surviving of the six destroyed wonders.</li>
            </ul>
          </div>
        </div>
            {/* List IMG */}
            <div class="container my-5"  className='List_img'>

            <div class="text-center text-white" >
              {/* Grid container  */}
              <div class="container p-4">
                {/* Section: Images  */}
                <section class="">
                  <div class="row">
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Hali/1.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div class="mask" ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Hali/2.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Hali/3.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Hali/4.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Hali/5.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Hali/6.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section: Images  */}
              </div>
              {/* Grid container  */}     
            </div>

            </div>
            {/* End of .List IMG  */}
        {/* Alexandria */}
        <div class="row"  id='Alexandria'>
          <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-md-5 order-1 order-md-2">
            <img src="img/Wonder/Alex/Alex.png" class="img-fluid" alt=""/>
          </div>
          <div data-aos="fade-right" class="col-md-7 pt-5 order-2 order-md-1">
            <h3>The Lighthouse of Alexandria</h3>
            <p class="fst-italic">
            Sometimes called the Pharos of Alexandria (/ˈfɛərɒs/ FAIR-oss; Ancient Greek: ὁ Φάρος τῆς Ἀλεξανδρείας, romanized: ho Pháros tês Alexandreías, contemporary Koine Greek pronunciation: [ho pʰáros tɛ̂ːs aleksandrěːaːs]; Arabic: فنار الإسكندرية), was a lighthouse built by the Ptolemaic Kingdom of Ancient Egypt, during the reign of Ptolemy II Philadelphus (280–247 BC). 
            </p>
            <ul>
              <li><i class="bi bi-check"></i>  It has been estimated to have been at least 100 metres (330 ft) in overall height, for many centuries it was one of the tallest man-made structures in the world. </li>
              <li><i class="bi bi-check"></i> The lighthouse was severely damaged by three earthquakes between 956 and 1323 AD and became an abandoned ruin. It was the third-longest surviving ancient wonder, after the Mausoleum at Halicarnassus and the extant Great Pyramid of Giza , surviving in part until 1480, when the last of its remnant stones were used to build the Citadel of Qaitbay on the site.</li>
              <li><i class="bi bi-check"></i>In 1994, a team of French archaeologists dived into the water of Alexandria's Eastern Harbour and discovered some remains of the lighthouse on the sea floor. </li>
              <li><i class="bi bi-check"></i>In 2014 the Ministry of State of Antiquities in Egypt had plans to turn submerged ruins of ancient Alexandria, including those of the Pharos, into an underwater museum. </li>
              
            </ul>
          </div>
        </div>
            {/* List IMG */}
            <div class="container my-5"  className='List_img'>

            <div class="text-center text-white" >
              {/* Grid container  */}
              <div class="container p-4">
                {/* Section: Images  */}
                <section class="">
                  <div class="row">
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Alex/1.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div class="mask" ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Alex/2.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Alex/3.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Alex/4.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-down-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Alex/5.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Alex/6.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section: Images  */}
              </div>
              {/* Grid container  */}     
            </div>

            </div>
            {/* End of .List IMG  */}
        {/* Artemis  */}
        <div class="row"  id='Artemision'>
          <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" class="col-md-5">
            <img src="img/Wonder/Artemis/Artemis.png" class="img-fluid" alt=""/>
          </div>
          <div data-aos="fade-left" class="col-md-7 pt-5">
            <h3>The Temple of Artemis or Artemision</h3>
            <p class="fst-italic">Known as the Temple of Diana, was a Greek temple dedicated to an ancient, local form of the goddess Artemis (identified with Diana, a Roman goddess). It was located in Ephesus (near the modern town of Selçuk in present-day Turkey). </p>
            <ul>
              <li><i class="bi bi-check"></i>  By 401 AD it had been ruined or destroyed. </li>
              <li><i class="bi bi-check"></i> Only foundations and fragments of the last temple remain at the site.The earliest version of the temple (a Bronze Age temenos) antedated the Ionic immigration by many years.</li>
              <li><i class="bi bi-check"></i>In the 7th century BC, it was destroyed by a flood.Its reconstruction, in more grandiose form, began around 550 BC, under Chersiphron , the Cretan architect , and his son Metagenes. The project was funded by Croesus of Lydia, and took 10 years to complete. </li>
              <li><i class="bi bi-check"></i>This version of the temple was destroyed in 356 BC by an arsonist.The next, greatest, and last form of the temple, funded by the Ephesians themselves, is described in Antipater of Sidon's list of the world's Seven Wonders. </li>
            </ul>
          </div>
        </div>
            {/* List IMG */}
            <div class="row my-5"  className='List_img'>
            <div class="text-center text-white" >
              {/* Grid container  */}
              <div class="row p-4">
                {/* Section: Images  */}
                <section class="">
                  <div class="row">
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Artemis/1.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div class="mask" ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up-right"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Artemis/2.jpg"
                            class="listimage "
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Artemis/3.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Artemis/4.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-up-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Artemis/5.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                      <div
                      data-aos="fade-left"
                          class="bg-image hover-overlay ripple shadow-1-strong rounded"
                          data-ripple-color="light"
                          >
                        <img
                            src="img/Wonder/Artemis/6.jpg"
                            class="listimage"
                            />
                        <a href="#!">
                          <div
                              class="mask"
                              
                              ></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Section: Images  */}
              </div>
              {/* Grid container  */}     
            </div>

            </div>
            {/* End of .List IMG  */}
          {/* SomeThing Before End Section */}
        <div class="row" >
          <div data-aos="fade-left" class="col-md-5 order-1 order-md-2">
            <img src="img/Timeline.png" class="img-fluid" alt=""/>
          </div>
          <div data-aos="fade-right" class="col-md-7 pt-5 order-2 order-md-1">
            <h3>Ancient seven wonders timeline</h3>
            
            <p c/*  */lass="fst-italic">
            Size of this PNG preview of this SVG file: 500 × 600 pixels. Other resolutions: 200 × 240 pixels | 400 × 480 pixels | 640 × 768 pixels | 854 × 1,024 pixels | 1,708 × 2,048 pixels | 512 × 614 pixels.
            </p>
            <ul>
              <li><i class="bi bi-check"></i>  Timeline and map of the Seven Wonders of the Ancient World by CMG Lee, compared with the approximate lifespan of Philo of Byzantium who described them. Dates in bold green and dark red are those of their construction and destruction, respectively, based on data at <a target='blank' href="http://commons.wikimedia.org/wiki/File:A_timeline_of_the_Seven_Wonders_of_the_ancient_world.png">here</a>, the map is from <a target='blank' href="https://commons.wikimedia.org/wiki/File:Mediterranean_Basin_and_Near_East_before_1000_AD_topographic_map.jpg">here</a> and dowload image <a  href="./img/Timeline.png" download={'img/Timeline.png'} >here</a> </li>
              
            </ul>
            
          </div>
        </div>
      </div>
    </section> 
     {/* End Features Section  */}
      
     
    </div>
  )
}

export default Woder
