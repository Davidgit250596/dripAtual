import "../../components/colecao2/colecao2.css";
import Blusa from "../../assets/imgColecao2/t-shirth.png";
import Calca from "../../assets/imgColecao2/calça.png";
import Bone from "../../assets/imgColecao2/bone.png";
import HeadPhone from "../../assets/imgColecao2/headphone.png";
import Tenis from "../../assets/imgColecao2/tenis.png";

export default function () {
    return (
        <section className="colecoesEmDestaqueDois">

            <div className="divPrincipalIcones">
                <div>
                    <h1 className="textoColecoesUm">Coleções em destaques</h1>
                </div>
                <section className="secPrincipalIcones">

                    <div className="iconesColecoes">
                        <section className="secBlusas">
                            <div className="blusas">
                                <a href="/Pagina2"><img src={Blusa} alt="" /></a>
                            </div>
                            <div className="textoBlusa">Blusas</div>
                        </section>

                        <section className="secCalcas">
                            <div className="calcas">
                                <a href="/Pagina2"><img src={Calca} alt="" /></a>
                            </div>
                            <div className="textoCalca">Calças</div>
                        </section>

                        <section className="secBones">
                            <div className="bones">
                                <a href="/Pagina2"><img src={Bone} width="70px" alt="" /></a>
                            </div>
                            <div className="textoBones">Bonés</div>
                        </section>

                        <section className="secHeadPhones">

                            <div className="headPhones">
                                <a href="/Pagina2"><img src={HeadPhone} alt="" /></a>
                            </div>
                            <div className="textoHeadPhones">HeadPhones</div>
                        </section>

                        <section className="secTenis">
                            <div className="sapatin">
                                <a href="/Pagina2"> <img src={Tenis} alt="" /></a>
                            </div>
                            <div className="textoSapatoColecao">Ténis</div>
                        </section>
                    </div>
                </section>
            </div>
        </section>
    );
}