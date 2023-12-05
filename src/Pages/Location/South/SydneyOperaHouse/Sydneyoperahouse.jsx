import React, { useEffect } from "react";
import './Sydneyoperahouse.css'
import AOS from "aos";
import 'aos/dist/aos.css';

function Sydneyoperahouse() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div className="syd">
       <div className="bgvideo">
            <video className="" muted loop playsInline autoPlay id="mybgvideo">
                <source src="./video/Sydneyoperahouse.mp4" type="video/mp4"/>
            </video>
        </div>
            <div class="sydtext">
             <h1>Sydney Opera House</h1>
             <p >Outstanding Universal Value</p>
            </div>
        
        <div className="maincontent ">
            <div class="container section-title" data-aos="fade-up">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Sydney Opera House</h2>
                        <p>One of the most iconic buildings in the world</p>
                        <h6 className='ttl'>Download File PDF  <a download={'pdf/Sydneyoperahouse.pdf'} href="./pdf/Sydneyoperahouse.pdf"><i class="fa fa-download" aria-hidden="true"> Here</i></a></h6>
                    </div>
                </div>
            </div>
            <div className="container bg-light" >
                <div class="row">
                    <div class="col-lg-12" data-aos="fade-up">
                        <div class="post-meta mt-4 ">About the Sydney Opera House</div>
                        <h2 class="mb-2 display-6">A masterpiece of architecture</h2>
                        <p>The Sydney Opera House is a multi-venue performing arts centre in Sydney, New South Wales, Australia. Located on the foreshore of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th-century architecture.</p>
                        <p>The Sydney Opera house comprises a complex of roofs shaped like billowing sails or huge shells that blend beautifully with its waterfront location. The gleaming harbor surrounds it on three sides and to its south, the palm-studded Royal Botanical Gardens border it. The structure encompasses studios, a concert hall, theatres, rehearsal rooms, reception rooms, a restaurant and a spectacular open-air forecourt overlooking the city and the harbor.</p>
                    </div>
                    <div className="col-lg-4 sydney-picture01" data-aos="fade-up" data-aos-delay="200">
                        <img src="./img/South/Sydney01.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 sydney-picture02"data-aos="fade-up" data-aos-delay="200">
                        <img src="./img/South/Sydney02.jpg" alt="" />
                    </div>
                    <div className="col-lg-4 sydney-picture03"data-aos="fade-up" data-aos-delay="200">
                        <img src="./img/South/Sydney03.jpg" alt="" />
                    </div>
            <div class="container" >
                <div class="row justify-content-between align-items-lg-center mt-5" data-aos="fade-up" data-aos-delay="300">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <div class="post-meta mt-4 ">History</div>
                        <h2 class="display-6 mb-4">Construction history</h2>
                        <p>Planning began in the late 1940s when Eugene Goossens, the Director of the New South Wales State Conservatorium of Music, lobbied for a suitable venue for large theatrical productions. The normal venue for such productions, the Sydney Town Hall, was not considered large enough.
                            An international design competition was launched by Cahill on 13 September 1955 and received 233 entries, representing architects from 32 countries.</p>
                        <p>The Sydney Opera House was designed by Danish Architect Jorn Utzon, after his design won a competition in 1957. This highly controversial project at the time came to define Australia. The Sydney Opera House is a modern expressionist design, with a series of large precast concrete "shells", each composed of sections of a sphere, forming the roofs of the structure, set on a monumental podium. The building covers 1.8 hectares of land and is 183 m long and 120 m wide at its widest point. It is supported on 588 concrete piers sunk as much as 25 m below sea level.</p>
                    </div>
                    <div class="col-lg-6">
                        <div class="row">
                            <div class="col-6 mt-1">
                                <img src="./img/South/Sydney04.jpg" alt="" class="img-fluid mb-4"/>
                            </div>
                            <div class="col-6 mt-5">
                                <img src="./img/South/Sydney05.jpg" alt="" class="img-fluid mb-4"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <p>The project was built in three stages. Stage I (1959-1963) consisted of building the upper podium. Stage II (1963-1967) saw the construction of the outer shells. Stage III (1967-1973) consisted of the interior design and construction.</p>          
                    </div>
                </div>
            </div>
            <div className="container" >
          <div class="row mb-5 mt-5">
            <div class="d-md-flex post-entry-2 half">
              <div class="me-4 thumbnail" data-aos="fade-up">
                <img src="./img/South/Sydney06.jpg" alt="" class="img-fluid"/>
              </div>
              <div class="ps-md-5 mt-4 mt-md-0" data-aos="fade-up">
                <div class="post-meta mt-4 ">Design and Construction</div>
                <h2 class="mb-2 display-6">Stage I: Podium</h2>                
                <p>Stage I commenced on 2 March 1959 with the construction firm Civil & Civic, monitored by the engineers Ove Arup and Partners. The government had pushed for work to begin early, fearing that funding, or public opinion, might turn against them. However, Utzon had still not completed the final designs. Major structural issues still remained unresolved. By 23 January 1961, work was running 47 weeks behind, mainly because of unexpected difficulties (inclement weather, unexpected difficulty diverting stormwater, construction beginning before proper construction drawings had been prepared, changes of original contract documents). Work on the podium was finally completed in February 1963. The forced early start led to significant later problems, not least of which was that the podium columns were not strong enough to support the roof structure, and had to be re-built.</p>
              </div>
            </div>
            <div class="d-md-flex post-entry-2 half mt-4">
              <div class="me-4 thumbnail order-2" data-aos="fade-up">
                <img src="./img/South/Sydney07.jpg" alt="" class="img-fluid"/>
              </div>
              <div class="pe-md-5 mt-4 mt-md-0" data-aos="fade-up">
                <div class="post-meta mt-4">Design and Construction</div>
                <h2 class="mb-4 display-6">Stage II: Roof</h2>
                <p>There was much debate around how to construct the shells that were designed to be a series of parabolas supported by precast-concrete ribs. Before finally finding a workable solution to constructing these shells, at least 12 iterations of the form of the shells were tested by the design team to finally have a successful outcome. To gain a better understanding of the complex forces to which the shells would be subjected, the design team used computers, which is noted as one of the earliest uses of computers in structural analysis.</p>
                <p>To build the roof, the contractors manufactured 2,400 precast ribs, 4,000 roof panels in an on-site factory, and developed the construction processes. The construction of the shells used an innovative adjustable steel-trussed arch to support the different roofs before completion.</p>
              </div>
            </div>
            <div class="d-md-flex post-entry-2 half mt-4">
              <div class="me-4 thumbnail" data-aos="fade-up">
                <img src="./img/South/Sydney08.jpg" alt="" class="img-fluid"/>
              </div>
              <div class="ps-md-5 mt-4 mt-md-0" data-aos="fade-up">
                <div class="post-meta mt-4 ">Design and Construction</div>
                <h2 class="mb-2 display-6">Stage III: Interiors</h2>
                <p>During the second stage of construction, Utzon resigned from the project and his role was principally taken over by Peter Hall, who became largely responsible for the interior design of the project. A few changes were made to the design after Utzon resigned. Firstly, the podium was originally intended to be left open, rather than mealled down. However, changes were made to the podium and the paving was added to ensure it was secure. Secondly, the glass walls were originally intended to be constructed using a system of prefabricated plywood mullions, but a different system was designed to deal with the glass. Furthermore, the major hall which was intended to be a multipurpose opera and concert hall became solely a concert hall. The minor hall, originally for stage purposes only, now included the use of an opera hall. Additionally, two more theaters were added to the design. Finally, Utzon’s original vision to include plywood corridor designs, and his acoustic and seating designs, were completely scrapped from the project.</p>                
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>          
      </div>
      </div>
  )
}

export default Sydneyoperahouse
