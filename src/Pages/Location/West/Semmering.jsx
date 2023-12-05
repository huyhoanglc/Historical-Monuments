import React, {useEffect} from 'react'
import './Style.css'
import aos from 'aos'
function Semmering() {
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
          <h2 data-aos="fade-up">Semmering Railway</h2>
          <blockquote data-aos="fade-up" data-aos-delay="100">
            <p>(1854)</p>
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
          <h5 class="ani">This article is about the general introduction of the Semmering Railway .</h5>
          <h6 className='ttl'>Download File PDF  <a download={'pdf/The_Semmering_Railway.pdf'} href="./pdf/The_Semmering_Railway.pdf"><i class="fa fa-download" aria-hidden="true"> Here</i></a></h6>
        </div>

        <div class="row content">
          <div class="col-md-6" data-aos="fade-right" data-aos-delay="100">
            <img src="img/West/semmering2.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-6 pt-5" data-aos="fade-left" data-aos-delay="100">
            <h3 class='ani'>Semmering Railway.</h3>
            <h5 class="fst-italic">
            The Semmering Railway, constructed between 1848 and 1854 over 41 km of high mountains, is one of the greatest feats of civil engineering during the pioneering phase of railway building. Set against a spectacular mountain landscape, the railway line remains in use today thanks to the quality of its tunnels, viaducts, and other works, and has led to the construction of many recreational buildings along its tracks.

            The property Semmering Railway begins at Gloggnitz station, at an altitude of 436 m, reaches its highest point after 29 km over the pass at 895 m above sea level, and ends 12 km further away at the Mürzzuschlag station, 677 m above sea level.

           
            </h5>
          </div>
        </div>

        <div class="row content">
          <div class="col-md-6 order-1 order-md-2" data-aos="fade-left">
            <img src="img/West/semmering3.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-6 pt-3" data-aos="fade-left" data-aos-delay="100">
            <h3 class='ani'>Semmering Railway: Outstanding Universal Value</h3>
            <h5 class="fst-italic">
            The line can be divided into four sections. The first runs from Gloggnitz to Payerbach stations, following the left-hand slopes of the Schwarza valley; the next section crosses the valley by taking the Schwarza viaduct to reach Eichberg Station, and the third section enters the Auerbach valley to continue through dense forest to Klamm-Schottwien station. After passing through the Klamm Tunnel, it reaches the Adlitzgraben and the Alpine terrain itself. After a series of tunnels and viaducts, the trains pass through the Weinzettelwand, the Krauselklause, and the Polleroswand, taking several tunnel sections. In the last and most dramatic section of the whole route, the two-storey curving viaduct goes over the Kalte Rinne, and after passing through the Wolfsberg and the Kartnerkogels, the train passes through the 1,431 m Semmering Tunnel before reaching Semmering station. It then descends gradually along the right-hand slope of the Roschnitz valley, through Stienhaus and Spital am Semmering, before arriving at Mürzzuschlag.
            </h5>
          </div>
        </div>

        <div class="row content">
          <div class="col-md-6" data-aos="fade-right">
            <img src="img/West/semmering5.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-6" data-aos="fade-left">
            <h3 class='ani'>Semmering Railway : Overview</h3>
            <h5>In total, the fourteen tunnels are 1,477 m long, nearly one-tenth of the entire line; coincidentally, the sixteen major viaducts also total 1,477 m in length. There are 118 smaller arched stone bridges and 11 iron bridges. Most of the portals of the tunnels are simple but monumental in design, and feature various kinds of ornamentations. Support structures are largely in stone, but brick was used for the arches of the viaducts and tunnel facings. The 57 two-storey attendants' houses, located at approximately 700 m intervals, are a very characteristic feature of the Semmering line and were built from coursed rubble masonry with brick trimmings. Little remains of the original stations, which were planned as no more than relay stations and watering points, but later became converted into more impressive structures as tourist traffic increased.

            The appearance of the whole line changed significantly between 1957 and 1959, when electrical poles were erected to carry the contact wires required by electrical locomotives. The Semmering pass itself is well known for the 'summer architecture' of the villas and hotels, as it became one of the first purpose-built Alpine resorts in the decades following the opening of the railway line.</h5>
            
          </div>
        </div>

 

      </div>
    </section>
    </div>
    </div>
  )
}

export default Semmering
