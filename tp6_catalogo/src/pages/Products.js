
import { Link } from "react-router-dom";

export default function Products({productos}) {

  return (
    <main>
      <section className="search-filter">
        <label>Search:</label>
        <input type="text" id="search" placeholder="Search products..." />
        <label>Filter By:</label>
        <select id="category">
          <option value="all">All Categories</option>
          <option value="rings">Rings</option>
          <option value="collars">Collars</option>
          {/* <!-- Add more categories as needed --> */}
        </select>
      </section>
      <section className="product-list">
        {productos.map((producto, id) => (
            <Link key={id} className="product" to={"http://localhost:3000/products/"+id} data-category="collars">
                <img
                    src={producto.img}
                    alt={id}
                />
                <h1 className="product-title">{producto.name}</h1>
                <p className="product-price">${producto.price}</p>
                <button className="btn">SEE MORE</button>
            </Link>
        ))}        
      </section>
    </main>
  );
}
