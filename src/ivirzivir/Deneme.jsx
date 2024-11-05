import React from 'react'
import { useState, useEffect } from 'react'


function Deneme(){

  let [isim,setisim] = useState('mert');

  useEffect(()=>{
    if (isim=='mert') return;
    
    document.getElementById("ad").style.color="red"
  },[isim])
  return(
    <div>
    <button onClick={() =>setisim('a')}>buton</button>
    <p id='ad'>{isim}</p>
    </div>
  );
}

export default Deneme;