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

                    <br/>

                    <p className="p1">Apoie o projeto da Usina Eco Cultural e contribua para a propagação da cultura.</p>

                    <br/>

                    <div className="img">  
                        <img src={image} width="50%"/>
                    </div>

                    <br/>

                    <p className="p2">Toda e qualquer tipo de doação será muito bem-vinda, para mais informações, entre em contato através da aba <Link to="/contato">Fale Conosco</Link>.</p>

                </div>
            <Footer />
        </div>
    )
}

export default Apoie