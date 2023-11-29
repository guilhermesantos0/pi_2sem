import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import cades from "../images/apoiadores/cades.png";
import casadascaldeiras from "../images/apoiadores/casadascaldeiras.png"

function Apoiadores () {
    return (
        <div className="Apoiadores">
            <Navbar tab="Apoiadores" />
            <Header color="var(--theme-color4)">APOIADORES</Header>
            <div className="ColetivoContent">
                <div className="conteudo">
                    <div className="info1 info_tam">
                        <div>
                            <img src={cades} className="img_a_esquerda"/>
                        </div>
                        <div className="texto_informativo">
                            <h3>CADES Ipiranga</h3>
                            <p>O CADES Ipiranga é um conselho que busca desenvolvimento sustentável e cultura de paz</p>
                        </div>
                    </div>
                </div>
                <div className="conteudo">
                    <div className="info info_tam">
                        <div className="texto_informativo">
                            <h3>Casa das Caldeiras</h3>
                            <p>A Casa das Caldeiras é um espaço especial, diferenciado, reconhecido e equipado para receber diferentes formatos de evento.</p>
                        </div>
                        <div className="imagem">
                            <img src={casadascaldeiras} className="img_a_direita"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Apoiadores