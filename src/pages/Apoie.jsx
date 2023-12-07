import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Link } from 'react-router-dom';

import "../styles/pages/Apoie.css"

import image from "../images/apoie/_wow.svg"

function Apoie () {
    return(
        <div className="Apoie">
            <Navbar tab="Apoie" />
                <div className="ApoieContent">
                    <Header color="var(--theme-color3)">APOIE</Header>

                    <div class="conteudo">
                        <p style={{ fontSize: "36px", textAlign: "center" }}>Para apoiar o projeto da Usina Eco Cultural e contribuir com a propagação da cultura é muito fácil.</p>
                    
                        <p style={{ fontSize: "27px", textAlign: "center" }}>Basta assinar nosso <a target="_blank" class="but-a" href="https://secure.avaaz.org/community_petitions/po/prefeitura_municipal_de_sao_paulo_eu_apoio_incinerador_vergueiro_devera_ser_um_espaco_de_conscientizacao_ambiental_e_vida/">abaixo assinado online</a> ou acessar nosso <Link to="/" class="but-a">site</Link> para ajudar a alavancar cada vez mais nosso projeto.</p>
                    
                        <div class="img">  
                            <img src={image} width="50%" />
                        </div>
                    
                        <p style={{ fontSize: "27px", textAlign: "center" }}>Qualquer dúvida que existir, entre em contato conosco através da aba <Link to="/contato" class="but">Fale Conosco</Link></p>

                        <div className="porque">
                            <h2>Porque apoiar?</h2>
                            <p>O antigo Incinerador Vergueiro é um prédio abandonado desde 2002. Um grupo de pessoas do bairro e outras ligadas ao Conselho de Meio Ambiente, Desenvolvimento Sustentável e Cultura de Paz - CADES da Subprefeitura Ipiranga iniciou, em 2019, o movimento Usina Verde para fomentar que este imóvel cumpra sua função social, seja reabilitado e destinado para implantação de um espaço dedicado à localização dos Objetivos de Desenvolvimento Sustentável.</p>
                            <p>Em 2022, teve início uma movimentação conjunta com a sociedade civil organizada, que então desenvolveu o conceito Usina Eco-Cultural para a criação de um espaço que ofereça ao Ipiranga e à cidade de São Paulo oportunidades de cultura, educação ambiental, lazer, bem-estar, inclusão social, economia circular, dentre outros temas, no intuito de tornar-se um centro cultural e ambiental, em preservação de sua memória e significado em relação a cidade.</p>
                            <p>Este grupo já realizou algumas atividades no local (para saber mais acesse: <a target="_blank" href="https://linktr.ee/usinaecocultural">https://linktr.ee/usinaecocultural</a> e precisa do seu apoio para que continue atuando e ganhe força para conseguir que este local seja reabilitado e adequado ao uso proposto, trazendo inúmeros benefícios para a população.</p>
                        </div>
                    </div>

                </div>
            <Footer />
        </div>
    )
}

export default Apoie