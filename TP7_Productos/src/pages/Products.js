import { useState, useContext} from "react";
import Search from "../components/Search";
import axios from "axios";
import { ProductsContext } from "../context/ProductsContext";
import Product from "../components/Product";

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
            <Product producto={producto} url={"http://localhost:3000/products/" + producto.id} showProductDetail={true}/>           
          )}
        </section>
      </main>
    );
  }
}
