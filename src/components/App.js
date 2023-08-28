import React from 'react';

import '../styles/App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import logo from '../images/logo.svg';



function App() {

  React.useEffect(() => {
    document.title = "Usina Eco Cultural";
  }, [])

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="utils">
          <h1 className='title'>Usina Eco Cultural</h1>
          <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam culpa nisi consequatur saepe illum? Saepe totam perferendis reiciendis, at distinctio ex ducimus magni alias corrupti aliquid sunt cupiditate, quasi adipisci?</p>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default App;
