import React,{useState} from 'react';
import './East.css';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function East() {
  
  // Khởi tạo AOS
  AOS.init();
   
  return (
   
    <div class="East-container" id='East'>       
      <Carousel>
        <Carousel.Item>
          <div className="banner">
            <img className="banner1" src="./img/East/HimejiCastleBanner.jpg" alt="Himeji Castle" />
            <div className='textbanner'>
              Himeji Castle
              
            </div>
            <div className='textbanner1'>
              
              Discover the iconic Himeji Castle <br />
              
              <Link to='/HimejiCastle'>
                <button type="button" className="btn btn-outline-light">
                  Discover Now
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="banner">
            <img className="banner1" src="img/East/GyeongbokgungBanner2.jpg" alt="Gyeongbokgung Palace" />
            <div className='textbanner'>
              
            Gyeongbokgung Palace
            </div>
            <div className='textbanner1'>
              Discover the iconic Gyeongbokgung Palace <br />
              <Link to='/Gyeongbokgung'>
                <button type="button" className="btn btn-outline-light">
                  Discover Now
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="banner">
            <img className="banner1" src="img/East/KinkakuJiBanner1.jpg" alt="Kinkaku-ji" />
            <div className='textbanner'>
              Kinkaku-ji Temple
            </div>
            <div className='textbanner1'>
              Discover the iconic Kinkaku-ji Temple <br />
              <Link to='/nuthantudo'>
                <button type="button" className="btn btn-outline-light">
                  Discover Now
                </button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <section className='slider2'>
        <div className="tieude1">
          <p>Eastern Hemisphere</p>
          
        </div>
        <div className="East">
          <div className="East-1">
            <div className="image1" data-aos="zoom-in-down">
              <img src="img/East/HimejiCastleVertical.jpg" alt="Himeji Castle" />
            </div>
            <h2>Himeji Castle</h2>
            <p>Himeji Castle, a masterpiece of Japanese art and might and a world heritage site. A castle that shines with beauty and light.</p>
            <Link to='/HimejiCastle'>
              <button type="button" className="btn btn-outline-secondary">
                See all...
              </button>
            </Link>
          </div>
          <div className="East-1">
            <div className="image1" data-aos="zoom-in-down">
              <img className='hinhrome1' src="img/East/GyeongbokgungVertical.jpg" alt="Gyeongbokgung Palace" />
            </div>
            <h2>Gyeongbokgung Palace</h2>
            <p>Gyeongbokgung Palace is a royal palace located in northern Seoul, South Korea. It served as the main palace of the Joseon dynasty.</p>
            <Link to='/Gyeongbokgung'>
              <button type="button" className="btn btn-outline-secondary">
                See all...
              </button>
            </Link>
          </div>
          <div className="East-1">
            <div className="image1" data-aos="zoom-in-down">
              <img src="img/East/KinkakuJiVertical.jpg" alt="Kinkaku-Ji Temple" />
            </div>
            <h2>Kinkaku-Ji Temple</h2>
            <p>"Temple of the Golden Pavilion", Kinkaku-ji is a Zen Buddhist temple in Kyoto, Japan. It is  the most popular site in Kyoto.</p>
            <Link to='/Kinkaku'>
              <button type="button" className="btn btn-outline-secondary">
                See all...
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default East;
