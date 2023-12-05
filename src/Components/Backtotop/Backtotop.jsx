import React, { useState } from 'react'
import "./Backtotop.css";

function Backtotop() {
    const [backtotopbtn,setBacktotopbtn]= useState(false);
    const hidebacktotopbtn =() =>{
        if(window.scrollY >=200){
            setBacktotopbtn(true)
        } else{
            setBacktotopbtn(false)
        }
    }
    window.addEventListener('scroll',hidebacktotopbtn);
  return (
    <div className='backtotop'onClick={() => {        
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }}>  
        <a  class={backtotopbtn ?"back-to-top d-flex align-items-center justify-content-center showbacktotopbtn" : "back-to-top d-flex align-items-center justify-content-center "}><i class="fa fa-arrow-up"></i></a>
    </div>
  )
}

export default Backtotop
