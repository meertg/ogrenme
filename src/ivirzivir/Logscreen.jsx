import { useState } from "react";
export default function Logscreen(){

  const[gonder, setGonder]=useState({
    mail:'',
    sifre:'',
    hatirla: false,
  })
  //axios.post('https://api.blogpool.net/user/isloggedin',gonder).then((res)=>{
  //  if(res.status==200 ) {
  //    alert('girdin')
  //  }
  //})

  const list = ['a', 'b']

  return(
    <>
    <div className="loginscreen">
    <section className="greetings">
      <h2>Welcome Back</h2>
      {
        list.map((item,index) => {

          return(
                <div>{item}</div>
          )
        })
      }
      <p>Please Enter With Your Mail Adress</p>
    </section>
    <div>
      <input onChange={(e)=>{
        setGonder({...gonder, mail: e.target.value})
      }} type="text" placeholder="e-mail" id="mail"/>
      <input onChange={(e)=>{
        setGonder({...gonder, sifre: e.target.value})
      }} type="password" id="password" placeholder="password" />
      <section className="rememberme">
        <input onChange={(e)=>{
          setGonder({...gonder, hatirla: e.target.checked})
        }} type="checkbox" />
        <p>Remember Me!</p>
      </section>
        <button className="loginbtn" id="login" onClick={()=>{
          console.log( gonder);
        }} >LOG IN!</button>
    </div>
    </div>
    </>
  );
}