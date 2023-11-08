import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/pages/Apoie.css"

import image from "../images/apoie/_wow.svg"

function Apoie () {
    return(
        <div className="Apoie">
            <Navbar tab="Apoie" />
                <div className="header-page">
                    <h1 className="word"><b>APOIE</b></h1>
                </div>

                <br/>

                <p className="p1">Apoie o projeto da Usina Eco Cultural e contribua para a propagação da cultura.</p>

                <br/>

                <div className="img">  
                    <img src={image} width="50%"/>
                </div>

                <br/>

                <p className="p2">Toda e qualquer tipo de doação será muito bem-vinda, para mais informações, entre em contato através da aba <a href="">Fale Conosco.</a></p>

            <Footer />
        </div>
    )
}

export default Apoie