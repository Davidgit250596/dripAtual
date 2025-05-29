import "../filtrar/Searchfor.css";

export default function Searchfor() {
  return (
    <section>
      <div className="result-t">
        <p>Resultado para "Tênis" - 389 produtos encontrados</p>
      </div>
      <div className="search-Filter">

        <select name="cars" id="cars" className="select-search">
          <option value="volvo">Tenis</option>
          <option value="saab">Camisas</option>
          <option value="mercedes">Bonés</option>

        </select>


      </div>
    </section>
  );
}
