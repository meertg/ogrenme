import { useState } from "react"


export default function Form() {

const[gonder,setgonder]=useState({
  isim : '',
  sifre : '',
  benihatirla : false
});

  console.log(gonder)

  return(
    <form>
      <h4>HOŞGELDİNİZ</h4>

      <div className="giris">


      <input onChange={(e)=>{
        setgonder({...gonder, isim : e.target.value})
      }} type="text" placeholder="kullanici adini gir" className="username" />
      <input onChange={(e)=>{
        setgonder({...gonder, sifre : e.target.value})
      }} type="text" placeholder="sifre gir" className="password"/>
      
      <div className="remeberme">
      <input onChange={(e)=>{
        setgonder({...gonder, benihatirla : e.target.checked})
      }} type="checkbox" />
      <p>Beni Hatırla</p>
      </div>

      <input onClick={() => {

      }} type="button" value={'giris yap'} className="login" />
      </div>




    </form>
  )
}