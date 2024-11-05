import React from 'react'

function Product(props){

  console.log(props)
  return(
<div>
      <div>urun bilgileri</div>

      <div>

        <div>isim:asdasda</div>
        <div>fiyat: 123123</div>

      </div>

      <div>

        <div>isim:{props.productName}</div>
        <div>fiyat: {props.price}</div>

      </div>
      
    </div>
  )
}

export default Product