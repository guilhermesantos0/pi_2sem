import React from 'react';

import "../styles/pages/Home.css"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {

  React.useEffect(() => {
    document.title = "Usina Eco Cultural";
  }, [])

  return (
    <div className="Home">
      <Navbar tab="Home" />
      <Footer />
    </div>
  );
}

export default Home;
