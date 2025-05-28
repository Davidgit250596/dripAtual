import "../../components/colecao1/colecao1.css"
import BlusaSupreme from "../../assets/imgColecao1/BlusaSupreme.png"
import SapatoAdidas from "../../assets/imgColecao1/SapatoUm.png"
import FoneDeOuvido from "../../assets/imgColecao1/Fonedeouvido.png"

export default function () {
    return (

        <section className="colecoesEmDestaqueUm">

            <h1 className="textoColecoesUm">Coleções em destaques</h1>

            <div className="divPrincipalColecoes">

                <div className="divBlusaSupreme">
                    <div>
                        <span className="trintaoff">30% OFF</span>

                        <h1 className="novodrop">Novo Drop Supreme</h1>
                        <a href="../pagina2/pagina2.html"><button className="btncomprarsupreme">Comprar</button></a>
                    </div>

                    <img src={BlusaSupreme} alt="" />

                </div>

                <div className="divSapatoAdidas">
                    <div>
                        <span className="trintaoffdois">30% OFF</span>

                        <h1 className="novodropdois">Coleção Adidas</h1>

                        <a href="../pagina2/pagina2.html"><button className="btncompraradidas">Comprar</button></a>
                    </div>

                    <img src={SapatoAdidas} alt="" />
                </div>

                <div className="divFoneBeatsBass">
                    <div>
                        <span className="trintaofftres">30% OFF</span>

                        <h1 className="novodroptres">Novo Beats Bass</h1>

                        <a href="../pagina2/pagina2.html"><button className="btncomprarfone">Comprar</button></a>
                    </div>

                    <img src={FoneDeOuvido} alt="" />
                </div>


            </div>
        </section>

    );
}
