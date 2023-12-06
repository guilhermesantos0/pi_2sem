import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import cades from "../images/apoiadores/cades.png";
import casadascaldeiras from "../images/apoiadores/casadascaldeiras.png";
import missao_ambiental from "../images/apoiadores/missao_ambiental.png";
import imt from "../images/apoiadores/imt.png";
import cades_vm from "../images/apoiadores/cades_vm.png";
import casa_amarela from "../images/apoiadores/casa_amarela.png";
import museu_ipiranga from "../images/apoiadores/museu_ipiranga.png";
import casa_o from "../images/apoiadores/casa_o.png";
import muda_ipiranga from "../images/apoiadores/muda_ipiranga.png";
import etec_gv from "../images/apoiadores/etec_gv.png";
import ciclo_vida from "../images/apoiadores/ciclovida.png";
import insutituto_chao from "../images/apoiadores/instituto_chao.png";

import "../styles/pages/Apoiadores.css"

function Apoiadores () {
    return (
        <div className="Apoiadores">
            <Navbar tab="Apoiadores" />
            <Header color="var(--theme-color4)">APOIADORES</Header>
            <div className="ApoiadoresContent">
                <h1 className="text">Aqui estão alguns de nossos apoiadores!</h1>
                <div className="supporters">
                    <img src={cades}/>
                    <img src={casadascaldeiras}/>
                    <img src={missao_ambiental}/>
                    <img src={imt}/>
                    <img src={cades_vm}/>
                    <img src={casa_amarela}/>
                    <img src={museu_ipiranga} />
                    <img src={casa_o} />
                    <img src={muda_ipiranga}/>
                    <img src={etec_gv}/>
                    <img src={ciclo_vida}/>
                    <img src={insutituto_chao}/>
                </div>
                {/* <div className="full_supporters">
                    <ul className="full_supporters-list">
                        <li className="supporter">Comunidade do entorno</li>
                        <li className="supporter">Cades Ipiranga</li>
                        <li className="supporter">Cades Vila Mariana</li>
                        <li className="supporter">Casa Amarela</li>
                        <li className="supporter">Ocupação Elza Soares</li>
                        <li className="supporter">Museu do Ipiranga</li>
                        <li className="supporter">Casa Ó</li>
                        <li className="supporter">Casa das Caldeiras</li>
                        <li className="supporter">Missão Ambiental</li>
                        <li className="supporter">Muda Ipiranga</li>
                        <li className="supporter">Muda Mooca</li>
                        <li className="supporter">SOS Abelhas sem ferrão</li>
                        <li className="supporter">Gepem</li>
                        <li className="supporter">Ciclo Vida</li>
                        <li className="supporter">Ciclocidade</li>
                        <li className="supporter">Amazonia Passa Aqui</li>
                        <li className="supporter">MIUC- Mapeamento de Iniciativas Urbanas Climáticas</li>
                        <li className="supporter">Instituto Chão</li>
                        <li className="supporter">MST</li>
                        <li className="supporter">MTST</li>
                        <li className="supporter">Teia</li>
                        <li className="supporter">Federação Paulista de Skate</li>
                        <li className="supporter">Cine favela</li>
                        <li className="supporter">Instituto de engenharia</li>
                        <li className="supporter">Portela</li>
                        <li className="supporter">Brinco da Marquesa</li>
                        <li className="supporter">Bloco Feminista</li>
                        <li className="supporter">Escoteiros da Escola ao lado</li>
                        <li className="supporter">Psol</li>
                        <li className="supporter">PT</li>
                        <li className="supporter">Partido Verde</li>
                        <li className="supporter">UP</li>
                        <li className="supporter">Faculdade São Camilo</li>
                        <li className="supporter">Faculdade de Tecnologia Mauá</li>
                        <li className="supporter">FAU-USP - João Withaker</li>
                        <li className="supporter">Universidade Municipal de São Caetano</li>
                        <li className="supporter">Escola da Cidade</li>
                        <li className="supporter">Escola Nacional Paulo Freire</li>
                        <li className="supporter">ETEC GV</li>
                        <li className="supporter">Banda Trio Alvorada</li>
                        <li className="supporter">Banda Ó do Forró</li>
                        <li className="supporter">Bandas de rock do Festival da Usina</li>
                        <li className="supporter">Dep. Estadual - Eduardo Suplicy - PT</li>
                        <li className="supporter">Vereador - Luna - PT</li>
                        <li className="supporter">Vereadora Silvia Ferrado | Bancada Feminista - Psol</li>
                        <li className="supporter">Deputada Federal - Samia Bomfim - Psol</li>
                        <li className="supporter">Vereadora - Luana Alves - Psol</li>
                        <li className="supporter">Vereador - Celso Giannazi - Psol</li>
                        <li className="supporter">Dep. Estadual - Carlos Giannazi - Psol</li>
                        <li className="supporter">Dep. Federal - Luciene Giannazi - Psol</li>
                        <li className="supporter">Dep. Estadual - Guilherme Cortez - Psol</li>
                        <li className="supporter">Dep. Estadual - Marina Helou - Rede</li>
                        <li className="supporter">Dep. Estadual - Ediane Maria - Psol</li>
                        <li className="supporter">Vereador Nunes Peixeiro - MDB</li>
                        <li className="supporter">Vereador Aurelio Nomura - PSDB</li>
                        <li className="supporter">Ex- vereador Nabil Bonduki / André Ramos</li>
                        <li className="supporter">Secretária de Direitos Humanos Soninha Francine</li>
                        <li className="supporter">Taxistas do Metrô Santos Imigrantes</li>
                        <li className="supporter">Bar do Trecão</li>
                    </ul>
                </div> */}
            </div>
            <Footer />
        </div>
    )
}

export default Apoiadores