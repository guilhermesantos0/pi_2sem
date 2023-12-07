import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/pages/Coletivo.css"

import usina1 from "../images/coletivo/usina1.png"
import descont from "../images/coletivo/descont.png"
import usina4 from "../images/coletivo/usina4.png"
import IMG_1661 from "../images/coletivo/IMG_1661.jpg"
import mato from "../images/coletivo/mato.png"
import IMG_1718 from "../images/coletivo/IMG_1718.jpg"


function Coletivo() {
    return(
        <div className="Coletivo">
            <Navbar tab="Coletivo" />
            <Header color="var(--theme-color4)">COLETIVO</Header>
            <div class="ColetivoContent">
                <div class="principal">
                    <h1 class="titulos">Como Surgiu</h1>
                    <div class="conteudo">
                        <div class="imagem">
                            <img src={usina1} alt="" class="imagem-1"/>
                        </div>
                        <div class="conteudo_texto">
                            <p>
                                O Coletivo Usina Eco-Cultural surgiu do descontentamento de moradores próximos à região do Ipiranga e do antigo Incinerador Vergueiro, que foi deixado ao abandono por mais de 20 anos. Arquitetos, urbanistas, ativistas, artistas e ambientalistas e pessoas de diversas profissões decidiram, desde 2019, se unir e discutir propostas de transformação e melhorias não apenas para o Incinerador, mas para a região como um todo. O coletivo é plural, multipartidário e horizontal.
                                <br/>
                                A proposta do movimento é readequar o espaço do que foi o Incinerador Vergueiro, transformando-o em um centro de cultura e estudos sobre o meio ambiente, mantendo viva a memória do que foi aquele espaço e proporcionando um local para reflexão sobre a cidade justa e democrática que desejamos no futuro.
                                <br/>
                                O objetivo principal é proporcionar à comunidade local um espaço revitalizado, representando não apenas um marco cultural, mas também um gesto de reparação histórica após décadas de abandono. A Usina Eco-Cultural surge como um ponto de encontro e convivência para a comunidade, contribuindo para fortalecer os laços sociais de quem vive na região.
                            </p>
                        </div>
                    </div>
                    <h1 class="titulos">Propostas</h1>
                    <h2 class="sub_titulos">Descontaminação do espaço</h2>
                    <div class="conteudo">
                        <div class="imagem">
                            <img src={descont} alt="" class="imagem-1"/>
                        </div>
                        <div class="conteudo_texto">
                            <p>
                                Estudos sobre a condição do terreno e entornos: Recentemente, a prefeitura foi multada por adiar a entrega dos relatórios sobre a contaminação do espaço. A CETESB aplicou uma multa em relação à ausência de resposta da prefeitura sobre uma solicitação de informações sobre contaminações feita pela Usina pouco antes de darmos início oficialmente ao movimento. Sendo assim, a prefeitura não tem laudos sobre a contaminação do terreno e regiões afetadas pela queima de lixo. Por isso, é prioridade do coletivo a realização desses estudos para garantir a segurança de todos os moradores e frequentadores da Usina.
                                <br/>
                                Atualmente, a prefeitura não possui laudos sobre a contaminação do terreno e das áreas afetadas pela queima de lixo. Precisamos desses estudos para garantir a segurança de todos os moradores e frequentadores do Ipiranga. As informações que temos indicam que o abandono é o principal fator de contaminação, com a presença de pombos, entre outros. O local tem atraído moradores de rua e usuários de drogas, gerando uma sensação de insegurança para a população. O espaço não pode permanecer como está!

                            </p>
                        </div>
                    </div>
                    <h2 class="sub_titulos">Polo Cultural do Ipiranga</h2>
                    <div class="conteudo">
                        <div class="imagem">
                            <img src={usina4} alt="" class="imagem-1"/>
                        </div>
                        <div class="conteudo_texto">
                            <p>
                                No primeiro ano de nossa atuação, percebemos uma carência de cultura e ações voltadas para a educação ambiental na região. Isso fortalece ainda mais nosso coletivo e está alinhado com nossos objetivos. Precisamos de um espaço onde possamos debater e discutir a cidade que queremos, afinal, temos direito à cidade. Desde o início do movimento, já realizamos diversas ações de cultura.
                            </p>
                        </div>
                    </div>
                    <h2 class="sub_titulos">Melhorias na região</h2>
                    <div class="conteudo">
                        <div class="imagem">
                            <img src={IMG_1661} alt="" class="imagem-1"/>
                        </div>
                        <div class="conteudo_texto">
                            <p>
                                O espaço abandonado há mais de 20 anos gera uma sensação de insegurança em seu entorno. A readequação do espaço traz mais segurança para a área e valorização para toda a região. Antes de ocuparmos o espaço, usuários de drogas estavam frequentando o local.
                                <br/>
                                Não podemos permitir que o terreno seja usado para construir mais um prédio residencial no bairro; a área é de extrema relevância e deve ser usada em prol dos cidadãos. A região necessita de espaços de cultura e de discussão da cidade que queremos.
                            </p>
                        </div>
                    </div>
                    <h2 class="sub_titulos">Museu do Meio Ambiente</h2>
                    <div class="conteudo">
                        <div class="imagem">
                            <img src={mato} alt="" class="imagem-1"/>
                        </div>
                        <div class="conteudo_texto">
                            <p>
                                Na Usina, a educação ambiental é protagonista. A ideia é que a área da Usina seja um local para o ensino de educação ambiental e experiências práticas, como o plantio de espécies nativas, hortas suspensas (sem conexão com o solo, devido à condição desconhecida do solo) e atividades de compostagem, ensinando a população a descartar corretamente o lixo orgânico.
                                <br/>
                                A proposta do Museu do Meio Ambiente é um sonho coletivo de todos aqueles que acreditam que o local deve ser ressignificado, devolvendo à população um espaço semelhante ao que foi feito no Incinerador de Pinheiros, próximo à praça Victor Civita. O Museu do Meio Ambiente faz parte de um Projeto de Lei que está na Câmara Municipal de São Paulo, que tem o objetivo de criar um Parque Linear que ligaria o Parque das Águas, no Jardim Botânico, ao Parque da Independência, no Museu do Ipiranga. Esse parque passaria pela Avenida Ricardo Jafet,  acompanhando o famoso riacho do Ipiranga, tão presente na história do nosso país e também no nosso hino.
                                <br/>
                                O museu fará parte do Corredor Verde, projeto que busca fazer um parque linear que passa ao lado do terreno da Usina, na Av. Ricardo Jafet.
                            </p>
                        </div>
                    </div>
                    <h2 class="sub_titulos">Programa Ruas Abertas </h2>
                    <div class="conteudo">
                        <div class="imagem">
                            <img src={IMG_1718} alt="" class="imagem-1"/>
                        </div>
                        <div class="conteudo_texto">
                            <p>
                                Política pública que fecha a rua aos domingos e permite que a população use para brincadeiras, a ideia é que a Rua Breno Ferraz do Amaral em frente a Usina seja uma via dentro do programa Ruas Abertas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Coletivo