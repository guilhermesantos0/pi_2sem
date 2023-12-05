import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/pages/Loja.css"

function Loja () {

    const addToCart = () => {
        window.alert("Item adicionado ao carrinho!")
    }

    return(
        <div className="Loja">
            <Navbar tab="Loja" />
                <div className="LojaContent">
                    <Header color="var(--theme-color1)">LOJA</Header>
                    <div className="body-prod">
                        <div className="categorias">
                            <div><h4>Categorias dos Produtos</h4></div>
                            <div className="list">
                                <li><a href="">Categoria 1</a></li>
                                <li><a href="">Categoria 2</a></li>
                                <li><a href="">Categoria 3</a></li>
                                <li><a href="">Categoria 4</a></li>
                            </div>
                        </div>
                        <div className="produtos" >
                            <div className="prod">
                                <img src="https://www.cliffrailwaylynton.co.uk/wp-content/uploads/2018/01/250x250-Placeholder.png" alt="produto1" />
                                <b><p className="desc">Produto 1</p></b>
                                <b><p className="price">Preço 1</p></b>
                                <button type="button" className="but-comprar" onClick={addToCart}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> ADICIONAR AO CARRINHO</button>
                            </div>
                            <div className="prod">
                                <img src="https://www.cliffrailwaylynton.co.uk/wp-content/uploads/2018/01/250x250-Placeholder.png" alt="produto2" />
                                <b><p className="desc">Produto 2</p></b>
                                <b><p className="price">Preço 2</p></b>
                                <button type="button" className="but-comprar" onClick={addToCart}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> ADICIONAR AO CARRINHO</button>
                            </div>
                            <div className="prod">
                                <img src="https://www.cliffrailwaylynton.co.uk/wp-content/uploads/2018/01/250x250-Placeholder.png" alt="produto3"/>
                                <b><p className="desc">Produto 3</p></b>
                                <b><p className="price">Preço 3</p></b>
                                <button type="button" className="but-comprar" onClick={addToCart}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> ADICIONAR AO CARRINHO</button>
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Loja