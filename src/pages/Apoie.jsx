import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Link } from 'react-router-dom';

import "../styles/pages/Apoie.css"

import image from "../images/apoie/_wow.svg"

function Apoie () {
    return(
        <div className="Apoie">
            <Navbar tab="Apoie" />
                <div className="ApoieContent">
                    <Header color="var(--theme-color3)">APOIE</Header>

                    <div class="conteudo">
                        <p style={{ fontSize: "36px", textAlign: "center" }}>Para apoiar o projeto da Usina Eco Cultural e contribuir com a propagação da cultura é muito fácil.</p>
                    
                        <p style={{ fontSize: "27px", textAlign: "center" }}>Basta assinar nosso <a target="_blank" class="but-a" href="https://secure.avaaz.org/community_petitions/po/prefeitura_municipal_de_sao_paulo_eu_apoio_incinerador_vergueiro_devera_ser_um_espaco_de_conscientizacao_ambiental_e_vida/">abaixo assinado online</a> ou acessar nosso <Link to="/" class="but-a">site</Link> para ajudar a alavancar cada vez mais nosso projeto.</p>
                    
                        <div class="img">  
                            <img src={image} width="50%" />
                        </div>
                    
                        <p style={{ fontSize: "27px", textAlign: "center" }}>Qualquer dúvida que existir, entre em contato conosco através da aba <Link to="/contato" class="but">Fale Conosco</Link></p>
                    </div>

                </div>
            <Footer />
        </div>
    )
}

export default Apoie