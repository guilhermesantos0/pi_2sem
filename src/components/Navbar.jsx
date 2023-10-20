import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/components/Navbar.css";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function Navbar(props){

    let menuOpen = false
    
    const toggleMenu = () => {
        const navbar = document.querySelector(".Navbar")
        const menu = document.querySelector(".menu")
        
        if(!menuOpen){
            navbar.classList.add("open")
            menu.classList.add("open")
            menuOpen = true
        }else{
            navbar.classList.remove("open")
            menu.classList.remove('open')
            menuOpen = false
        }
    }

    return (
        <div className="Navbar">
            <img src="https://placehold.co/400" alt="Usina Eco-Cultural" />
            {/* <img src="../images/logo.png" alt="Usina Eco-Cultural" /> */}
            <ul className="menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/coletivo'>Coletivo</Link></li>
                <li><Link to='/historia'>Historia</Link></li>
                <li><Link to='/apoie'>Apoie</Link></li>
                <li><Link to='/loja'>Loja</Link></li>
                <div className="drop">
                    <span>Mais &#9660;</span>
                    <div className="drop_content">
                        <li><Link to='/eventos'>Eventos</Link></li>
                        <li><Link to='/noticias'>Notícias</Link></li>
                        <li><Link to='/apoiadores'>Apoiadores</Link></li>
                        <li><Link to='/localizacao'>Como chegar</Link></li>
                        <li><Link to='/contato'>Fale conosco</Link></li>
                    </div>
                </div>
            </ul>
            <button onClick={toggleMenu} className="open_menu">
                <FontAwesomeIcon className='icon' icon={faBars} />
                <span className="selected_tab">{props.tab}</span>
            </button>
        </div>
    )
}

export default Navbar
