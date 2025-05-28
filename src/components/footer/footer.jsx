import "./Footer.css"
import face from "../../assets/imgFooter/face.png"
import insta from "../../assets/imgFooter/insta.png"
import twitter from "../../assets/imgFooter/twitter.png"
import logo from "../../assets/imgFooter/logo.branca.png"


export default function Footer() {
  return (
    
     <footer>
    <div className="div-principal">
      <div className="div1">
        <img src={logo} alt="Logo da Digital College" />
        <p className="p-inicial">
            <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore.
        </p>
        <br/> <br/>

        <div className="redes">
          <a href="https://www.facebook.com/digitalcollegebr" target="_blank" rel="noopener noreferrer">
            <img src={face} alt="Ícone do Facebook" />
          </a>
          <a href="https://www.instagram.com/digitalcollegebr/" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Ícone do Instagram" />
          </a>
          <a href="https://x.com/i/flow/login?redirect_after_login=%2Feaicollegers" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Ícone do Twitter" />
          </a>
        </div>
      </div>

      <div className="div2">
        <h4>Informações</h4>
        <p>Sobre Drip Store</p>
        <p>Segurança</p>
        <p>Wishlist</p>
        <p>Blog</p>
        <p>Trabalhe conosco</p>
        <p>Meus Pedidos</p>
      </div>

      <div className="div3">
        <h4>Categorias</h4>
        <p>Camisetas</p>
        <p>Calças</p>
        <p>Bonés</p>
        <p>Headphones</p>
        <p>Tênis</p>
      </div>

      <div className="div4">
        <h4>Contato</h4>
        <a href="https://maps.app.goo.gl/THaUz1t2fvvUipAQ8" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
        </a>

        <a href="https://api.whatsapp.com/send/?phone=5585999721749&text&type=phone_number&app_absent=0&wame_ctl=1" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <p>(85) 3051-3411</p>
        </a>
        </div>
      </div>
      <hr/>
      <p className="p-final">© 2025 Digital College</p>

   </footer>
 
  );
}