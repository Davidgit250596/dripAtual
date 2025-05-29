import "../../components/carrossel1/carrossel1.css";
import ImgFoguinho from "../../assets/imgCarrossel1/foguinho.png";
import ImgSapato from "../../assets/imgCarrossel1/sapato.png";
import ImgBolinhaSapato from "../../assets/imgCarrossel1/Ornament11.png";
import Img1 from "../../assets/imgCarrossel1/1home-slide-.jpeg";
import Img2 from "../../assets/imgCarrossel1/2home-slide-.jpeg";
import Img3 from "../../assets/imgCarrossel1/3home-slide-.jpeg";
import Img4 from "../../assets/imgCarrossel1/5home-slide-.jpeg";



export default function () {
    return (
        
        <section className="sectionqueimaestoque">

            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">


                <div className="carousel-indicators">

                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>

                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>

                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>

                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>

                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4"
                        aria-label="Slide 5"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="3000">

                        <div className="divqueima">

                            <div className="melhoresofertas">
                                <h4 className="melhores">Melhores ofertas personalizadas</h4>

                                <h1 className="queimadeestoque">Queima de estoque Nike</h1>

                                <img className="imgfoguinho" src={ImgFoguinho} width="50px" alt=""/>

                                    <h1 className="consequat">Consequat culpa exercitation mollit nisi excepteur do do tempor
                                        laboris
                                        eiusmod irure consectetur.</h1>

                                    <a href="/Pagina2"><button type="button" className="btn-verofertas">Ver
                                        Ofertas</button></a>
                            </div>

                            <div className="sapato">
                                <img src={ImgSapato} alt=""/>
                            </div>

                            <div>
                                <img className="bolinhasapato" src={ImgBolinhaSapato} alt="" />
                            </div>

                        </div>

                    </div>


                    <div className="carousel-item itensDoCarrossel" data-bs-interval="3000">
                        <img src={Img1} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                    </div>

                    <div className="carousel-item itensDoCarrossel" data-bs-interval="3000">
                        <img src={Img2} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                    </div>

                    <div className="carousel-item itensDoCarrossel" data-bs-interval="3000">
                        <img src={Img3} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                    </div>

                    <div className="carousel-item itensDoCarrossel" data-bs-interval="3000">
                        <img src={Img4} className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">

                            </div>
                    </div>


                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>

        </section>
    );
}