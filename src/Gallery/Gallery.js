import React from 'react'

function Gallery() {
  return (
    <div>
       <div className='wrapper_gallery'>
    <SlideShow />
    <div className="row">
        <h1 className='align_center'>Gallery All Festival</h1>
        {HomePageList.map((items,index) =>( 
             <div className="col-lg-4 col-md-12 mb-4 mb-lg-0 img1" key={index}>
                 <img
                     src={items.img}
                     className="w-100 shadow-1-strong rounded mb-4"
                     alt="Boat on Calm Water"
                />
             </div>
         ))}
    </div>
    </div>
    </div>
  )
}

export default Gallery
