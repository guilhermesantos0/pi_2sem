import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/pages/Coletivo.css"

import img1 from "../images/coletivo/usina1.png"
import img2 from "../images/coletivo/usina2.png"
import img3 from "../images/coletivo/usina3.png"

function Coletivo() {
    return(
        <div className="Coletivo">
            <Navbar tab="Coletivo" />
            <Header color="var(--theme-color4)">COLETIVO</Header>
            <Footer />
        </div>
    )
}

export default Coletivo