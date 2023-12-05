import React,{useState,useEffect} from 'react'
import './Nuthantudo.css'
import aos from 'aos';



function Nuthantudo() {
  
  useEffect(()=>{
    aos.init();
    aos.refresh();
  }, []);
  return (
    <div>
      <main id="main">

{/* <!-- ======= Hero Slider Section ======= --> */}
<section id="hero-slider" class="hero-slider">
  <div class="container-md" data-aos="fade-in">
    <div class="row">
      <div class="col-12">
        <div class="swiper sliderFeaturedPosts">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="img-bg d-flex align-items-end" style={{backgroundImage: "url(img/North/nuthantudo/banner.jpg)"}}>
                <div class="img-bg-inner">
                  <h2>Statue of Liberty</h2>
                  <p>The Statue of Liberty is recognized as a National Monument and listed on the United States National Register of Historic Places</p>
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
          <div><img src="img/North/nuthantudo/nuthantudo12.jpg" alt="" class="img-fluid"/></div>
          
          <h2><div>The Statue of Liberty</div></h2>
          <p className='vanban1'>The Statue of Liberty (full name Liberty Enlightening the World; English: Liberty Enlightening the World; French: La Liberté éclairant le monde) is a large-scale neoclassical bronze sculpture, located on the island Liberty in New York Harbor, New York City, USA. . Designed by French architect Frédéric Auguste Bartholdi, its metal frame was built by Gustave Eiffel and inaugurated on October 28, 1886. It was a gift from the French people to America.
          </p>
          <p className='vanban1'>The Statue of Liberty is recognized as a National Monument and inscribed on the National Register of Historic Places as the Statue of Liberty, Ellis Island and Liberty Island, first administered by the U.S. Lighthouse Service until 1901 and later by the U.S. War Department; since 1933 it has been managed by the National Park Service.</p>
          <div className='hinh1'><img src="img/North/nuthantudo/nuthantudo8.png" alt="" /></div>

          
        </div>

      </div>

      <div class="col-lg-8">
        <div class="row g-5">
          <div class="col-lg-4 border-start custom-border">
            <div class="post-entry-1">
              <img src="img/North/nuthantudo/nuthantudo13.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.statueofliberty.org/visit/">Visiting the Statue of Liberty</a></h2>
              <p>Visiting Ellis Island and the Statue of Liberty is an inspiring, striking experience. As dual symbols of freedom and hope, these incredible monuments and their museums give proof to the story of immigration and recognize the human spirit of our nation’s ideals.

              </p>
            </div>
            <div class="post-entry-1">
              <img src="img/North/nuthantudo/nuthantudo14.png" alt="" class="img-fluid"/>
              
              <h2><a href="https://vi.wikipedia.org/wiki/T%C6%B0%E1%BB%A3ng_N%E1%BB%AF_th%E1%BA%A7n_T%E1%BB%B1_do">Where is Statue of Liberty located?</a></h2>
              <p>Liberty Island location
                 Manhattan, New York City,
                  New York, USA
                 Coordinates 40°41′21″N 74°2′40″W</p>
            </div>
            <div class="post-entry-1">
              <img src="img/North/nuthantudo/nuthantudo14.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.nps.gov/stli/planyourvisit/index.htm">How to get to the Statue of Liberty</a></h2>
              <p>There are many ways for us to travel to visit the Statue of Liberty, you can use public transportation or go by plane if you live far away.</p>
            </div>
          </div>
          <div class="col-lg-4 border-start custom-border">
            <div class="post-entry-1">
              <img src="img/North/nuthantudo/nuthantudo15.jpg" alt="" class="img-fluid"/>         
              <h2><a href="https://www.statueofliberty.org/visit/">Things to do near Statue of Liberty</a></h2>
              <p>You can visit Ellis Island and Liberty Island, there will be many wonderful things waiting for you to explore.</p>
            </div>
            <div class="post-entry-1">
              <img src="img/North/nuthantudo/nuthantudo16.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://www.statueofliberty.org/visit/">What is the best way to see the Statue of Liberty?</a></h2>
              <p>The Statue of Liberty is open from 9am to 5pm daily, except holidays. You should spend at least 2-3 hours to visit the Statue of Liberty. This is also an opportunity for you to enjoy the beautiful landscape of the city from the base of the statue, take photos and check-in to preserve the moments when you arrive here. The best time to visit the observatory for the most breathtaking views of the Statue of Liberty is at sunset for this world-wide view.</p>

            </div>
            <div class="post-entry-1">
              <img src="img/North/nuthantudo/nuthantudo18.jpg" alt="" class="img-fluid"/>
              
              <h2><a href="https://nationalparkobsessed.com/things-to-know-before-visiting-the-statue-of-liberty/#:~:text=17%20Things%20to%20Know%20Before%20Visiting%20the%20Statue,prepared%20for%20airport-style%20security%20...%20C%C3%A1c%20m%E1%BB%A5c%20kh%C3%A1c">Tips and things you should know for your visit</a></h2>
            </div>
          </div>

          {/* <!-- Trending Section --> */}
          <div class="col-lg-4">

            <div class="trending">
              <h5>Here are some famous quotes about the Statue of Liberty:</h5>
              <br />
              <ul class="trending-post">
                <li>
                  <div>
                    
                    <h6>1.“The Statue of Liberty means everything. We take it for granted today. Remember that the Statue of Liberty represents what America is. We, as Democrats, must remind ourselves and remind the country of the great principles we stand for. This is a place of protection. This is not a nation of bullies. We are not an empire. We are the light. We are the Statue of Liberty.”</h6>
                    <span class="author">Jerry Springer</span>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h6>2.“The most powerful image in America today is really the Statue of Liberty.”</h6>
                    <span class="author">Frank Luntz</span>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h6>3.“I always had a strong feeling for the Statue of Liberty because it became the statue of my personal liberty.”</h6>
                    <span class="author">David Antin</span>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h6>4.“Give me your tired, your poor, your huddled masses yearning to breathe free.”  </h6>
                    <span class="author"> Emma Lazarus</span>
                  </div>
                </li>
                <br />
                <li>
                  <div>
                    
                    <h6>5.“The Statue of Liberty is really a profound symbol, I just wish she was a little gentler.”</h6>
                    <span class="author">Dov Davidoff</span>
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
            <h4 className='ttl'>Download File PDF  <a download={'pdf/StatueofLiberty.pdf'} href="./pdf/StatueofLiberty.pdf"><i class="fa fa-download" aria-hidden="true"> Here</i></a></h4>
          </div>
        </div>

        <div class="row mb-5">

          <div class="d-md-flex post-entry-2 half">
            <a href="#" class="me-4 thumbnail">
              <img src="img/North/nuthantudo/nuthantudo3.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="ps-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">History since its inauguration</h2>

              <p className='lichsu'>The statue quickly became a landmark of New York City. Many immigrants entering the United States passing through New York City see the statue as a sign welcoming them.</p>
              <p className='lichsu'>After the United States entered World War I in 1917, images of the statue were used extensively in posters promoting enlistment and advocating for the Bond of Freedom, urging U.S. citizens to financially support the war. This was appreciated by the public because the war was supposed to ensure freedom and served as a reminder that war-torn France had once given the United States the statue. </p>
              <p className='lichsu'>In 1924, President Calvin Coolidge used his authority under the Antiquities Act to declare the statue a national monument. </p>
              <a className='readmore' href="https://vi.wikipedia.org/wiki/T%C6%B0%E1%BB%A3ng_N%E1%BB%AF_th%E1%BA%A7n_T%E1%BB%B1_do">read more...</a>
              
            </div>
          </div>

          <div class="d-md-flex post-entry-2 half mt-5">
            <a href="#" class="me-4 thumbnail order-2">
              <img src="img/North/nuthantudo/nuthantudo19.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="pe-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Early years under the National Park Service (1933–1982)</h2>

              <p className='lichsu'>In 1933, President Franklin Roosevelt ordered the statue transferred to the National Park Service (NPS). In 1937, the Parks Department received authority to administer what remains on Bedloe Island.</p>
              <p className='lichsu'>During World War II, the statue remained open to visitors but was not lit at night because of wartime nighttime lights off (enemy pilots could easily find targets). The statue was briefly lit on December 31, 1943, and on D-Day, June 6, 1944, when the statue's lights flash "dot-dot-dot-brick", Morse code signifies the letter V meaning victory.</p>
              <p className='lichsu'>In 1976, a new powerful lighting system was installed ahead of the 200th anniversary of the United States. On July 4, 1976, the statue was the convergence point of Operation Sailing, a yacht race featuring tall sailboats from around the world entering New York harbor and running around Liberty Island. The race ended with a spectacular fireworks display near the statue. </p>
              <a className='readmore' href="https://vi.wikipedia.org/wiki/T%C6%B0%E1%BB%A3ng_N%E1%BB%AF_th%E1%BA%A7n_T%E1%BB%B1_do">read more...</a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <section class="mb-5 bg-light py-5">
      <div class="container" data-aos="fade-up">
        <div class="row justify-content-between align-items-lg-center">
          <div class="col-lg-5 mb-4 mb-lg-0">
            <h2 class="display-4 mb-4">Restoration to present (since 1982)</h2>
            <p className='lichsumoi'>In 1986, the statue was meticulously examined by a team of US and French engineers as part of a plan to celebrate the statue's 100th birthday. In 1982, it was announced that the statue needed significant restoration. Meticulous research revealed that the right arm was incorrectly attached to the main structure of the statue.</p>
            <p className='lichsumoi'>In May 1982, President Ronald Reagan announced the establishment of the Statue of Liberty - Ellis Island Centennial Committee led by Chrysler Corporation chairman Lee Iacocca to raise the necessary funds to complete the project restoration work.</p>
            <p className='lichsumoi'>July 3-6, 1986 was designated "Freedom Weekend", marking the 100th anniversary of the statue and its inauguration. President Reagan presided over the re-inauguration ceremony with the presence of French President François Mitterrand.</p>
            <a className='readmore' href="https://vi.wikipedia.org/wiki/T%C6%B0%E1%BB%A3ng_N%E1%BB%AF_th%E1%BA%A7n_T%E1%BB%B1_do">read more...</a>
            
            
          </div>
          <div class="col-lg-6">
            <div class="row">
              <div class="col-6">
                <img src="img/North/nuthantudo/nuthantudo20.jpg" alt="" class="img-fluid mb-4"/>
              </div>
              <div class="col-6 mt-4">
                <img src="img/North/nuthantudo/nuthantudo21.jpg" alt="" class="img-fluid mb-4"/>
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
            <h1 class="page-title">Travel and features of the statue</h1>
          </div>
        </div>

        <div class="row mb-5">

          <div class="d-md-flex post-entry-2 half">
            <a href="#" class="me-4 thumbnail">
              <img src="img/North/nuthantudo/nuthantudo22.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="ps-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Location and visit</h2>

              <p className='lichsu'>The statue is located in Upper New York Bay on Liberty Island, south of Ellis Island. Both islands were ceded by the state of New York to the federal government in 1800. Under the 1834 agreement between New York and New Jersey to establish a boundary near the middle of the bay, the original islands remained territory. of New York despite their location. on the New Jersey side of the front line. The artificial landfill at Ellis Island is a territory of New Jersey.</p>
              <p className='lichsu'>Entrance to the Statue of Liberty National Monument is free, but all visitors must pay a ferry crossing fee because private boats cannot dock on the island. In 2007, "Statue Cruises" was transferred the right to operate traffic and sell tickets for sightseeing facilities on the island, replacing "Circle Line" as a ferry service operating since 1953.</p>
              <p className='lichsu'>Those who want to use the stairs inside the statue to reach the crown must buy a special ticket. This ticket may have to be purchased up to 1 year in advance. In total, only about 240 people are allowed to go up to the crown each day: 10 people per group, 3 groups every hour. Those who go there may only be allowed to bring medication and cameras - there are lockers provided to store the rest - and must go through a second security check.</p>
              <p className='lichsu'>In 1984, the Statue of Liberty was declared a UNESCO World Heritage Site. In its "Declaration of Importance," UNESCO describes the statue as a "spiritual masterpiece of humanity" that "stands as a highly majestic symbol — inspiring contemplation, debate and struggle — for ideals such as freedom, peace, human rights, abolition, etc. democracy and opportunity." </p>
              <a className='readmore' href="https://vi.wikipedia.org/wiki/T%C6%B0%E1%BB%A3ng_N%E1%BB%AF_th%E1%BA%A7n_T%E1%BB%B1_do">read more...</a>
              
            </div>
          </div>

          <div class="d-md-flex post-entry-2 half mt-5">
            <a href="#" class="me-4 thumbnail order-2">
              <img src="img/North/nuthantudo/nuthantudo24.jpg" alt="" class="img-fluid"/>
            </a>
            <div class="pe-md-5 mt-4 mt-md-0">
              
              <h2 class="mb-4 display-4">Models, movies about the statue</h2>
              
              <br />

              <p className='lichsu'>Hundreds of models of the Statue of Liberty are displayed around the world. A smaller model, about one-fifth of the original statue's height, was donated to the city by the American community in Paris. It now stands on the Île aux Cygnes, facing west towards its older sister (the original statue in New York). A model of the 9.1-metre-tall (30 ft) statue on the roof of the Liberty Warehouse at 64th Street in Manhattan stood there for years; is now housed in the Brooklyn Museum. In a gesture of patriotism as part of the "Strengthen the Arms of Liberty" campaign in 1949–1952, the Boy Scouts of America donated about hundreds of bronze models of the Statue of Liberty, about 100 inches (2.5 meters) tall to states and municipalities throughout the United States. Although not a real model, the statue known as the Goddess of Democracy was temporarily erected during the 1989 Tiananmen Square protests that were similarly inspired by French democratic traditions, which were careful not to directly imitate the Statue of Liberty. In entertainment buildings in New York City, the replica of the statue is part of the landscape used to decorate the exterior at the New York-New York Hotel and Casino in Las Vegas, Nevada.</p>
              <p className='lichsu'>Many regional foundations and agencies have also used models or iconography of the statue. Between 1986 and 2000, New York State issued license plates featuring the statue. The National Women's Basketball Association's New York Liberty Team uses both the name and image of the statue on its emblem, with its flame stylized as a basketball. The New York Rangers of the United States National Hockey League featured the head on their jerseys beginning in 1997.</p>
              <a className='readmore' href="https://vi.wikipedia.org/wiki/T%C6%B0%E1%BB%A3ng_N%E1%BB%AF_th%E1%BA%A7n_T%E1%BB%B1_do">read more...</a>
             
              
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

export default Nuthantudo
