import "./Filtro.css";

export default function Filtro() {
  return (
    // <main className="principal">
    <section className="filtro1">
      <div className="geral">
        <p className="categorias" id="um">
          Filtrar por
        </p>
        <hr />
        {/* <p className="linha"></p> */}
        <p className="categorias">Marca</p>
        <div className="marcador">
          <input type="checkbox" id="filtro" name="marca" value="adidas" />
          <label className="nomes" for="adidas"> Adidas </label>
        </div>
        <div className="marcador">
          <input type="checkbox" id="filtro" name="marca" value="calenciaga" />
          <label className="nomes" for="calenciaga"> Calenciaga </label>
        </div>
        <div className="marcador">
          <input type="checkbox" id="filtro" name="marca" value="kswiss" />
          <label className="nomes" for="kswiss">K-Swiss</label>
        </div>
        <div className="marcador">
          <input type="checkbox" id="filtro" name="marca" value="nike" />
          <label className="nomes" for="nike">Nike</label>
        </div>
        <div className="marcador">
          <input type="checkbox" id="filtro" name="marca" value="puma" />
          <label className="nomes" for="puma">Puma</label>
        </div>
        <p className="categorias">Categoria</p>
        <div className="marcador">
          <input
            type="checkbox"
            id="filtro"
            name="categoria"
            value="esporteLazer"
          />
          <label className="nomes" for="esporteLazer">Esporte e Lazer</label>
        </div>
        <div class="marcador">
          <input type="checkbox" id="filtro" name="categoria" value="casual" />
          <label className="nomes" for="casual">Casual</label>
        </div>
        <div className="marcador">
          <input
            type="checkbox"
            id="filtro"
            name="categoria"
            value="utilitario"
          />
          <label className="nomes" for="utilitario">Utilitário</label>
        </div>
        <div className="marcador">
          <input type="checkbox" id="filtro" name="categoria" value="corrida" />
          <label className="nomes" for="corrida">Corrida</label>
        </div>
        <p className="categorias">Gênero</p>
        <div className="marcador">
          <input type="checkbox" id="filtro" name="genero" value="masculino" />
          <label className="nomes" for="masculino">Masculino</label>
        </div>
        <div className="marcador">
          <input type="checkbox" id="filtro" name="genero" value="feminino" />
          <label className="nomes" for="feminino">Feminino</label>
        </div>
        <div className="marcador">
          <input type="checkbox" id="filtro" name="genero" value="unisex" />
          <label className="nomes" for="unisex">Unisex</label>
        </div>
        <p className="categorias">Estado</p>
        <div className="marcador">
          <input type="radio" id="filtro" name="estado" value="novo" />
          <label className="nomes" for="novo">Novo</label>
        </div>
        <div className="marcador">
          <input type="radio" id="filtro" name="estado" value="usado" />
          <label className="nomes" for="usado">Usado</label>
        </div>
      </div>
    </section>
    // </main>
  );
}
