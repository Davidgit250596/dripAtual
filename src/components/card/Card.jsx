import "../../components/card/card.css";

export default function Card(props) {
  return (
    <>
      
      <div className="grade">
        <div className="imagem">
          <p className={props.oferta ? "balao" : ""}>
            {" "}
            {props.oferta ? "30% off" : null}
          </p>
          <img className="tenis" src={props.imgT} alt="Tênis" />
        </div>
        <div className="textos">
          <p className="textotenis">Tênis</p>
          <div className="modelo">
            <p className="modelotenis">{props.nome} </p>
          </div>
          <div className="preco">
            <p className="preco1">{props.preco}</p>
            {props.oferta ? <p className="preco2">{props.desconto}</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}
