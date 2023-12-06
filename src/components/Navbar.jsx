import "../styles/components/Navbar.css";

import { Link } from 'react-router-dom';

import menu from "../images/navbar/menu.svg";
import logo from "../images/logo_preto.png";

function Navbar(props){

    let menuOpen = false
    let scrollPosition;
    
    const toggleMenu = () => {
        const navbar = document.querySelector(".Navbar")
        const menu = document.querySelector(".menu")
        
        
        if(!menuOpen){
            navbar.classList.add("open")
            menu.classList.add("open")

            scrollPosition = window.scrollY

            window.scrollTo(0, 0);
            menuOpen = true
        }else{
            navbar.classList.remove("open")
            menu.classList.remove('open')

            window.scrollTo(0, scrollPosition)
            menuOpen = false
        }
    }

    return (
        <div className="Navbar">
            {/* <img src="https://placehold.co/400" alt="Usina Eco-Cultural" /> */}
            <img src={logo} alt="Usina Eco-Cultural" />
            <ul className="menu">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/coletivo'>Coletivo</Link></li>
                <li><Link to='/historia'>História</Link></li>
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
                <img className='icon' src={menu} />
                <span className="selected_tab">{props.tab}</span>
            </button>
        </div>
    )
}

export default Navbar
