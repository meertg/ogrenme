import './assets/App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Clients from './components/Clients';
import Devamke from './components/Devamke';
import Asd from './components/Asd';
import Aciklama from './components/Aciklama';
import Dahafazla from './components/Dahafazla';
import Footer from './components/Footer';
function App() {
  
  
  return (
    <div className='App'>
      <Header/> 
      <Full>
      <Landing/>
      </Full>

      <Clients/>
      
      <Half>
      <Asd/>
      </Half>
      
      <Devamke/>
      
      <Aciklama/>

      <Full>
        <Dahafazla/>

      </Full>
      <Footer/>
 
      
    </div>

  );
}

export default App;



function Full({children}) {

  return(
    <div style={{width : '100%', display : 'flex', justifyContent : 'center'}}>
{children}
    </div>
  )
}

function Half({children}) {
  return(
    <div style={{width : '100%', display : 'flex', justifyContent : 'center'}}>
      <div style={{width : '100%', display : 'flex', justifyContent : 'center', maxWidth : '1400px', flexDirection :'column'}}>
      {children}
      </div>
    </div>
  )
}