import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/pages/Contato.css"
import image from "../images/contato/fale-conosco3.jpg"

function Contato () {
    return(
        <div className="Contato">
            <Navbar tab="Contato" />
                <div className="ContatoContent">
                    <div className="header-page">
                        <h1 className="word">FALE CONOSCO</h1>
                    </div>
                    
                    <div className="body">
                        <div className="image">
                            <p><b>Estamos aqui para você</b></p>
                        </div>
                        {/* <div className="image">
                            <p className="imagedesc"><b>Estamos aqui para você</b></p>
                        </div> */}
                        <div className="contatos">
                            <div className="header">
                                <p className="word3"><b>Canais de Contato:</b></p>
                            </div>

                            <div className="box">
                                <div className="colunas" style={{textAlign: "center"}}>
                                    <div className="col"><p>Contato:<br/><br/>Whatsapp:91234-5678<br/>E-mail:usina@gmail.com</p></div>
                                    <div className="col"><p>Redes Sociais:<br/><br/>Instagram:usinaecocultural<br/>Facebook:Usina EcoCultural</p></div>
                                    <div className="col"><p>Apoie:<br/><br/>Whatsapp:91234-5678<br/>E-mail:usina@gmail.com</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Contato