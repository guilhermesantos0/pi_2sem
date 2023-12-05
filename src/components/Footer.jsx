import "../styles/components/Footer.css"


import instagram from "../images/footer/instagram.svg";
import facebook from "../images/footer/facebook.svg";
import youtube from "../images/footer/youtube.svg";

function Footer(){
    return(
        <div className="Footer">
            <div className="infos">
                <div className="contact">
                    <h2>Contato</h2>
                    <ul className="contact_infos">
                        <li><a href="https://www.instagram.com/usinaecocultural/" target="_blank"><img src={instagram} /> <span>usinaecocultural</span></a></li>
                        <li><a href="https://www.facebook.com/usinaecocultural/" target="_blank"><img src={facebook} /> <span>Usina EcoCultural</span></a></li>
                        <li><a href="https://www.youtube.com/@usinaecocultural" target="_blank"><img src={youtube} /> <span>Usina Eco-Cultural</span></a></li>
                    </ul>
                </div>
                <div className="_infos">
                    <h2>Localização</h2>
                    <ul className="other_infos">
                        <li><a href="https://goo.gl/maps/uzsoRxaoo3k9JUSeA" target="_blank">R. Breno Ferraz do Amaral, 415 - Cursino, São Paulo - SP, 04124-020</a></li>
                    </ul>
                </div>
          </div>
          <span className="credits">Site desenvolvido por alunos do Instituto Mauá de Tecnologia para Usina Eco Cultural</span>
        </div>
    )
}

export default Footer