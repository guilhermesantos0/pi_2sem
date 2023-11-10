import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/pages/Eventos.css";

function Eventos () {
    return(
        <div className="Eventos">
            <Navbar tab="Eventos" />
                <div className="EventosContent">
                    <div className="header-page">
                        <h1 className="word"><b>EVENTOS</b></h1>
                    </div>

                    <div className="eventos">
                        <div className="card-eventos foto-1">
                            <div className="evento-1 texto">
                                <h3>Despertando Consciências: Uma Palestra Imperdível sobre a Importância da Reciclagem no Mundo Moderno</h3>
                                <br/>
                                <h2>15/11/2023 - 19:30</h2>
                                <br/>
                                <p>Descubra como a reciclagem pode transformar nosso mundo moderno em um lugar mais sustentável e saudável. Nossa palestra sobre a importância da reciclagem irá revelar os segredos para reduzir o desperdício, preservar recursos valiosos e proteger o meio ambiente, capacitando você a ser um agente de mudança em nossa jornada para um futuro mais verde. Não perca a oportunidade de se envolver e fazer a diferença.</p>
                                
                            </div>
                            
                        </div>
                        <div className="card-eventos foto-2">
                            <div className="evento-2 texto">
                                <h3>Peça teatral Dom Quixote: Loucura e Heroísmo no Palco</h3>
                                <br/>
                                <h2>17/11/2023 - 19:30</h2>
                                <br/>
                                <p>"Dom Quixote" é uma emocionante adaptação teatral da obra-prima de Cervantes, que nos transporta para o mundo fantástico de um cavaleiro idealista, obcecado por honra e aventura, que decide partir em busca de justiça e nobreza, enfrentando moinhos de vento que vê como gigantes, e cativando o público com sua coragem e loucura cativante. Nessa jornada incrível, ele é acompanhado por seu fiel escudeiro Sancho Pança, em uma busca épica e tragicômica pela verdade e pela realização dos sonhos.</p>
                            </div>
                            
                        </div>
                        <div className="card-eventos foto-3">
                            <div className="evento-3 texto">
                                <h3>Aventura Infinita: Diversão Sem Limites para Crianças!</h3>
                                <br/>
                                <h2>18/11/2023 - 09:00</h2>
                                <br/>
                                <p>Prepare-se para um sábado mágico repleto de diversão e aventura para as crianças! Nosso evento de atividades infantis oferece um dia cheio de sorrisos, brincadeiras interativas, jogos emocionantes e muito mais. Com uma equipe de monitores dedicados e uma variedade de atividades estimulantes, as crianças terão a oportunidade de explorar, aprender e criar memórias inesquecíveis. É o lugar perfeito para que os pequenos liberem a imaginação, façam novos amigos e desfrutem de um dia repleto de alegria. Não perca esta chance de proporcionar às crianças um sábado cheio de encanto e risadas!</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Eventos