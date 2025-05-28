import './Cadastro.css'
import logo from '../../assets/imgCadastro/logo.rosa.png'

export default function Cadastro(){
    return(
        <>
    
    <section className="cadastro">
    <div className="CriarConta">
        <h1>Criar Conta</h1>

        <p>Informações Pessoais</p>
        <hr className='hr1'/>
    </div>
    <form>
        <label className="labelCadastro" for="nome">Nome completo *</label>
        <input type="text" id="nome"
        placeholder="Insira seu nome" required/>
        
        <label className="labelCadastro" for="cpf">CPF *</label>
        <input type="text" required
        placeholder="Insira seu CPF" />

        <label className="labelCadastro" for="celular">Celular *</label>
        <input type="text" id="celular" required
        placeholder="Insira seu celular"/> 
    
    <div className="Entrega">
        <p>Informações de entrega</p>
        <hr className='hr2'/>
    </div>
       <label className="labelCadastro" for="endereco">Endereço *</label>
       <input type="text" id="endereco" required
       placeholder="Insira seu Endereço"/>

       <label className="labelCadastro" for="bairro">Bairro *</label>
       <input type="text" id="bairro" required
       placeholder="Insira seu bairro"/>

       <label className="labelCadastro" for="cidade">Cidade *</label>
       <input type="text" id="cidade" required
       placeholder="Insira sua cidade"/>

       <label className="labelCadastro" for="cep">CEP *</label>
       <input type="text" name="cep" id="cep"
       placeholder="Insira seu CEP"/>
       <br/><br/>
       
    <div className="DivTermo">
       <input type="checkbox" className="caixinhaTermo"/>
       <p className="ptermo">Quero receber por email ofertas e novidades das lojas da Digital Store. A frequência de envios pode variar de acordo com a interação do cliente</p>
       </div>
   
       <br/><br/>
       <button className="botao" type="submit">Criar Conta</button>
     </form>
     </section>
  
  
</>
);
}