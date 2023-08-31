import { Link } from "react-router-dom";
import { useState, useContext} from "react";
import Search from "../components/Search";
import axios from "axios";
import { ProductsContext } from "../context/ProductsContext";

export default function Products() {
  
  let {products} = useContext(ProductsContext);
  const [listadoProductos, setListadoproductos] = useState(products);
  
  const handleInput = (e) => {
    axios
    .get("https://dummyjson.com/products/search?q="+e.target.value.toLowerCase())
    .then((result) => {
      setListadoproductos(result.data.products);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleFilter = (e) => {
    axios
    .get("https://dummyjson.com/products/category/"+e.target.value.toLowerCase())
    .then((result) => {
      setListadoproductos(result.data.products);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  if(products === undefined || products === null){
    return(
      <div>Loading...</div>
    )
  }
  else{
    return (
      <main>
        <Search handleInput={handleInput} handleFilter={handleFilter}/>
        <section className="product-list">
          {listadoProductos.map((producto) =>            
              <Link
                key={producto.id}
                className="product"
                to={"http://localhost:3000/products/" + producto.id}
                data-category="collars"
              >
                <img src={producto.images[1]} alt={producto.id} />
                <h1 className="product-title">{producto.title}</h1>
                <p className="product-price">${producto.price}</p>
                <button className="btn">SEE MORE</button>
              </Link>            
          )}
        </section>
      </main>
    );
  }
}
