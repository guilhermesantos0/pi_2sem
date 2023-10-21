import React from 'react';

import "../styles/pages/Home.css"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import sustentability from "../images/home/sustentability.png";
import socialPolitics from "../images/home/social_politics.png";

function Home() {

  React.useEffect(() => {
    document.title = "Usina Eco Cultural";
  }, [])

  return (
    <div className="Home">
      <Navbar tab="Home" />
        <div className="banner">
          <a className='petition' href="https://secure.avaaz.org/community_petitions/po/prefeitura_municipal_de_sao_paulo_eu_apoio_incinerador_vergueiro_devera_ser_um_espaco_de_conscientizacao_ambiental_e_vida/">Assine a petição</a>
        </div>
        <div className="pubarea">
          <div className="sustentability">

            <h2 className="pubtitle">Sustentabilidade</h2>

            <div className="pub_content_area">
              <div className="pub_image_area">
                <img src={sustentability} alt="" />
                <a href="http://www.freepik.com">Designed by Freepik</a>
              </div>
              <div className='pub_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos autem, natus maiores velit repellendus eum, quae commodi doloribus nulla ea error qui reprehenderit iusto incidunt enim corporis! Tempora, delectus nesciunt!</div>
            </div>

          </div>

          <div className="social_politics">

            <h2 className="pubtitle">Políticas Sociais</h2>

            <div className="pub_content_area">
              <div className="pub_image_area">
                <img src={socialPolitics} alt="" />
                <a href="http://www.freepik.com">Designed by Freepik</a>
              </div>
              <div className='pub_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos autem, natus maiores velit repellendus eum, quae commodi doloribus nulla ea error qui reprehenderit iusto incidunt enim corporis! Tempora, delectus nesciunt!</div>
            </div>

          </div>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
