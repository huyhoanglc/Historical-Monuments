
import './App.css';

import Home from './Pages/Home/Home';
import About from './Pages/About/About'



import Footer1 from './Components/Footer/Footer1';

import Contact from './Components/Contact/Contact';





import North from './Pages/Location/North/North'
import South from './Pages/Location/South/South'
import Macchupicchu from "./Pages/Location/South/Macchupicchu/Macchupicchu";
import Moai from "./Pages/Location/South/Moai/Moai";
import Sydneyoperahouse from "./Pages/Location/South/SydneyOperaHouse/Sydneyoperahouse";
import East from './Pages/Location/East/East'
import HimejiCastle from './Pages/Location/East/HimejiCastle/HimejiCastle';
import Gyeongbokgung from './Pages/Location/East/KoreanCastle/Gyeongbokgung';
import Kinkaku from './Pages/Location/East/Kinkaku/Kinkaku';
import West from './Pages/Location/West/West'
import Berlinwall from './Pages/Location/West/Berlinwall';
import Effiel from './Pages/Location/West/Effiel';
import Semmering from './Pages/Location/West/Semmering';
import Wonder from './Pages/Location/Seven/Woder'
import Backtotop from "./Components/Backtotop/Backtotop";
import Layout from "./Components/Layout/Layout";
import Gallery from './Gallery/Gallery';
import Nuthantudo from './Pages/Location/North/Nuthantudo/Nuthantudo';
import Rome from './Pages/Location/North/Rome/Rome';
import Truongthanh from './Pages/Location/North/Truongthanh/Truongthanh';
import  Galleryhome from './Pages/Home/GalleryHome/Galleryhome';
import Region from './Pages/Location/Region/Region'

import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layouts from './Components/Layouts/Layouts';

function App() {
  

  return (
    <div>
    
    
    
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
              
          
          
          <Route path='/North' element={<North/>}/>
              
             <Route path="/rome" element={<Rome />} />
             <Route path="/truongthanh" element={<Truongthanh />} />
          <Route path='/South' element={<South/>}/>
            <Route path='/Macchupicchu' element={<Macchupicchu/>}/>
            <Route path='/Moai' element={<Moai/>}/>
            <Route path='/Sydneyoperahouse' element={<Sydneyoperahouse/>}/>  
          <Route path='/East' element={<East/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/West' element={<West/>}/>
            <Route path='/Berlinwall' element={<Berlinwall/>}/>
            <Route path='/Effeltower' element={<Effiel/>}/>
            <Route path='/Semmering' element={<Semmering/>}/>          
          <Route path='/Wonder' element={<Wonder/>}/>          
        </Route>
        {/* outPlayout */}
        <Route element={<Layouts/>}>
        <Route path="/Region" element={<Region />} />
        <Route path="/nuthantudo" element={<Nuthantudo />} />
        <Route path='/About' element={<About/>}/>
        
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/Gallery' element={<Gallery/>}/>
        <Route path='/GalleryHome' element={<Galleryhome/>}/>
        <Route path="/HimejiCastle" element={<HimejiCastle />} />
            <Route path="/Gyeongbokgung" element={<Gyeongbokgung />} />
            <Route path="/Kinkaku" element={<Kinkaku />} />
            </Route>
      </Routes>
    </BrowserRouter>
    <Backtotop/>
    <Footer1/>
    </div>
  );
}

export default App;
