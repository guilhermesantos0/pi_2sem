import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/pages/Contato.css"

function Contato () {
    return(
        <div className="Contato">
            <Navbar tab="Contato" />
                <div className="header-page">
                    <div className="color">
                        <h1 className="word"><b>FALE CONOSCO</b></h1>
                    </div>
                </div>
                
                <div className="body">
                    <div class="image">
                        <p class="imagedesc"><b>Estamos aqui para você</b></p>
                    </div>
                    <div className="contatos">
                        <div class="header">
                            <p class="word3"><b>Canais de Contato:</b></p>
                        </div>

                        <div className="box">
                            <div className="colunas" style={{textAlign: "center"}}>
                                <div class="col"><p>Contato:<br/><br/>Whatsapp:91234-5678<br/>E-mail:usina@gmail.com</p></div>
                                <div class="col"><p>Redes Sociais:<br/><br/>Instagram:usina@gmail.com<br/>Facebook:usina@gmail.com</p></div>
                                <div class="col"><p>Apoie:<br/><br/>Whatsapp:91234-5678<br/>E-mail:usina@gmail.com</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Contato