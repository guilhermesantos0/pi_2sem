import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/pages/Historia.css"

function Historia() {
    return(
        <div className="Historia">
            <Navbar tab="História" />
            <div className="HistoriaContent">
                <Header color="var(--theme-color3)">HISTÓRIA</Header>
                <div className="origem">
                    <h2>Do Incinerador Vergueiro</h2>
                    <div className="origem_conteudo">
                        <p>O Incinerador Vergueiro, localizado no Ipiranga, zona sul de São Paulo, foi um dos três incineradores da cidade. Iniciou suas atividades em 1968, a princípio para lixo doméstico, posteriormente incluindo lixo hospitalar a partir de 1977. Ativo até 2002, o Incinerador Vergueiro desempenhou um papel significativo na história da coleta de lixo em São Paulo, chegando a incinerar cerca de 50 toneladas diárias.
                        O bairro do Ipiranga, predominantemente industrial, testemunhou o crescimento do descontentamento com o Incinerador, cujas fumaças atingiam um raio de 10km, afetando até cidades vizinhas. A população protestou intensamente na década de 90 e início dos anos 2000, destacando a inadequação ambiental do Incinerador. Em 2000, um protesto bloqueou a entrada de caminhões, levando o poder público a avaliar o incinerador.   
                        O laudo de dezembro de 2000 revelou a presença de coliformes fecais, bacteriófagos e substâncias tóxicas nas cinzas, invalidando sua eficácia na esterilização do lixo. Detectou-se também a liberação de substâncias cancerígenas nas fumaças. Pressionada, a prefeitura assinou um Termo de Ajustamento de Conduta Ambiental, reduzindo a média diária de lixo para 6 toneladas. Em dezembro de 2001, ocorreu a última queima.</p>
                    </div>
                </div>
                <div className="protesto">
                    <h2>Do abandono à ocupação</h2>
                    <div className="protesto_conteudo">
                        <p>O Incinerador encerrou oficialmente em 2002, marcado por uma celebração com balões coloridos. Houve 461 reclamações formais, 19 multas ambientais não pagas, e o local permanece considerado tóxico já que o poder público não fez nada para “desintoxicar”. As tentativas de transformá-lo em um polo cultural e ambiental foram frustradas, deixando o prédio interditado, com vidros quebrados e pichações. A chaminé continua como símbolo da luta da comunidade. Ao lado, o Transbordo Vergueiro recebe cerca de 3000 toneladas de lixo diariamente.

                        Localizado na região centro-sul de São Paulo, mais precisamente no bairro do Ipiranga, em frente à estação de metrô Santos-Imigrantes da Linha Verde do Metrô, o Coletivo Usina Eco-cultural decidiu ocupar o espaço que ficou abandonado durante 20 anos, depois que um grupo de moradores conseguiu paralisar imediatamente as atividades do Incinerador em 2001.</p>
                    </div>
                </div>
                <div className="meses">
                    <h2>Linha do Tempo</h2>
                        <div className="timeline">
                            <ul>
                                <li>
                                    <div className="content">
                                        <h2>1968</h2>
                                        <p> Início das atividades do Incinerador Vergueiro</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <h2>2002</h2>
                                        <p> Encerramento da queima de lixo</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <h2>2019</h2>
                                        <p>Primeira reunião da comunidade para propor o Centro Cultural no antigo Incinerador, iniciativa do CADES Ipiranga.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <h2>2023</h2>
                                        <p> Comemoração na rua de 1 ano do movimento. Evento contou com o apoio do Vereador Aurélio Nomura - PSDB e a presença da escola de Samba Brinco da Marquesa.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="content">
                                        <h2>2024</h2>
                                        <p>Será a renovação do contrato de Concessão das operações do Transbordo Vergueiro (atualmente da EcoUrbis Ambiental)</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Historia