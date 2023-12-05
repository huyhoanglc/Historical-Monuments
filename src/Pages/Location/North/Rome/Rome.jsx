import React,{useState,useEffect} from 'react'
import './Rome.css'
import aos from 'aos';
function Rome() {
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
    <div className='quan'>
      {/* Header-Nav */}
      <div className='Header-nav'>    
      <nav class={navbar ? "navbar fixed-top navbar-expand-lg navbar-dark  navbar-scrolled" : "navbar  navbar-expand-lg navbar-dark bg-black " }>
        <div class="container-fluid">          
          <a href="/" class=" navbar-brand logo me-auto me-lg-0"><img src="./img/logo-navbar.png" alt="" class="img-fluid"/></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse button-navbar" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class="nav-item dropdown ">
              <a href="/Region" type="button" class="btn btn-outline-light">Region</a>
              <button type="button" id="navbarDropdown" class="btn btn-outline-light dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
              </button>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="/West">West</a>
                  <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="/Semmering">Semmering Railway</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Effeltower">Eiffel Tower</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Berlinwall">Berlin Wall</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/East">East</a>
                  <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="/HimejiCastle">Himeji Castle</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Gyeongbokgung">Gyeongbokgung Palace</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Kinkaku">Rizal Monument</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/South">South</a>
                  <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="/Macchupicchu">Macchu Picchu</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Moai">Moai</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/Sydneyoperahouse">Sydney Opera House</a>
                      </li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item" href="/North">North</a>
                  <ul class="dropdown-menu dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="/truongthanh">The Great Wall</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/nuthantudo">Statue Of Liberty</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="/rome">The Colosseum</a>
                      </li>
                    </ul></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="/Wonder">Seven Wonders</a>             
                  </li>
                </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Gallery">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/About">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact Us</a>
            </li>
        
      </ul>      
    </div>
  </div>
</nav>

    </div>
    {/* End Header-Nav */}
    <main id="main">

{/* <!-- ======= Hero Slider Section ======= --> */}
<section id="hero-slider" class="hero-slider">
  <div class="container-md" data-aos="fade-in">
    <div class="row">
      <div class="col-12">
        <div class="swiper sliderFeaturedPosts">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="img-bg d-flex align-items-end" style={{backgroundImage: "url(img/North/rome/banner.jpg)"}}>
                <div class="img-bg-inner">
                  <h2>The Colosseum</h2>
                  <p>The Roman Colosseum is one of the New Seven Wonders of the World and a must-see sight if you’re visiting Italy’s capital, the Eternal City.</p>
                </div>
             </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</section>
{/* <!-- End Hero Slider Section --> */}

{/* <!-- ======= Post Grid Section ======= --> */}
<section id="posts" class="posts">
  <div class="container" data-aos="fade-up">
    <div class="row g-5">
      <div class="col-lg-4">
        <div class="post-entry-1 lg">
          <div><img src="img/North/rome/rome3.jpg" alt="" class="img-fluid"/></div>
          
          <h2><div>Colosseum</div></h2>
          <p class="mb-4 d-block">The Colosseum or Colosseum was first known as the Italian Colosseum Flavium or Anfitea ash Flavio, later known as the Colosseum or Colosseo, was a large arena in the city of Rome. The capacity at construction time was 50,000 spectators. The arena was used for POW gladiators and slaves to compete and perform in public. The arena was built around 70-80 AD under emperor Vespasian. It was the largest structure built in the Roman Empire and was completed in 80 AD under Titus, with many modifications under Emperor Domitian.

          The Colosseum remained in use for nearly 500 years, with recorded evidence of 6th-century battles – long after the fall of the Roman Empire in 476. In addition to being used as a place for for boxers, it is also used by the general public. purpose. performances, mock sea drills, animal hunting and classical drama. This building gradually fell out of use as a place of entertainment during the Middle Ages. Later, the arena was used as housing, shops, churches, courtyards...

          Although now severely damaged by earthquakes and stone robbers, the Colosseum has long been considered a symbol of the Roman Empire and one of the finest surviving examples of Roman architecture. . This is a fascinating sight of Rome and still has many connections to the Catholic Church. Every year on Good Friday, the Pope presides over the Liturgy of the Cross in Colosseo.</p>

          
        </div>

      </div>

      <div class="col-lg-8">
        <div class="row g-5">
          <div class="col-lg-4 border-start custom-border">
            <div class="post-entry-1">
              <img src="img/North/rome/rome5.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.thecolosseum.org/visit/">Visiting the Colosseum</a></h2>
              <p>The Roman Colosseum is one of the New Seven Wonders of the World and a must-see sight if you’re visiting Italy’s capital, the Eternal City.</p>
            </div>
            <div class="post-entry-1">
              <img src="img/North/rome/rome6.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.thecolosseum.org/visit/">Where is the Colosseum located?</a></h2>
              <p>The address of the Colosseum is Piazza del Colosseo, 1, in Rome, Italy.
                For those travelling by car, the Colosseum’s GPS coordinates are 41.8902° N, 12.4922° E.
                If you’re in Rome and want to find out how to go to the Colosseum use the following Google Map to find the best route from your current location.</p>
            </div>
            <div class="post-entry-1">
              <img src="img/North/rome/rome7.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.thecolosseum.org/visit/">How to get to the Colosseum</a></h2>
              <p>The Colosseum is very well serviced by Rome’s extensive public transport network. It can be reached by subway, multiple bus lines, and by tram. </p>
            </div>
          </div>
          <div class="col-lg-4 border-start custom-border">
            <div class="post-entry-1">
              <img src="img/North/rome/rome8.jpg" alt="" class="img-fluid"/>         
              <h2><a href="https://www.thecolosseum.org/visit/">Things to do near Colosseum</a></h2>
              <p>The Colosseum is surrounded by other beautiful and famous monuments that are worth seeing.</p>
            </div>
            <div class="post-entry-1">
              <img src="img/North/rome/rome9.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.thecolosseum.org/visit/">What is the best way to see the Colosseum?</a></h2>
              <p>The best time to visit the Colosseum is early in the morning before large crowds form, and the best days are during the week, as it will usually be less crowded than on the weekends. However, if you’re willing to spend a little more, a night time tour (link) is probably the most interesting way to visit. Keep in mind that the night tour does not include a combined ticket for the Roman Forum and the palatine hill as a normal Colosseum ticket would, so if you want to see those monuments too you’ll have to visit them separately.</p>

            </div>
            <div class="post-entry-1">
              <img src="img/North/rome/rome10.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.thecolosseum.org/visit/">Tips and things you should know for your visit</a></h2>
            </div>
          </div>

          {/* <!-- Trending Section --> */}
          <div class="col-lg-4">

            <div class="trending">
              <h5>Here are some famous quotes about the Colosseum:</h5>
              <br />
              <ul class="trending-post">
                <li>
                  <div>
                    
                    <h6>1.“Evil can also be beautiful. The Colosseum in Rome, for example, a wonderful structure with a terrible past. Think about the bloody gladiator fights there.”</h6>
                    <span class="author">Rem Koolhaas</span>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h6>2.“I’m not sure what it’s like to step into the Colosseum, but I bet it’s like this. This is the best place in the world to watch a sporting event.”</h6>
                    <span class="author">Wright Thompson</span>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h6>3.“One of the reasons I like to jump between media is that film allows me to be more visual. I can go to the actual place. I can go to the Colosseum, and I don’t have to pretend.”</h6>
                    <span class="author">Julie Taymor</span>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h6>4.“Rome will exist as long as the Colosseum does; when the Colosseum falls, so will Rome; when Rome falls, so will the world.” </h6>
                    <span class="author">Venerable Bede</span>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h6>5.“I found Rome a city of bricks and left it a city of marble.”</h6>
                    <span class="author"> Augustus</span>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h6>6.“Rome is the city of echoes, the city of illusions, and the city of yearning.”</h6>
                    <span class="author">Giotto di Bondone</span>
                  </div>
                </li>
                <br />
              </ul>
            </div>

          </div> 
          {/* <!-- End Trending Section --> */}
        </div>
      </div>

    </div> 
    {/* <!-- End .row --> */}
  </div>
</section> 
{/* <!-- End Post Grid Section --> */}
<hr />


    <section>
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-12 text-center mb-5">
            <h1 class="page-title">History</h1>
            <h4 className='ttl'>Download File PDF  <a download={'pdf/Colosseum.pdf'} href="./pdf/Colosseum.pdf"><i class="fa fa-download" aria-hidden="true"> Here</i></a></h4>
          </div>
        </div>

        <div class="row mb-5">

          <div class="d-md-flex post-entry-2 half">
            <a href="#" class="me-4 thumbnail">
              <img src="img/North/rome/rome12.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="ps-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Ancient</h2>

              <p className='lichsu'>Construction of the Colosseum began under Emperor Vespasian around (70–72) AD and was completed in 80 AD under Titus. It was later adapted during the reign of King Domitian (81–96). The site chosen was a flat area of land in a valley between the Caeli Hills, the Esquiline Hills and the Palatine Hills, through which a canal ran. By 62, this land was densely populated and abandoned after the Great Fire of Rome in 64 AD, after which Nero appropriated most of this area as his own domain. He built the monumental Domus Aurea on this site, in front of which he created an artificial lake surrounded by halls, gardens and gates. The existing Aqua Claudia aqueduct was expanded to supply water to the area, and Nero's enormous bronze Colosseum was built near the entrance gate of the Domus Aurea.</p>
              <a className='readmore' href="https://en.wikipedia.org/wiki/Colosseum">read more...</a>
              
            </div>
          </div>

          <div class="d-md-flex post-entry-2 half mt-5">
            <a href="#" class="me-4 thumbnail order-2">
              <img src="img/North/rome/rome13.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="pe-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Middle Ages</h2>

              <p className='lichsu'>The Colosseum underwent major changes during the Middle Ages. A small church was built on the inside of the arena in the late 6th century, and the arena became a cemetery. Many of the spaces beneath the stairs were used as lodgings or craft workshops, and people continued to rent houses there until the 12th century.</p>
              <p className='lichsu'>In 1349, a major earthquake collapsed the entire outer wall of the south face. A large portion of the stone was used for the construction of palaces, churches, dispensaries and other structures, the marble layer was used for lime kilns, and the iron and copper cores were stolen.</p>
              <a className='readmore' href="https://en.wikipedia.org/wiki/Colosseum">read more...</a>
              
            </div>
          </div>

        </div>

      </div>
    </section>

    <section class="mb-5 bg-light py-5">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-between align-items-lg-center">
          <div class="col-lg-5 mb-4 mb-lg-0">
            <h2 class="display-4 mb-4">Modern</h2>
            <p className='lichsumoi'>In the 16th and 17th centuries, church officials sought to exploit the Colosseum. Pope Sixtus V (1585–1590) intended to turn the building into a factory to create jobs for Rome's unemployed, although this did not materialize due to his early death. In 1671, Cardinal Altieri authorized its use for bullfighting; But facing fierce opposition, this idea failed.</p>
            <a className='readmore' href="https://en.wikipedia.org/wiki/Colosseum">read more...</a>
            
            
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-6">
                <img src="img/North/rome/rome14.jpg" alt="" class="img-fluid mb-4"/>
              </div>
              <div class="col-6 mt-4">
                <img src="img/North/rome/rome15.jpg" alt="" class="img-fluid mb-4"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div class="container" data-aos="fade-up">
        <div class="row">
          <div class="col-lg-12 text-center mb-5">
            <h1 class="page-title">Features of the project</h1>
          </div>
        </div>

        <div class="row mb-5">

          <div class="d-md-flex post-entry-2 half">
            <a href="#" class="me-4 thumbnail">
              <img src="img/North/rome/rome16.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="ps-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">External</h2>

              <p className='lichsu'>Dimensions of Colosseo: 57 m high, 188 m long, 158 m wide
               m.Unlike previous arenas, this structure is a free-standing structure, built on flat ground and not against a hill or natural depression. The original outer wall had a circumference of 545 m and required 100,000 m³ of travertine stone held together by 300 tons of iron clamps. It can accommodate up to 50,000 to 80,000 people and is so well designed that each person can leave the building within minutes. The secret lies in the clever use of rolling domes, corridors and stairs leading up and down to the seats. The arcades above the ground floor create 80 crowded entrances, each numbered to help visitors find their seats. A huge rain cover is often stretched above, and during night shows a huge iron chandelier is hung above the arena. However, over the centuries, it has been damaged by natural forces (earthquakes). The northern perimeter of the Colosseum remains intact with traces of 19th-century restoration. What remains of the Colosseum today is the original wall on which they were built.</p>
               <a className='readmore' href="https://en.wikipedia.org/wiki/Colosseum">read more...</a>
              
            </div>
          </div>

          <div class="d-md-flex post-entry-2 half mt-5">
            <a href="#" class="me-4 thumbnail order-2">
              <img src="img/North/rome/rome17.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="pe-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Use</h2>
              <h4>Today</h4>
              <br />

              <p className='lichsu'>The Colosseum is now a major tourist site in Rome with thousands of visitors to the arena each year, although entry fees for European citizens are partially subsidized and entry is free for European citizens. under 18 years old and over 65 years old. There is now a museum dedicated to Eros located on the upper level of the building's outer wall. Part of the floor has been resurfaced. Beneath the Colosseum, a network of underground passageways once used to move animals and gladiators to the ring opened in the summer of 2010.</p>
              <a className='readmore' href="https://en.wikipedia.org/wiki/Colosseum">read more...</a>
              
              
            </div>
          </div>

        </div>

      </div>
    </section>
    <hr />
    <br />
    <br />


    
   



  

   

 
  {/* <!-- End #main --> */}

    </main>
    </div>
  )
}

export default Rome
