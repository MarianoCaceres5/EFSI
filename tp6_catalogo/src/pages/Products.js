import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "../components/Search";

export default function Products({ productos }) {
  const [busqueda, setBusqueda] = useState("");
  const [filtro, setFiltro] = useState("all");

  const handleInput = (e) => {
    setBusqueda(e.target.value.toLowerCase());
  };

  const handleFilter = (e) => {
    setFiltro(e.target.value.toLowerCase());
  };

  return (
    <main>
      <Search handleInput={handleInput} handleFilter={handleFilter}/>
      <section className="product-list">
        {productos.map((producto, id) =>
          producto.name.toLowerCase().includes(busqueda) && (producto.category.toLowerCase() === filtro || filtro === 'all') ? (
            <Link
              key={id}
              className="product"
              to={"http://localhost:3000/products/" + id}
              data-category="collars"
            >
              <img src={producto.img} alt={id} />
              <h1 className="product-title">{producto.name}</h1>
              <p className="product-price">${producto.price}</p>
              <button className="btn">SEE MORE</button>
            </Link>
          ) : (
            <div key={id}></div>
          )
        )}
      </section>
    </main>
  );
}
