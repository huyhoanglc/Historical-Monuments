import React,{useEffect} from 'react'
import "./Style.css"
import aos from 'aos'
function Effiel() {
  useEffect(()=>{
    aos.init();
    aos.refresh();
  }, []);
  return (
    <div className='Linh'>
       <section id="heroLinh" class="heroLinh d-flex align-items-center">
    <div class="container">
      <div>
        <div >
          <h2 data-aos="fade-up">The Eiffel  Tower</h2>
          <blockquote data-aos="fade-up" data-aos-delay="100">
            <p>(1889)</p>
          </blockquote>

        </div>
        </div>
        </div>
            </section>
    <div >
      <section id="features" class="features" data-aos="fade-up">
      <div class="container">

        <div class="section-title">
          <h2 class="ani">Stories</h2>
          <h5 class="ani">This article is about the history, architecture and beauty of the Effiel Tower.</h5>
          <h6 className='ttl'>Download File PDF  <a download={'pdf/The_Eiffiel_Tower.pdf'} href="./pdf/The_Eiffiel_Tower.pdf"><i class="fa fa-download" aria-hidden="true"> Here</i></a></h6>
        </div>

        <div class="row content">
          <div class="col-md-6" data-aos="fade-right" data-aos-delay="100">
            <img src="img/West/effiel4.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-6" data-aos="fade-left" data-aos-delay="100">
            <h3 class='ani'>The Design of the Eiffel Tower.</h3>
            <h5 class="fst-italic">
            The plan to build a tower 300 metres high was conceived as part of preparations for the World's Fair of 1889.
            <h5>
            The wager was to "study the possibility of erecting an iron tower on the Champ-de-Mars with a square base, 125 metres across and 300 metres tall". Selected from among 107 projects, it was that of Gustave Eiffel, an entrepreneur, Maurice Koechlin and Emile Nouguier, both engineers, and Stephen Sauvestre, an architect, that was accepted.

            Emile Nouguier and Maurice Koechlin, the two chief engineers in Eiffel's company, had the idea for a very tall tower in June 1884. It was to be designed like a large pylon with four columns of lattice work girders, separated at the base and coming together at the top, and joined to each other by more metal girders at regular intervals.

            The tower project was a bold extension of this principle up to a height of 300 metres - equivalent to the symbolic figure of 1000 feet. On September 18 1884 Eiffel registered a patent "for a new configuration allowing the construction of metal supports and pylons capable of exceeding a height of 300 metres".
            </h5>
            </h5>
          </div>
        </div>

        <div class="row content">
          <div class="col-md-6 order-1 order-md-2" data-aos="fade-left">
            <img src="img/West/effiel5.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-6" data-aos="fade-left" data-aos-delay="100">
            <h3 class='ani'>The Eiffel Tower at a glance</h3>
            <h5 class="fst-italic">
            Its construction in 2 years, 2 months and 5 days was a veritable technical and architectural achievement. "Utopia achieved", a symbol of technological prowess, at the end of the 19th Century it was a demonstration of French engineering personified by Gustave Eiffel, and a defining moment of the industrial era. It was met immediately with tremendous success.

            Only intended to last 20 years, it was saved by the scientific experiments that Eiffel encouraged, and in particular by the first radio transmissions, followed by telecommunications. For example, the radio signals from the Pantheon Tower in 1898; it served as a military radio post in 1903; it transmitted the first public radio programme in 1925, and then broadcast television up to TNT more recently.
            </h5>
            <h5>
            Like all towers, it allows us to see and to be seen, with a spectacular ascent, a unique panoramic view of Paris, and a glittering beacon in the skies of the Capital.

            The Tower also represents the magic of light. Its lighting, its sparkling lights, and its beacon shine and inspire dreams every evening.
            </h5>
          </div>
        </div>

        <div class="row content">
          <div class="col-md-6" data-aos="fade-right">
            <img src="img/West/effiel6.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-6 pt-5" data-aos="fade-left">
            <h3 class='ani'>The Eiffel Tower : The most visited monument in the world</h3>
            <h5>The most visited monument in the world
            As France's symbol in the world, and the showcase of Paris, today it welcomes almost 7 million visitors a year (around 75% of whom are foreigners), making it the most visited monument that you have to pay for in the world.

            A universal Tower of Babel, almost 300 million visitors regardless of age or origin have come from all over the planet to see it since its opening in 1889
            Since the 1980s, the monument has regularly been renovated, restored and adapted for an ever-growing public.

            Over the decades, the Eiffel Tower has seen remarkable achievements, extraordinary light shows, and prestigious visitors. A mythical and audacious site, it has always inspired artists and challenges....</h5>
            
          </div>
        </div>

 

      </div>
    </section>
    </div>

    </div>
  )
}

export default Effiel
