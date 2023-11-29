import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/pages/Coletivo.css"

import img1 from "../images/coletivo/usina1.png"
import img2 from "../images/coletivo/usina2.png"
import img3 from "../images/coletivo/usina3.png"
import img4 from "../images/coletivo/usina4.png"

function Coletivo() {
    return(
        <div className="Coletivo">
            <Navbar tab="Coletivo" />
            <Header color="var(--theme-color4)">COLETIVO</Header>
            <div className="ColetivoContent">
                <div className="conteudo">
                    <div className="info1 info_tam">
                        <div>
                            <img src={img1} className="img_a_esquerda"/>
                        </div>
                        <div className="texto_informativo">
                            <h3>Como surgiu</h3>
                            <p>O coletivo surgiu após o fechamento total do Incinerador Vergueiro, em 2002. </p>
                        </div>
                    </div>
                </div>
                <div className="conteudo">
                    <h2>Proposta</h2>
                    <div className="info info_tam">
                        <div className="texto_informativo">
                            <h3>Polo Cutural</h3>
                            <p>A proposta para o antigo Incinerador Vergueiro é transforma-lo em algo atrativo para a comunidade da cidade de São Paulo e aos bairros ao redor do incinerador</p>
                        </div>
                        <div className="imagem">
                            <img src={img2} className="img_a_direita"/>
                        </div>
                    </div>
                </div>
                <div className="conteudo">
                    <div className="info1 info_tam">
                        <div>
                            <img src={img3} className="img_a_esquerda"/>
                        </div>
                        <div className="texto_informativo">
                            <h3>Museu do Meio Ambiente</h3>
                            <p>O propósito do museu do meio ambiente é informar às pessoas sobre o passado e o futro do meio ambiente, tendo como exemplo o incinerador.</p>
                        </div>
                    </div>
                </div>
                <div className="conteudo ">
                    <div className="info info_tam">
                        <div className="texto_informativo">
                            <h3>Programa Ruas Abertas</h3>
                            <p>No programa Ruas Abertas, nossa intenção é fazer ações nas ruas da região onde está localizada a Usina Eco Cultural</p>
                        </div>
                        <div className="texto_informativo">
                            <img src={img4} className="img_a_direita"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Coletivo