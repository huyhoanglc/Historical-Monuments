import React,{useState,useEffect} from 'react'
import './Truongthanh.css'
import aos from 'aos';

function Truongthanh() {
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
    <div className='Quan'>
      {/* Header-Nav */}
      <div className='Header-nav'>    
      <nav class={navbar ? "navbar fixed-top navbar-expand-lg navbar-dark  navbar-scrolled" : "navbar  navbar-expand-lg navbar-dark bg-black" }>
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
              <div class="img-bg d-flex align-items-end" style={{backgroundImage: "url(img/North/truongthanh/banner.jpg)"}}>
                <div class="img-bg-inner">
                  <h2>The Great Wall</h2>
                  <p>The Great Wall, a majestic historical landmark, witnesses to the outstanding development of human civilization.

                  </p>
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
          <div><img src="img/North/truongthanh/truongthanh2.jpg" alt="" class="img-fluid"/></div>
          
          <h2><div>The Great Wall</div></h2>
          <p className='vanban1'>The Great Wall of China (traditional Chinese: 萬里長城; simplified Chinese: 万里长城; pinyin: Wànlǐ Chángchéng, literally "ten thousand li long wall") is a series of fortifications that were built across the historical northern borders of ancient Chinese states and Imperial China as protection against various nomadic groups from the Eurasian Steppe. Several walls were built from as early as the 7th century BC, with selective stretches later joined by Qin Shi Huang (220–206 BC), the first emperor of China. Little of the Qin wall remains. Later on, many successive dynasties built and maintained multiple stretches of border walls. The best-known sections of the wall were built by the Ming dynasty (1368–1644).
          </p>
          <p className='vanban1'>
          Apart from defense, other purposes of the Great Wall have included border controls, allowing the imposition of duties on goods transported along the Silk Road, regulation or encouragement of trade and the control of immigration and emigration. Furthermore, the defensive characteristics of the Great Wall were enhanced by the construction of watchtowers, troop barracks, garrison stations, signaling through capabilities the means of smoke or fire, and the fact that the path of the Great Wall also served as a transportation corridor.
          </p>
          <p className='vanban1'>The frontier walls built by different dynasties have multiple courses. Collectively, they stretch from Liaodong in the east to Lop Lake in the west, from the present-day Sino–Russian border in the north to Tao River (Taohe) in the south; along an arc that roughly delineates the edge of the Mongolian steppe; spanning 21,196.18 km (13,170.70 mi) in total. Today, the defensive system of the Great Wall is generally recognized as one of the most impressive architectural feats in history.</p>
          

          
        </div>

      </div>

      <div class="col-lg-8">
        <div class="row g-5">
          <div class="col-lg-4 border-start custom-border">
            <div class="post-entry-1">
              <img src="img/North/truongthanh/truongthanh3.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.chinahighlights.com/greatwall/how-to-visit.htm">Visiting The Great Wall</a></h2>
              <p>The Great Wall is an ideal destination to help you have wonderful experiences and learn more about the unique cultural features of China.

              </p>
            </div>
            <div class="post-entry-1">
              <img src="img/North/truongthanh/truongthanh4.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.travelchinaguide.com/where-is-great-wall-of-china-located.htm">Where is The Great Wall located?</a></h2>
              <p>Great Wall of China location is mainly in northern China, and there are a few sections in southern China called southern Great Wall. The vast majority of the Great Wall we see today was built in Ming Dynasty (1368 - 1644); they are mostly preserved in Beijing.</p>
              
            </div>
            <div class="post-entry-1">
              <img src="img/North/truongthanh/truongthanh5.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.chinahighlights.com/greatwall/how-to-visit.htm">How to get to The Great Wall</a></h2>
              <p>There are many ways for us to travel to visit the Great Wall. You can use public transportation (e.g. bus, taxi, speedboat) or travel by plane if you live far away.</p>
            </div>
          </div>
          <div class="col-lg-4 border-start custom-border">
            <div class="post-entry-1">
              <img src="img/North/truongthanh/truongthanh6.jpg" alt="" class="img-fluid"/>         
              <h2><a href="https://www.chinahighlights.com/greatwall/things-to-do.htm">Things to do at the Great Wall</a></h2>
              <p>There are many interesting things to do when visiting the Great Wall of China waiting for you.</p>
            </div>
            <div class="post-entry-1">
              <img src="img/North/truongthanh/truongthanh7.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.chinahighlights.com/greatwall/how-to-visit.htm">What is the best time to go to the Great Wall?</a></h2>
              <p>The best time to visit the Great Wall (surrounding Beijing) is spring and fall to avoid summer heat and crowds, and winter freezing conditions.</p>

            </div>
            <div class="post-entry-1">
              <img src="img/North/truongthanh/truongthanh8.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.chinahighlights.com/greatwall/how-to-visit.htm">Tips and things you should know for your visit</a></h2>
              <p>You should consult carefully before making the trip to have the best experience</p>
            </div>
          </div>

          {/* <!-- Trending Section --> */}
          <div class="col-lg-4">

            <div class="trending">
              <h4>Here are some famous quotes about the Great Wall:</h4>
              <br />
              <ul class="trending-post">
                <li>
                  <div>
                    
                    <h5>1."Heroes overcome, like Mao reaching the Great Wall."</h5>
                    
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h5>2."China will never fail, the Great Wall will never collapse."</h5>
                    
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h5>3."One of my challenges is trying to take pictures of the Great Wall. And I really took some pictures, but it’s hard to recognize the wall with the naked eye."</h5>
                    
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h5>4."We stand firm, the Great Wall lies in everyone’s heart."  </h5>
                    
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h5>5."No pain no gain - like building the Great Wall."</h5>
                    
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h5>6."Great perseverance - like the bricks that have endured the Great Wall."</h5>
                    
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
            <div class="me-4 thumbnail">
              <img src="img/North/truongthanh/truongthanh9.jpg" alt="" class="img-fluid"/>
            </div>
            <div class="ps-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Early walls</h2>

              <p className='lichsu'>The Chinese were familiar with wall-building techniques during the Spring and Autumn Period between the 8th and 5th centuries BC. During this and the following Warring States period, the states of Qin, Wei, Zhao, Qi, Han, Yan, and Zhongshan all built extensive fortifications to protect their borders. Built to withstand attacks from small arms such as swords and spears, these walls were made primarily of stone or by stamping earth and gravel between planks.</p>
              
              <p className='lichsu'>Transporting the large quantity of materials required for construction was difficult, so builders always tried to use local resources. Stones from the mountains were used over mountain ranges, while rammed earth was used for construction in the plains. There are no surviving historical records indicating the exact length and course of the Qin walls. Most of the ancient walls have eroded away over the centuries, and very few sections remain today. The human cost of the construction is unknown, but it has been estimated by some authors that hundreds of thousands of workers died building the Qin wall. Later, the Han, the Northern dynasties and the Sui all repaired, rebuilt, or expanded sections of the Great Wall at great cost to defend themselves against northern invaders. The Tang and Song dynasties did not undertake any significant effort in the region. Dynasties founded by non-Han ethnic groups also built their border walls: the Xianbei-ruled Northern Wei, the Khitan-ruled Liao, Jurchen-led Jin and the Tangut-established Western Xia, who ruled vast territories over Northern China throughout centuries, all constructed defensive walls but those were located much to the north of the other Great Walls as we know it, within China's autonomous region of Inner Mongolia and in modern-day Mongolia itself.</p>
              <a className='readmore' href="https://en.wikipedia.org/wiki/Great_Wall_of_China">read more...</a>
              
            </div>
          </div>

          <div class="d-md-flex post-entry-2 half mt-5">
            <div class="me-4 thumbnail order-2">
              <img src="img/North/truongthanh/truongthanh10.jpg" alt="" class="img-fluid"/>
              <p>The Great Wall of China in 1907</p>
              <img src="img/North/truongthanh/truongthanh11.jpg" alt="" class="img-fluid"/>
              <p>Part of the Great Wall of China (April 1853)</p>
            </div>
            
            <div class="pe-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Characteristics</h2>

              <p className='lichsu'>Before the use of bricks, the Great Wall was mainly built from rammed earth, stones, and wood. During the Ming, however, bricks were heavily used in many areas of the wall, as were materials such as tiles, lime, and stone. The size and weight of the bricks make them easier to work with than earth and stone, so construction quickened. Additionally, bricks could bear more weight and endure better than rammed earth. Stone can hold under its own weight better than brick, but is more difficult to use. Consequently, stones cut into rectangular shapes were used for the foundation, inner and outer brims, and gateways of the wall. Battlements line the uppermost portion of the vast majority of the wall, with defensive gaps a little over 30 cm (12 in) tall, and about 23 cm (9.1 in) wide. From the parapets, guards could survey the surrounding land.</p>
              <p className='lichsu'>Sticky rice mortar, consisting of sticky rice soup mixed with flaked lime, was extensively used to hold bricks together; no human bones or body parts were ever incorporated into the mortar or any part of the wall, contrary to what a legend states. Communication between the army units along the length of the Great Wall, including the ability to call reinforcements and warn garrisons of enemy movements, was of high importance. Signal towers were built upon hill tops or other high points along the wall for their visibility. Wooden gates can be used as a trap against those going through. Barracks, stables, and armories were built near the wall's inner surface.</p>
              
              <a className='readmore' href="https://en.wikipedia.org/wiki/Great_Wall_of_China">read more...</a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section class="mb-5 bg-light py-5">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-between align-items-lg-center">
          <div class="col-lg-5 mb-4 mb-lg-0">
            <h2 class="display-4 mb-4">Condition</h2>
            <p className='lichsumoi'>While portions north of Beijing and near tourist centers have been preserved and even extensively renovated, in many other locations the wall is in disrepair. The wall sometimes provides a source of stones to build houses and roads. Sections of the wall are also prone to graffiti and vandalism, while inscribed bricks were pilfered and sold on the market for up to 50 renminbi. Parts have been destroyed to make way for construction or mining.</p>
            <p className='lichsumoi'>A 2012 report by the National Cultural Heritage Administration states that 22% of the Ming Great Wall has disappeared, while 1,961 km (1,219 mi) of the wall have disappeared. In 2007 it was estimated that more than 60 km (37 mi) of the wall in Gansu province may disappear in the next 20 years, due to erosion from sandstorms. In some places, the height of the wall has been reduced from more than 5 m (16 ft 5 in) to less than 2 m (6 ft 7 in). Various square lookout towers that characterize the most famous images of the wall have disappeared. Many western sections of the wall are constructed from mud, rather than brick and stone, and thus are more susceptible to erosion. In 2014 a portion of the wall near the border of Liaoning and Hebei province was repaired with concrete. The work has been much criticized.</p>
            <p className='lichsumoi'></p>
            <a className='readmore' href="https://en.wikipedia.org/wiki/Great_Wall_of_China">read more...</a>
            
            
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-6">
                <img src="img/North/truongthanh/truongthanh13.jpg" alt="" class="img-fluid mb-4"/>
              </div>
              <div class="col-6 mt-4">
                <img src="img/North/truongthanh/truongthanh14.jpg" alt="" class="img-fluid mb-4"/>
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
            <h1 class="page-title">Visibility from space</h1>
          </div>
        </div>

        <div class="row mb-5">

          <div class="d-md-flex post-entry-2 half">
            <div class="me-4 thumbnail">
              <img src="img/North/truongthanh/truongthanh15.jpg" alt="" class="img-fluid"/>
            </div>
            <div class="ps-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">From the Moon</h2>

              <p className='lichsu'>The Great Wall of China cannot be seen by the naked human eye from the Moon. Even though the myth is thoroughly debunked, it is still ingrained in popular culture. The apparent width of the Great Wall from the Moon would be the same as that of a human hair viewed from 3 km (2 mi) away.</p>
              
              <p className='lichsu'>One of the earliest known references to the myth that the Great Wall can be seen from the moon appears in a letter written in 1754 by the English antiquary William Stukeley. Stukeley wrote that, "This mighty wall [Hadrian's wall] of four score miles [130 km] in length is only exceeded by the Chinese Wall, which makes a considerable figure upon the terrestrial globe, and may be discerned at the Moon." The claim was also mentioned by Henry Norman in 1895 where he states "besides its age it enjoys the reputation of being the only work of human hands on the globe visible from the Moon." The issue of "canals" on Mars was prominent in the late 19th century and may have led to the belief that long, thin objects were visible from space. The claim that the Great Wall is visible from the moon also appears in 1932's Ripley's Believe It or Not! strip. strip.</p>
              <a className='readmore' href="https://en.wikipedia.org/wiki/Great_Wall_of_China">read more...</a>
              
            </div>
          </div>

          <div class="d-md-flex post-entry-2 half mt-5">
            <div class="me-4 thumbnail order-2">
              <img src="img/North/truongthanh/truongthanh16.jpg" alt="" class="img-fluid"/>
              <p>Identical satellite images of a section of the Great Wall in northern Shanxi, running diagonally from lower left to upper right and not to be confused with the more prominent river running from upper left to lower right. In the image on the right, the Great Wall has been outlined in red. The region pictured is 12 km × 12 km (7 mi × 7 mi).</p>
            </div>
            <div class="pe-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">From low Earth orbit</h2>
              
              <br />

              <p className='lichsu'>Veteran US astronaut Gene Cernan has stated: "At Earth orbit of 100 to 200 miles [160 to 320 km] high, the Great Wall of China is, indeed, visible to the naked eye." Ed Lu, Expedition 7 Science Officer aboard the International Space Station, adds that, "It's less visible than a lot of other objects. And you have to know where to look."</p>
              <p className='lichsu'>In October 2003, Chinese astronaut Yang Liwei stated that he had not been able to see the Great Wall of China. In response, the European Space Agency (ESA) issued a press release reporting that from an orbit between 160 and 320 km (100 and 200 mi), the Great Wall is visible to the naked eye. The image was actually a river in Beijing.</p>
              <a className='readmore' href="https://en.wikipedia.org/wiki/Great_Wall_of_China">read more...</a>
              
              
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

export default Truongthanh
