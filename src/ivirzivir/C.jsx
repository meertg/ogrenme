


export default function Carousel() {

  
  

  return(
    <>
    
    
    <div className="container">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>

      <button onClick={() => {
        document.querySelector('.container').scrollLeft += 100
      }}>saga</button>
       <button onClick={() => {
        document.querySelector('.container').scrollLeft -= 100
      }}>saga</button>
    </>
  )
}