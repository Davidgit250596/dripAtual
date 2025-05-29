import "../../components/airJordan/AirJordan.css"
import imgAirJordan from "../../assets/imgAirJordan/frame.png/"

export default function () {
    return (

        <section className="jordan">
            <div className="jordanGeral">
                <div className="jordanImg"><img src={imgAirJordan} alt="air jordan" />
                </div>

                <div className="divJordan">
                    <p className="jordanP1">Oferta especial</p>

                    <h2 className="jordanP2">Air Jordan edição de colecionador</h2>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,  sed
                        psa. Itaque, porro ut Architecto eius incidunt velit eaque illum hic,
                        odio sed qui praesentium autem minima porro voluptatibus sunt?
                    </p>

                    <div>
                        <a href="/Pagina2"><button className="buttonJordan">Ver ofertas</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}