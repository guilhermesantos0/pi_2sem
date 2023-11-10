import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Apoiadores () {
    return (
        <div className="Apoiadores">
            <Navbar tab="Apoiadores" />
            <Header color="var(--theme-color4)">Apoiadores</Header>
            <Footer />
        </div>
    )
}

export default Apoiadores