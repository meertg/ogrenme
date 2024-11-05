


export default function Header(){
  return(
    <div className="header">
      <section className="header_left">
        <img src="logo512.png" alt="" className="logo" />
        <p>Nexcent</p>
      </section>
      <section className="header_right">
        <ul>Home</ul>
        <ul>Features</ul>
        <ul>Community</ul>
        <ul>Blog</ul>
        <ul>Pricing</ul>
        <button>Register Now!</button>
      </section>
    </div>
  );
}