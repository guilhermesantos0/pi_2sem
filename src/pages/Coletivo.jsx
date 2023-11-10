import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/pages/Coletivo.css"

import img1 from "../images/coletivo/usina1.png"
import img2 from "../images/coletivo/usina2.png"
import img3 from "../images/coletivo/usina3.png"

function Coletivo() {
    return(
        <div className="Coletivo">
            <Navbar tab="Coletivo" />
            <div className="ColetivoContent">
                <div class="header">
                <h1>O Coletivo</h1>
            </div>
            <div>
                <div class="conteudo">
                    <h2>Como surgiu</h2>
                    <div class="info info_tam">
                        <div>
                            <img src={img1} class="img_a_esquerda"/>
                        </div>
                        <div class="texto_informativo">
                            <p>O coletivo surgiu após o fechamento total do incinerador verguiro em 2002. </p>
                        </div>
                    </div>
                </div>
                <div class="conteudo">
                    <h2>Proposta</h2>
                    <div class="info info_tam">
                        <div class="texto_informativo">
                            <h3>Polo Cutural</h3>
                            <p>A proposta para o antigo incinerador vergueiro é transforma-lo em algo atrativo para a comunidade da cidade de São Paulo e aos bairros ao redor do incinerador</p>
                        </div>
                        <div class="imagem">
                            <img src={img2} class="img_a_direita"/>
                        </div>
                    </div>
                </div>
                <div class="conteudo">
                    <div class="info info_tam">
                        <div>
                            <img src={img3} class="img_a_esquerda"/>
                        </div>
                        <div class="texto_informativo">
                            <h3>Museu do Meio Ambiente</h3>
                            <p>O proposito do museuo do meio ambiente é informar as pessoas sobre o passado e o futro do meio ambiente, tendo como exemplo o incenerador                   </p>
                        </div>
                        
                    </div>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}

export default Coletivo