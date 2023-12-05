import React, {useEffect} from 'react'
import './Style.css'
import aos from 'aos'
function Berlinwall() {
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
          <h2 data-aos="fade-up">The Berlin Wall</h2>
          <blockquote data-aos="fade-up" data-aos-delay="100">
            <p>(1961-1989)</p>
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
          <h5 class="ani">This article is about the wall that surrounded West Berlin during the Cold War. For the border that divided most of East and West Germany.</h5>
          <h6 className='ttl'>Download File PDF  <a download={'pdf/The_Berlin_Wall.pdf'} href="./pdf/The_Berlin_Wall.pdf"><i class="fa fa-download" aria-hidden="true"> Here</i></a></h6>
        </div>

        <div class="row content">
          <div class="col-md-6" data-aos="fade-right" data-aos-delay="100">
            <img src="img/West/berlinwall5.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-6 pt-4" data-aos="fade-left" data-aos-delay="100">
            <h3 class='ani'>The Berlin Wall: The Partitioning of Berlin.</h3>
            <h5 class="fst-italic">
            As World War II came to an end in 1945, a pair of Allied peace conferences at Yalta and Potsdam determined the fate of Germany’s territories. They split the defeated nation into four “allied occupation zones”: The eastern part of the country went to the Soviet Union, while the western part went to the United States, Great Britain and (eventually) France.
            <h5>
            Even though Berlin was located entirely within the Soviet part of the country (it sat about 100 miles from the border between the eastern and western occupation zones), the Yalta and Potsdam agreements split the city into similar sectors. The Soviets took the eastern half, while the other Allies took the western. This four-way occupation of Berlin began in June 1945.
            </h5>
            </h5>
          </div>
        </div>

        <div class="row content">
          <div class="col-md-6 order-1 order-md-2" data-aos="fade-left">
            <img src="img/West/berlinwall6.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-6" data-aos="fade-left" data-aos-delay="100">
            <h3 class='ani'>The Berlin Wall: 1961-1989</h3>
            <h5 class="fst-italic">
            The construction of the Berlin Wall did stop the flood of refugees from East to West, and it did defuse the crisis over Berlin. (Though he was not happy about it, President John F. Kennedy conceded that “a wall is a hell of a lot better than a war.”) Almost two years after the Berlin Wall was erected, John F. Kennedy delivered one of the most famous addresses of his presidency to a crowd of more than 120,000 gathered outside West Berlin's city hall, just steps from the Brandenburg Gate. Kennedy’s speech has been largely remembered for one particular phrase. “I am a Berliner.”
            </h5>
            <h5>
            In all, at least 171 people were killed trying to get over, under or around the Berlin Wall. Escape from East Germany was not impossible, however: From 1961 until the wall came down in 1989, more than 5,000 East Germans (including some 600 border guards) managed to cross the border by jumping out of windows adjacent to the wall, climbing over the barbed wire, flying in hot air balloons, crawling through the sewers and driving through unfortified parts of the wall at high speeds.
            </h5>
          </div>
        </div>

        <div class="row content">
          <div class="col-md-6" data-aos="fade-right">
            <img src="img/West/berlinwall4.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-md-6" data-aos="fade-left">
            <h3 class='ani'>The Berlin Wall: The Fall of the Wall</h3>
            <h5>On November 9, 1989, as the Cold War began to thaw across Eastern Europe, an East German Communist Party spokesman announced a series of new policies regarding border crossings. When pressed on when the changes would take place, he said “As far as I know... effective immediately, without delay.” East Berliners flocked to border checkpoints, some chanting “Tor auf!” (“Open the gate!”). Within hours, the guards were letting the crowds through, where West Berliners greeted them with flowers and champagne.

            More than 2 million people from East Berlin visited West Berlin that weekend to participate in a celebration that was, one journalist wrote, “the greatest street party in the history of the world.” People used hammers and picks to knock away chunks of the wall-they became known as “mauerspechte,” or “wall woodpeckers”—while cranes and bulldozers pulled down section after section. Soon the wall was gone and Berlin was united for the first time since 1945. “Only today,” one Berliner spray-painted on a piece of the wall, “is the war really over.”

            The reunification of East and West Germany was made official on October 3, 1990, almost one year after the fall of the Berlin Wall..</h5>
            
          </div>
        </div>

 

      </div>
    </section>
    </div>

    </div>
  )
}

export default Berlinwall
