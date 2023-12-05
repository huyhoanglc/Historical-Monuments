import React from 'react'
import { GalleryhomeData} from './GalleryhomeData';
import { useEffect,useState } from 'react';
import "./Galleryhome.css";

function Galleryhome() {
    const [data,setData] = useState([]);
    const [collection,setCollection] = useState([]);
    useEffect(()=>{
        setData(GalleryhomeData);
        setCollection([...new Set(GalleryhomeData.map((item)=>item.title))])
        
    }, [])
    const filtergallery = (itemData) =>{
        const filterData = GalleryhomeData.filter((item) => item.title == itemData);
        setData(filterData);
    }
  return (
    <div>
      <div  className='galleryhomewrapper '>
        <div className="filteritem flex-container">
            <h2 className='tl'><b>Gallery</b></h2>
            <hr/>
            <ul className=' d-flex justify-content-center'>
                <li><button onClick={()=> setData(GalleryhomeData)}>All</button></li>
                {
                    collection.map((item)=> <li className=''><button onClick={()=> {filtergallery(item)}}>{item}</button></li>)
                }
            </ul>
        </div>
        <div className='galleryhomecontainer '>
            
        {
            data.map((item)=> <div className='galleryhomeitem'> <img src={item.image} /></div>)
        }
           
        </div>
    </div>
    </div>
   
  )
}

export default Galleryhome
