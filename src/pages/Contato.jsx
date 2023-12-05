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
                                    <div className="col"><p><strong>Contato</strong><br/><br/>Whatsapp:91234-5678<br/>E-mail:usina@gmail.com</p></div>
                                    <div className="col"><p><strong>Redes Sociais</strong><br/><br/>Instagram: <a href="https://www.instagram.com/usinaecocultural/">@usinaecocultural</a><br/>Facebook: <a href="https://www.facebook.com/usinaecocultural/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0">Usina EcoCultural</a></p></div>
                                    <div className="col"><p><strong>Apoie</strong><br/><br/>Whatsapp:91234-5678<br/>E-mail:usina@gmail.com</p></div>
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