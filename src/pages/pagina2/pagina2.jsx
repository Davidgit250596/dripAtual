import Card from "../../components/card/Card"
import Filtro from "../../components/filtro/filtro"
import Footer from "../../components/footer/footer"
import "./pagina2.css"

export default function Pagina2() {
    const cards = [
        { nome: "K-Swiss V8", imgT: "src/assets/img/Tenis.png", preco: <span style={{textDecoration: 'line-through'}}>$300</span>, desconto: "$150", oferta: true },
        { nome: "Nike Air Max", imgT: "src/assets/img/Tenis.png", preco: <span style={{textDecoration:'line-through'}}>$400</span>, desconto: "$200", oferta: true },
        { nome: "Adidas Ultraboost", imgT: "src/assets/img/Tenis.png", preco: <span style={{textDecoration: 'line-through'}}>$500</span>, desconto: "$250", oferta: true },
        { nome: "Puma RS-X", imgT: "src/assets/img/Tenis.png", preco: "$350", desconto: "$175", oferta: false},
        { nome: "Calenciaga Triple S", imgT: "src/assets/img/Tenis.png", preco: "$800", desconto: "$400",oferta: false },
        { nome: "Nike Air Force", imgT: "src/assets/img/Tenis.png", preco: "$450", desconto: "225" },
        { nome: "Adidas Superstar", imgT: "src/assets/img/Tenis.png", preco: "$350", desconto: "$175" },      
        { nome: "Puma Suede", imgT: "src/assets/img/Tenis.png", preco: "$300", desconto: "$150" },     
        { nome: "K-Swiss Classic", imgT: "src/assets/img/Tenis.png", preco: "$250", desconto: "$125" },
        { nome: "Nike React", imgT: "src/assets/img/Tenis.png", preco: "$400", desconto: "$200" },
        { nome: "Adidas NMD", imgT: "src/assets/img/Tenis.png", preco: "$600", desconto: "$300" },
        { nome: "Puma Clyde", imgT: "src/assets/img/Tenis.png", preco: "$350", desconto: "$175" },
        { nome: "Calenciaga Speed", imgT: "src/assets/img/Tenis.png", preco: "$700", desconto: "$350" },
        { nome: "Nike Blazer", imgT: "src/assets/img/Tenis.png", preco: "$400", desconto: "$200" },
        { nome: "Adidas Stan Smith", imgT: "src/assets/img/Tenis.png", preco: "$300", desconto: "$150" },
      
        
    ]


    return (
        <>
            <div className="pagina2">
                <div className="filtro"><Filtro /></div>
                <div className="card">
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

           

        </>


                )
            }