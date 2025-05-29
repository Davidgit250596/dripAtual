

import "./pagina3.css";
import Pcategorias from "../../components/categorias/Pcategorias";
import Card from "../../components/card/Card";


export default function Pagina3() {
  const cards = [
    {
      nome: "K-Swiss V8",
      imgT: "src/assets/img/Tenis.png",
      preco: <span style={{ textDecoration: "line-through" }}>$300</span>,
      desconto: "$150",
      oferta: true,
    },
    {
      nome: "Nike Air Max",
      imgT: "src/assets/img/Tenis.png",
      preco: <span style={{ textDecoration: "line-through" }}>$400</span>,
      desconto: "$200",
      oferta: true,
    },
    {
      nome: "Adidas Ultraboost",
      imgT: "src/assets/img/Tenis.png",
      preco: <span style={{ textDecoration: "line-through" }}>$500</span>,
      desconto: "$250",
      oferta: true,
    },
    {
      nome: "Puma RS-X",
      imgT: "src/assets/img/Tenis.png",
      preco: "$350",
      desconto: "$175",
      oferta: false,
    },
   
   
  ];
  return (
    <>
      <Pcategorias />
      <div className="card-container">
        {cards.map((card) => (
          <Card
          key={card.nome}
          nome={card.nome}
          imgT={card.imgT}
          preco={card.preco}
          desconto={card.desconto}
          oferta={card.oferta}
          />
        ))}
      </div>
    </>
  );
}