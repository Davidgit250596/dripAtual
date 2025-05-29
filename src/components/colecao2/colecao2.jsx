import "../../components/colecao2/colecao2.css";
import Blusa from "../../assets/imgColecao2/t-shirth.png";
import Calca from "../../assets/imgColecao2/calça.png";
import Bone from "../../assets/imgColecao2/bone.png";
import HeadPhone from "../../assets/imgColecao2/headphone.png";
import Tenis from "../../assets/imgColecao2/tenis.png";


export default function () {
    return (
        <section className="colecoesEmDestaqueDois">
            <div className="divprincipalicones">

                <div>
                    <h1 className="textoColecoesUm">Coleções em destaques</h1>
                </div>

                <section className="secprincipalicones">

                    <div className="iconescolecoes">
                        <section className="secblusas">
                            <div className="blusas">
                                <a href="/Pagina2"><img src={Blusa} alt="" /></a>
                            </div>
                            <div className="textoblusa">Blusas</div>
                        </section>

                        <section className="seccalcas">
                            <div className="calcas">
                                <a href="/Pagina2"><img src={Calca} alt="" /></a>
                            </div>
                            <div className="textocalca">Calças</div>
                        </section>

                        <section className="secbones">

                            <div className="bones">
                                <a href="/Pagina2"><img src={Bone} width="70px" alt="" /></a>
                            </div>
                            <div className="textobones">Bonés</div>
                        </section>

                        <section className="secheadphones">

                            <div className="headphones">
                                <a href="/Pagina2"><img src={HeadPhone} alt="" /></a>
                            </div>
                            <div className="textoheadphones">HeadPhones</div>
                        </section>

                        <section className="sectenis">
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