import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/pages/Contato.css"

function Contato () {
    return(
        <div className="Contato">
            <Navbar tab="Contato" />
                <div className="ContatoContent">
                    <Header color="var(--theme-color3)">FALE CONOSCO</Header>
                    
                    <div className="body">
                        <div className="image">
                            <p><b>Estamos aqui para você</b></p>
                        </div>
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