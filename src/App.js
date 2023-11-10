
import './App.css';

import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';

import Feedback from './Pages/Feedback';
import North from './Pages/North'
import South from './Pages/South'
import East from './Pages/East'
import West from './Pages/West'
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <div>
    <Header/>
    <Navbar/>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about-us' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/North' element={<North/>}/>
        <Route path='/South' element={<South/>}/>
        <Route path='/East' element={<East/>}/>
        <Route path='/West' element={<West/>}/>

      
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
