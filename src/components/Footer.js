import "../styles/Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';


function Footer(){
    return(
        <div className="Footer">
            <div className="infos">
                <div className="contact">
                    <h2>Contato</h2>
                    <ul className="contact_infos">
                        <li><a href="https://www.instagram.com/usinaecocultural/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> <span>usinaecocultural</span></a></li>
                        <li><a href="https://www.facebook.com/usinaecocultural/" target="_blank"><FontAwesomeIcon icon={faFacebookF} /> <span>Usina EcoCultural</span></a></li>
                        <li><a href="https://www.youtube.com/@usinaecocultural" target="_blank"><FontAwesomeIcon icon={faYoutube} /> <span>Usina Eco-Cultural</span></a></li>
                    </ul>
                </div>
                <div className="_infos">
                    <h2>Outras Informações</h2>
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