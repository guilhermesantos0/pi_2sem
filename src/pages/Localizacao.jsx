import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Localizacao () {
    return(
        <div className="Localizacao">
            <Navbar tab="Localização" />
                <Header color="var(--theme-color1)">COMO CHEGAR</Header>
            <Footer />
        </div>
    )
}

export default Localizacao