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
                <div class="conteudo">
                    <div class="origem">
                        <h2>Origem</h2>
                        <div class="origem_conteudo">
                            <p>O Incinerador Vergueiro foi um dos três incineradores paulistanos, localizado no Ipiranga, zona sul de São Paulo, na Rua Breno Ferraz do Amaral, altura 390, sendo mais comumente considerado na avenida Dr. Ricardo Jafet, devido a localização de sua chaminé. Exatamente ao lado da Estação Santos-Imigrantes, da Linha-2 Verde do metrô, inicialmente sendo destinado ao lixo doméstico, mas que também se tornou incinerador de lixo hospitalar. Iniciou suas atividades no ano de 1968, recebendo lixo hospitalar a partir de 1977.</p>
                        </div>
                    </div>
                    <div class="protesto">
                        <h2>Protestos da comunidade</h2>
                        <div class="protesto_conteudo">
                            <p>O bairro do Ipiranga sempre fora de predominância industrial, porém, cresceu-se o descontentamento com a utilização do incinerador, proporcionalmente ao crescimento da população do bairro e de sua região. As fumaças das queimas atingiam um raio de 10km, chegando até as cidades de São Caetano do Sul, Diadema e bairros como Pinheiros, na zona oeste, Água Rasa, na zona leste, Cidade Ademar, na zona sul e Brás, na zona central. Era, nas palavras de sua própria população: "Negras, insalubres e incontroláveis, a visão de uma morte lenta de uma população e de um planeta". A comunidade intensificou sua pressão ao final da década de 90 e inicio dos anos 2000, com constantes protestos em frente ao incinerador e em diversos pontos influentes na região, sempre com pouca atenção da prefeitura e subprefeitura. Por diversas vezes a prefeitura anunciava que iria encerrar as atividades do incinerador, assim como já havia sido feito com o Incinerador Pinheiros, em 1990, na gestão da prefeita Luiza Erundina, mas a população sempre presenciava as fumaças novamente no céu no dia seguinte</p>
                        </div>
                    </div>
                    <div class="meses">
                        <h2>Meses Finais</h2>
                        <div class="meses_conteudo">
                            <p>Em 2000, a população cansada decidiu tomar uma medida drástica. Um protesto em forma de barreira humana na frente do incinerador, impedindo a entrada de caminhões levando lixo para queima. Essa atitude foi notada pelo estado, convocando mais uma vez uma atitude da CETESB quanto ao incinerador. Fora feita uma visita para realizar um laudo das cinzas do incinerador. No dia 01/12/2000 foi divulgado o laudo, constatando coliformes fecais, bacteriófagos e pseudômonas nas cinzas, comprovando a inutilidade do incinerador no processo de esterilização do lixo (a explicação para isso é que os fornos não haviam capacidade de atingir uma temperatura suficiente para realizar a queima de resto de órgãos, sangue, remédios vencidos e substâncias químicas tóxicas de hospitais). O laudo também apontava a liberação de dioxinas e furanos nas fumaças, substâncias tóxicas e cancerígenas. Uma pesquisa feita pelo laboratório de poluição atmosférica experimental da Universidade de São Paulo constatou que plantas do gênero Tradescantia apresentavam mais mutações genéticas, proporcionalmente a quanto mais próximas do incinerador estavam. Foi dado um prazo de 48 horas para a prefeitura assinar um Termo de Ajustamento de Conduta Ambiental, pelo qual a administração municipal se comprometeu a solucionar o problema no período de três meses. A partir disso, os resíduos deveriam passar por uma triagem para que pudessem seguir ao incinerador, o que diminuiu significantemente a média de 50 toneladas diárias para 6 toneladas, que foi diminuindo até sua última queima em dezembro de 2001, cujo foram incinerados 2 toneladas de medicamentos vencidos de quimioterapia e 125kg de maconha. Em 2002, finalmente, as atividades do incinerador foram oficialmente encerradas. Foram soltos milhares de balões coloridos cheios de gás hélio por sua chaminé, como símbolo de vitória e comemoração da comunidade pelo fim de sua luta.
                                Foram feitas 461 reclamações formais contra o incinerador, 19 autuações da CETESB num total de R$2,5 milhões em multas ambientais para a prefeitura, que até hoje não foram pagas. O incinerador atuava sem licenciamento da CETESB.</p>
                        </div>
                    </div>
                    <div class="encerramento">
                        <h2>Local Após Encerramento</h2>
                        <div class="encerramento_conteudo">
                            <p>O Incinerador Vergueiro foi um dos três incineradores paulistanos, localizado no Ipiranga, zona sul de São Paulo, na Rua Breno Ferraz do Amaral, altura 390, sendo mais comumente considerado na avenida Dr. Ricardo Jafet, devido a localização de sua chaminé. Exatamente ao lado da Estação Santos-Imigrantes, da Linha-2 Verde do metrô, inicialmente sendo destinado ao lixo doméstico, mas que também se tornou incinerador de lixo hospitalar. Iniciou suas atividades no ano de 1968, recebendo lixo hospitalar a partir de 1977.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Historia