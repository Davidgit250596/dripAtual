import "../filtrar/Searchfor.css";

export default function Searchfor() {
  return (
    <section>
      <div className="result-t">
        <p>Resultado para "Tênis" - 389 produtos encontrados</p>
      </div>
      <div className="search-Filter">
        <input
          type="search"
          className="search-inside"
          placeholder="Filtrar por"
        />
      </div>
    </section>
  );
}
