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
                        <span className="trintaOff">30% OFF</span>
                        <h1 className="novoDrop">Novo Drop Supreme</h1>
                        <a href="/Pagina2"><button className="btn-ComprarSupreme">Comprar</button></a>
                    </div>
                    <img src={BlusaSupreme} alt="" />
                </div>

                <div className="divSapatoAdidas">
                    <div>
                        <span className="trintaOffDois">30% OFF</span>
                        <h1 className="novoDropDois">Coleção Adidas</h1>
                        <a href="/pagina2"><button className="btn-ComprarAdidas">Comprar</button></a>
                    </div>
                    <img src={SapatoAdidas} alt="" />
                </div>

                <div className="divFoneBeatsBass">
                    <div>
                        <span className="trintaOffTres">30% OFF</span>
                        <h1 className="novoDropTres">Novo Beats Bass</h1>
                        <a href="/pagina2"><button className="btn-ComprarFone">Comprar</button></a>
                    </div>
                    <img src={FoneDeOuvido} alt="" />
                </div>
            </div>
        </section>
    );
}
