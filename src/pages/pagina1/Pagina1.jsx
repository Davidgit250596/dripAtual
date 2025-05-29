import Carrossel1 from "../../components/carrossel1/Carrossel1";
import Colecao1 from "../../components/colecao1/Colecao1";
import Colecao2 from "../../components/colecao2/colecao2";
import AirJordan from "../../components/airJordan/AirJordan";
import ProdutosEmAlta from "../../components/sectionProdutosAlta/ProdutosEmAlta";
import Card from "../../components/card/Card";
import "./pagina1.css";

export default function Pagina1() {
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
    {
      nome: "Calenciaga Triple S",
      imgT: "src/assets/img/Tenis.png",
      preco: "$800",
      desconto: "$400",
      oferta: false,
    },
    {
      nome: "Nike Air Force",
      imgT: "src/assets/img/Tenis.png",
      preco: "$450",
      desconto: "225",
    },
    {
      nome: "Adidas Superstar",
      imgT: "src/assets/img/Tenis.png",
      preco: "$350",
      desconto: "$175",
    },
    {
      nome: "Puma Suede",
      imgT: "src/assets/img/Tenis.png",
      preco: "$300",
      desconto: "$150",
    },
  ];
  return (
    <>
      <Carrossel1 />
      <Colecao1 />
      <Colecao2 />
      <ProdutosEmAlta />
      <div className="cartao">

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
      </div>

        <AirJordan />
    </>
  );
}