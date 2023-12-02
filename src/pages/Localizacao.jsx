import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/pages/Localizacao.css";

function Localizacao () {
    return(
        <div className="Localizacao">
            <Navbar tab="Localização" />
            <Header color="var(--theme-color1)">COMO CHEGAR</Header>
            <div className="LocalizacaoContent">
                <div className="info_area">
                    <h3 className="text-center endereco"> Venha conhecer nosso projeto, a Usina Eco-Cultural fica localizada na  <br/> <strong>R. Breno Ferraz do Amaral, 415 - Cursino, São Paulo - SP, 04124-020</strong> </h3>
                </div>
                <div className="maps text-center">
                    <h3 className="text-center font-loc">Localização</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.212516156107!2d-46.62398262449122!3d-23.596710162892187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5bf8fec09847%3A0x21fe6ebe5482bc4e!2sUsina%20Eco-Cultural!5e0!3m2!1spt-BR!2sbr!4v1696511060059!5m2!1spt-BR!2sbr" style={{border: '0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
                </div>
                <div>
                    <div className="rotas">
                        <div className="bus">
                            <h5 className="font-bold text-uppercase title-rotas"><strong>Saiba como chegar de ônibus</strong></h5>
                                <li style={{listStyleType: 'none'}}>4114-10 Terminal Parque Dom Pedro II - Pça. Frei Miguel Lanzani</li>
                                <li style={{listStyleType: 'none'}}>4115-10 Linha circular saindo de R. Jacopo Bellini, 168</li>
                                <li style={{listStyleType: 'none'}}>4491-10 R. José Fernandes Caldas - Terminal Parque Dom Pedro II</li>
                                <li style={{listStyleType: 'none'}}>476G-10 Av. Custódio de Sá e Faria - Pça. Kenichi Nakagawa</li>
                        </div>
                        <div className="car" style={{marginTop: '25px'}}>
                            <h5 className="font-bold text-uppercase title-rotas"><b>Saiba como chegar de veículos pessoais</b></h5>
                            <p>Seguindo pela Av. Dr. Ricardo Jafet, na altura da estação Santos-Imigrantes, a Usina poderá ser acessada pela R. Breno Ferraz Do Amaral, 415.</p>
                        </div>
                        <div className="subway" style={{marginTop: '25px'}}>
                            <h5 className="font-bold text-uppercase title-rotas"><b>Saiba como chegar de metrô</b></h5>
                            <p>A Usina se localiza à menos de 100m da estação de metrô Santos-Imigrantes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Localizacao