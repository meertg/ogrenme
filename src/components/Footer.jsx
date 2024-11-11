export default function Footer(){


  return(
    <div className="footer">
      <div className="left">
        <div>
        <img src="logo512.png"/>
        <p>Nexcent</p>
        </div>
        
        <p>Copyright © 2020 Landify UI Kit.</p>
        <p>All rights reserved</p>
        <section>
          <img src="insta.png"/>
          <img src="chrome.png"/>
          <img src="twitter.png"/>
          <img src="yt.png"/>
        </section>
      </div>

      <div className="centreleft">
      <div className="centre">

        <section>
          <ul className="baslik">Company</ul>
          <ul>About Us</ul>
          <ul>Blog</ul>
          <ul>Contact Us</ul>
          <ul>Pricing</ul>
        </section>

        
        <section>
          <ul className="baslik">Support</ul>
          <ul>About Us</ul>
          <ul>Blog</ul>
          <ul>Contact Us</ul>
          <ul>Pricing</ul>
        </section>
      </div>
      <div className="right">
        <p>Stay up tp date</p>
        <input type="email" placeholder="Your mail adress here" />
      </div>
      </div>
    </div>
  );

}