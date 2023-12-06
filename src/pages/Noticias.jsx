import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/pages/Noticias.css";

function Noticias() {
    return (
        <div className="Noticias">
            <Navbar tab="Noticias" />
            <Header color="var(--theme-color1)">NOTÍCIAS</Header>
            <div className="NoticiasContent">
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
                <div className="card-noticias foto-4">
                    <div className="noticia-3 texto">
                        <h3>Prefeito inaugura reforma e modernização de Estação de Transbordo e amplia capacidade de tratamento de resíduos sólidos</h3>
                        <p>O prefeito de São Paulo inaugurou nesta segunda-feira (11/6/12), a Estação de Transbordo de Ponte Pequena (ETPP), no bairro do Bom Retiro, região central. A função do Transbordo, que terá capacidade para receber 140 mil toneladas mensais de resíduos domiciliares, é aperfeiçoar a logística entre a coleta e a destinação final do material até o aterro sanitário.</p>
                    </div>
                    <div className="btn">
                        <a href="https://www.prefeitura.sp.gov.br/cidade/secretarias/comunicacao/noticias/?p=106970">Saiba Mais</a>
                    </div>
                </div>
                <div className="card-noticias foto-5">
                    <div className="noticia-3 texto">
                        <h3>Parte do antigo incinerador Vergueiro será renovado como pólo ecológico</h3>
                        <p>Quem passa pela Av. Ricardo Jafet, na altura da estação Santos-Imigrantes, logo se confronta com um polêmico passado: o antigo incinerador Vergueiro. Uma parte do terreno está sendo destinada às promissoras obras de modernização e ampliação do local, que visa se renovar como pólo ecológico ao reduzir os impactos ambientais. A área da Estação de Transferência Vergueiro é atualmente a sede regional da EcoUrbis, empresa responsável pela coleta, transporte, tratamento e destinação de resíduos domiciliares.</p>
                    </div>
                    <div className="btn">
                        <a href="https://ipirangafeelings.com.br/antigo-incinerador-vergueiro-em-obras">Saiba Mais</a>
                    </div>
                </div>
                <div className="card-noticias foto-6">
                    <div className="noticia-3 texto">
                        <h3>Situação atual e obras de modernização da Estação de Transbordo Vergueiro são debatidos em audiência pública</h3>
                        <p>A situação da Estação de Transbordo Vergueiro e suas obras de modernização foram tema de Audiência Pública virtual realizada na manhã desta segunda-feira (28/6/21) pela Comissão de Política Urbana, Metropolitana e Meio Ambiente da Câmara Municipal de São Paulo.</p>
                    </div>
                    <div className="btn">
                        <a href="https://www.saopaulo.sp.leg.br/blog/situacao-atual-e-obras-de-modernizacao-da-estacao-de-transbordo-vergueiro-sao-debatidos-em-audiencia-publica/">Saiba Mais</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Noticias;