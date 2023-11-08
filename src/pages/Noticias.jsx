import "../styles/pages/Noticias.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Noticias() {
    return (
        <div className="Noticias">
            <Navbar tab="Noticias" />
            <h1 className="noticias_title">Noticias</h1>
            <div className="noticias">
                <div className="card-noticias foto-1">
                    <div className="noticia-1 texto">
                        <h3>Bairro de SP tenta salvar incinerador de órgãos humanos</h3>
                        <p>Desde os anos 1960, os moradores do bairro do Ipiranga, em São Paulo, conviviam com o barulho de caminhões, fumaça, chorume e mau cheiro. A origem era o incinerador Vergueiro, criado pela prefeitura para a queima de toneladas de lixo hospitalar produzido na cidade. Agora, os vizinhos querem que o antigo símbolo da poluição da metrópole se torne um lugar verde</p>
                    </div>
                    <div className="btn">
                        <a href="https://www.uol.com.br/ecoa/ultimas-noticias/2022/08/22/orgao-humano-e-mutacao-em-plantas-simbolo-da-poluicao-pode-ser-salvo-em-sp.htm">Saiba Mais</a>
                    </div>
                </div>
                <div className="card-noticias foto-2">
                    <div className="noticia-2 texto">
                        <h3>Festival Usina Lado B ocupa antigo incinerador na zona Sul de SP</h3>
                        <p>Usina Lado B ocupa o antigo incinerador Vergueiro, no Ipiranga. Festival reúne musicos independentes, artistas locais e roda de samba</p>
                    </div>
                    <div className="btn">
                        <a href="https://www.redebrasilatual.com.br/cultura/festival-usina-lado-b-ocupa-antigo-incinerador-na-zona-sul-de-sp/">Saiba Mais</a>
                    </div>
                </div>
                <div className="card-noticias foto-3">
                    <div className="noticia-3 texto">
                        <h3>Moradores da Zona Sul tentam transformar área de antigo incinerador de lixo hospitalar em centro cultural e acabam multados pela prefeitura</h3>
                        <p>Grupo afirma que discute com a prefeitura desde 2019 sobre o novo uso do local, que fica no Ipiranga. Prefeitura alega que solicitou documentação para liberar o uso do espaço, mas que não foram entregues, e que a área precisa passar por descontaminação.</p>
                    </div>
                    <div className="btn">
                        <a href="https://g1.globo.com/sp/sao-paulo/noticia/2023/06/14/moradores-da-zona-sul-de-sp-tentam-transformar-area-de-antigo-incinerador-de-lixo-hospitalar-em-centro-cultural-e-acabam-multados-pela-prefeitura.ghtml">Saiba Mais</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Noticias;