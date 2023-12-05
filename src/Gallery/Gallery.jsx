import React from 'react';
import { GalleryData} from './GalleryData';
import { useEffect,useState } from 'react';
import "./Gallery.css";

function Gallery() {
  
    const [data,setData] = useState([]);
    const [collection,setCollection] = useState([]);
    useEffect(()=>{
        setData(GalleryData);
        setCollection([...new Set(GalleryData.map((item)=>item.title))])
        
    }, [])
    const filtergallery = (itemData) =>{
        const filterData = GalleryData.filter((item) => item.title == itemData);
        setData(filterData);
    }
    
  return (
    <div className='Gallery'>       
    <div  className='gallerywrapper '>
        <div className="filteritem flex-container">
        <h2 className='tl'><b>Gallery</b></h2>
        <hr/>
            <ul className=' d-flex justify-content-center'>
                <li><button onClick={()=> setData(GalleryData)}>All</button></li>
                {
                    collection.map((item)=> <li className=''><button onClick={()=> {filtergallery(item)}}>{item}</button></li>)
                }
            </ul>
        </div>
        <div className='gallerycontainer '>
            
        {
            data.map((item)=> <div className='galleryitem'> <img src={item.image} /></div>)
        }
           
        </div>
    </div>
    </div>
  )
}

export default Gallery
