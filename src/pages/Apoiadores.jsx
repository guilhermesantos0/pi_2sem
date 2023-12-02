import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import cades from "../images/apoiadores/cades.png";
import casadascaldeiras from "../images/apoiadores/casadascaldeiras.png";
import missao_ambiental from "../images/apoiadores/missao_ambiental.png";
import imt from "../images/apoiadores/imt.png";

import "../styles/pages/Apoiadores.css"

function Apoiadores () {
    return (
        <div className="Apoiadores">
            <Navbar tab="Apoiadores" />
            <Header color="var(--theme-color4)">APOIADORES</Header>
            <div className="ApoiadoresContent">
                <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/subprefeituras/ipiranga/cades_ip/index.php?p=32342" target="_blank" className="conteudo">
                    <div className="info1 info_tam">
                        <div>
                            <img src={cades} className="img_a_esquerda"/>
                        </div>
                        <div className="texto_informativo">
                            <h3>CADES Ipiranga</h3>
                            <p>O CADES Ipiranga é um conselho que busca desenvolvimento sustentável e cultura de paz</p>
                        </div>
                    </div>
                </a>
                <a href="http://casadascaldeiras.com.br" target="_blank" className="conteudo">
                    <div className="info info_tam">
                        <div className="texto_informativo">
                            <h3>Casa das Caldeiras</h3>
                            <p>A Casa das Caldeiras é um espaço especial, diferenciado, reconhecido e equipado para receber diferentes formatos de evento.</p>
                        </div>
                        <div className="imagem">
                            <img src={casadascaldeiras} className="img_a_direita"/>
                        </div>
                    </div>
                </a>
                <a href="https://sites.google.com/view/missoambiental/página-inicial" target="_blank" className="conteudo">
                    <div className="info1 info_tam">
                        <div>
                            <img src={missao_ambiental} className="img_a_esquerda"/>
                        </div>
                        <div className="texto_informativo">
                            <h3>Missão Ambiental</h3>
                            <p>A Missão Ambiental é uma associação sem fins lucrativos que cria espaços de preservação e convivência para a comunidade</p>
                        </div>
                    </div>
                </a>
                <a href="http://www.maua.br" target="_blank" className="conteudo">
                    <div className="info info_tam">
                        <div className="texto_informativo">
                            <h3>Instituto Mauá de Tecnologia</h3>
                            <p>O Instituto Mauá de Tecnologia (IMT) é uma instituição de ensino superior e pesquisa privado sem fins lucrativos de utilidade pública</p>
                        </div>
                        <div className="imagem">
                            <img src={imt} className="img_a_direita"/>
                        </div>
                    </div>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Apoiadores