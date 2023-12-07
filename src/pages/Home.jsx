import React from 'react';

import "../styles/pages/Home.css"

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import sustentability from "../images/home/sustentability.png";
import socialPolitics from "../images/home/social_politics.png";

import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

import importAllImages from '../helpers/importAll';

const _images = importAllImages(require.context("../images/galeria/", false, /\.(png|jpe?g|svg)$/))

function Home() {

  React.useEffect(() => {
    document.title = "Usina Eco Cultural";
  }, [])

  const images = _images.map((i) => ({
    src: i
  }))

  return (
    <div className="Home">
      <Navbar tab="Home" />
      
        <div className="banner">
          <div className="overlay"></div>
          <p className='petition_text'>Assine nossa petição para que possamos transformar o espaço do antigo Incinerador Vergueiro em um centro cultural!</p>
          <a className='petition' target='_blank' href="https://secure.avaaz.org/community_petitions/po/prefeitura_municipal_de_sao_paulo_eu_apoio_incinerador_vergueiro_devera_ser_um_espaco_de_conscientizacao_ambiental_e_vida/">Assine a petição</a>
        </div>

        <div className="pubarea">
          <div className="sustentability">

            <h2 className="pubtitle">Sustentabilidade</h2>

            <div className="pub_content_area">
              <div className="pub_image_area">
                <img src={sustentability} alt="" />
              </div>
              <div className='pub_text'>Promover a sustentabilidade é honrar o equilíbrio entre homem e natureza, construindo um legado para as gerações futuras. Cada pequena ação conta para um mundo mais harmonioso e resiliente.</div>
            </div>

          </div>

          <div className="social_politics">

            <h2 className="pubtitle">Políticas Sociais</h2>

            <div className="pub_content_area">
              <div className="pub_image_area">
                <img src={socialPolitics} alt="" />
              </div>
              <div className='pub_text'>Políticas sociais eficazes são alicerces da justiça e igualdade, garantindo oportunidades e dignidade a todos os cidadãos. Investir nelas é pavimentar um caminho para uma sociedade mais inclusiva e próspera.</div>
            </div>

          </div>
        </div>

        <div className="description">
          <div className="origem">
            <h2>Origem</h2>
            <p>O Incinerador Vergueiro foi um dos três incineradores paulistanos, localizado no Ipiranga, zona sul de São Paulo, na Rua Breno Ferraz do Amaral, altura 390, sendo mais comumente considerado na avenida Dr. Ricardo Jafet, devido a localização de sua chaminé. Exatamente ao lado da Estação Santos-Imigrantes, da Linha-2 Verde do metrô, inicialmente sendo destinado ao lixo doméstico, mas que também se tornou incinerador de lixo hospitalar. Iniciou suas atividades no ano de 1968, recebendo lixo hospitalar a partir de 1977.</p>
          </div>
          <div className="proposta">
            <h2>Proposta</h2>
            <p>A proposta para o antigo Incinerador Vergueiro é transforma-lo em algo atrativo para a comunidade da cidade de São Paulo e aos bairros ao redor do incinerador. Precisamos da sua ajuda para transformar esta proposta em realidade! <a target='_blank' href="https://secure.avaaz.org/community_petitions/po/prefeitura_municipal_de_sao_paulo_eu_apoio_incinerador_vergueiro_devera_ser_um_espaco_de_conscientizacao_ambiental_e_vida/">Assine aqui</a> para nos ajudar!</p>
          </div>
        </div>

        <div className="gallery_container">
          <Carousel className='gallery' images={images}></Carousel>
        </div>
      <Footer />
    </div>
  );
}

export default Home;
