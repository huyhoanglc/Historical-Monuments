import React , {useState} from 'react'
import './HimejiCastle.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


function HimejiCastle() {
  
  AOS.init();
  return (
    <div className='Hime'> 
      <div className='Castle-container'>
       <div className="Castle">      
    <div className="container">
      <div className="row">
      <p className='TieuDeVanBan'>Himeji Castle</p>
      </div>
      <div className="row text-center">
      <h4 className='ttl'>Download File PDF  <a download={'pdf/Himeji_Castle.pdf'} href="./pdf/Himeji_Castle.pdf"><i class="fa fa-download" aria-hidden="true"> Here</i></a></h4>
      </div>
    </div>
    
        <div className="Castle1"> 
        
          <div className="tieude1">
              <img className='hinh1' data-aos="zoom-in-down" src="img/East/HimejiCastleBanner2.jpg" alt='HimejiCastle' />
          </div>
          <div className="noidung1" data-aos="fade-left">
            
              <p className='vanban1'>
              Himeji Castle is a hilltop Japanese castle complex situated in Himeji, a city in the Hyōgo Prefecture of Japan. The castle is regarded as the finest surviving example of prototypical Japanese castle architecture, comprising a network of 83 rooms with advanced defensive systems from the feudal period. The castle is frequently known as Hakuro-jō or Shirasagi-jō ("White Egret Castle" or "White Heron Castle") because of its brilliant white exterior and supposed resemblance to a bird taking flight.
              </p>
              <p className='vanban2'>
              Himeji Castle dates to 1333 when Akamatsu Norimura built a fort on top of Himeyama hill. The fort was dismantled and rebuilt as Himeyama Castle in 1346 and then remodeled into Himeji Castle two centuries later. Himeji Castle was then significantly remodeled in 1581 by Toyotomi Hideyoshi, who added a three-story castle keep. In 1600, Tokugawa Ieyasu awarded the castle to Ikeda Terumasa for his help in the Battle of Sekigahara, and Ikeda completely rebuilt the castle from 1601 to 1609, expanding it into a large castle complex. Several buildings were later added to the castle complex by Honda Tadamasa from 1617 to 1618.  For almost 700 years, Himeji Castle has remained intact, even throughout the bombing of Himeji in World War II, and natural disasters including the 1995 Great Hanshin earthquake. 
              </p>
          </div>
        </div>
        <div className="Castle2">
          <div className="noidung2" data-aos="fade-right">
            <p className='vanban3'>
            Himeji Castle is the largest and most visited castle in Japan, and it was registered in 1993 as one of the first UNESCO World Heritage Sites in the country. The area within the middle moat of the castle complex is a designated Special Historic Site and five structures of the castle are also designated National Treasures. Along with Matsumoto Castle and Kumamoto Castle, Himeji Castle is considered one of Japan's three premier castles. In order to preserve the castle buildings, it underwent restoration work for several years and reopened to the public on March 27, 2015. The works also removed decades of dirt and grime, restoring the formerly grey roof to its original brilliant white color.
            </p>
          </div>
        </div>
       </div>

     

      <div className="thietkexaydung">
        <div className="tieude2" data-aos="fade-right">
          <p className='tentieude' >Design and build</p>
          <p className='tentieude1' data-aos="fade-right">Source</p>
        </div>
        <div className="noidung3" data-aos="zoom-in-up">
          <p className='vanban4'>
          Himeji Castle's construction dates to 1333, when a fort was constructed on Himeyama hill by Akamatsu Norimura, the ruler of the ancient Harima Province. In 1346, his son Sadanori demolished this fort and built Himeyama Castle in its place. In 1545, the Kuroda clan was stationed here by order of the Kodera clan, and feudal ruler Kuroda Shigetaka remodeled the castle into Himeji Castle, completing the work in 1561. In 1580, Kuroda Yoshitaka presented the castle to Toyotomi Hideyoshi, and in 1581 Hideyoshi significantly remodeled the castle, building a three-story keep with an area of about 55 m2 (590 sq ft).
          </p>
        </div>
        <div className="noidung4">
          <img className="img-fluid" data-aos="zoom-in-down" src="img/East/HimejiCastle4.jpg" alt="" />
          <p className='vanban5' data-aos="fade-left">
         Following the Battle of Sekigahara in 1600, Tokugawa Ieyasu granted Himeji Castle to his son-in-law, Ikeda Terumasa, as a reward for his help in battle. Ikeda demolished the three-story keep that had been created by Hideyoshi, and completely rebuilt and expanded the castle from 1601 to 1609, adding three moats and transforming it into the castle complex that is seen today. The expenditure of labor involved in this expansion is believed to have totaled 2.5 million man-days. Ikeda died in 1613, passing the castle to his son, who also died three years later. In 1617, Honda Tadamasa and his family inherited the castle, and Honda added several buildings to the castle complex, including a special tower for his daughter-in-law, Princess Sen (千姫, Senhime) called keshō yagura (Dressing Tower). In the Meiji Period (1868–1912), many Japanese castles were destroyed. Himeji Castle was abandoned in 1871 and some of the castle corridors and gates were destroyed to make room for Japanese army barracks. The entirety of the castle complex was slated to be demolished by government policy, but it was spared by the efforts of Nakamura Shigeto, an army colonel. A stone monument honoring Nakamura was placed in the castle complex within the first gate, the Hishi Gate (菱の門, Hishinomon).
          </p>
        </div>
        <div className="noidung5">  
          <p className='vanban6' data-aos="fade-right">
          Himeji was heavily bombed in 1945, at the end of World War II, and although most of the surrounding area was burned to the ground, the castle survived intact. One firebomb was dropped on the top floor of the castle but failed to explode. In order to preserve the castle complex, substantial repair work was undertaken starting in 1956, with a labor expenditure of 250,000 man-days and a cost of 550 million yen. In January 1995, the city of Himeji was substantially damaged by the Great Hanshin earthquake, but Himeji Castle again survived virtually undamaged, demonstrating remarkable earthquake resistance. Even the bottle of sake placed on the altar at the top floor of the keep remained in place.
          </p>
          <img className='hinh3' data-aos="zoom-in-down" src="img/East/Extra/JapanCastle3.jpg" alt="" />
        </div>
        <div className="tieude3">
          <p className='tentieude2' data-aos="fade-right">Designs, models and icons</p>
        </div>
        <div className="noidung6">
          <img className='img-fluid' data-aos="zoom-in-down" src="img/East/HimejiCastleVertical.jpg" alt="" />
          <p className='vanban7' data-aos="fade-right" >
          
          Himeji Castle is the largest castle in Japan. It serves as an excellent example of prototypical Japanese castle architecture, containing many of the defensive and architectural features associated with Japanese castles. The curved walls of Himeji Castle are sometimes said to resemble giant fans, but the principal materials used in the structures are stone and wood. Feudal family crests  are installed throughout the architecture of the building, signifying the various lords that inhabited the castle throughout its history.
          
          The Himeji Castle complex is located in the centre of Himeji, Hyōgo on top of a hill called Himeyama, which is 45.6 m (150 ft) above sea level. The castle complex comprises a network of 83 buildings such as storehouses, gates, corridors, and turrets. Of these 83 buildings, 74 are designated as Important Cultural Assets: 11 corridors, 16 turrets, 15 gates, and 32 earthen walls. The highest walls in the castle complex have a height of 26 m (85 ft).
          The main keep  at the center of the complex is 46.4 m (152 ft) high, standing 92 m (302 ft) above sea level. Together with the main keep, three smaller subsidiary keeps  form a cluster of towers. Externally, the keep appears to have five floors, because the second and third floors from the top appear to be a single floor; however, it actually has six floors and a basement. The basement of the main keep has an area of 385 m2 (4,140 sq ft), and its interior contains special facilities that are not seen in other castles, including lavatories, a drain board, and a kitchen corridor.

          The first floor of the main keep has an area of 554 m2 (5,960 sq ft) and is often called the "thousand-mat room" because it has over 330 Tatami mats. The walls of the first floor have weapon racks for holding matchlocks and spears, and at one point, the castle contained as many as 280 guns and 90 spears. The second floor has an area of roughly 550 m2 (5,900 sq ft).
          The third floor has an area of 440 m2 (4,700 sq ft) and the fourth floor has an area of 240 m2 (2,600 sq ft). Both the third and fourth floors have platforms situated at the north and south windows called "stone-throwing platforms", where defenders could observe or throw objects at attackers. They also have small enclosed rooms called "warrior hiding places", where defenders could hide themselves and kill attackers by surprise as they entered the keep. The final floor, the sixth floor, has an area of only 115 m2 (1,240 sq ft). The sixth floor windows now have iron bars in place, but in the feudal period the panoramic view from the windows was unobstructed.

          </p>
        </div>
        <div className="tieude4">
          <p className='tentieude3' data-aos="fade-right">Historical recognition</p>
        </div>
        <div className="noidung7">  
          <p className='vanban8' data-aos="fade-right">
          Himeji Castle was registered on 11 December 1993 as one of the first UNESCO World Heritage Sites in Japan. Five structures of the castle are also designated National Treasures: The main keep (大天守, daitenshu), northwest small keep (乾小天守, inui kotenshu), west small keep (西小天守, nishi kotenshu), east small keep (東小天守, higashi kotenshu), and I, Ro, Ha, Ni-corridors and kitchen (イ, ロ, ハ, ニの渡櫓附台所1棟, i, ro, ha, ni no watariyagura tsuketari daidokoro 1 to). The area within the middle moat of the castle complex is a designated Special Historic Site.

          Along with Matsumoto Castle and Kumamoto Castle, Himeji Castle is considered one of Japan's three premier castles. It is the most visited castle in Japan, receiving over 2,860,000 visitors in 2015. Starting in April 2010, Himeji Castle underwent restoration work to preserve the castle buildings, and reopened to the public on March 27, 2015.
          </p>
          <img className='img-fluid' data-aos="zoom-in-down" src="img/East/Extra/JapanCastle4.jpg" alt="" />
        </div>
      </div>

      {/* lichsuhinhthanh */}


      {/* sadasdsdsadasda */}

      

    


     </div>
    </div>
    
  )
}

export default HimejiCastle
