import '../styles/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';

function Navbar(){

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
            <ul className="menu">
                <li><Link to='/eventos'>Eventos</Link></li>
                <li>Opção do menu</li>
                <li>Opção do menu</li>
                <li>Opção do menu</li>
                <li>Opção do menu</li>
            </ul>
            <button onClick={toggleMenu} className="open_menu">
                <FontAwesomeIcon icon={faBars} />
                <span className="selected_tab">Home</span>
            </button>
        </div>
    )
}

export default Navbar