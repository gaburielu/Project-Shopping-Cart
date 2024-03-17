import "../styles/pages.css";

import { AddToCartBtn } from "./minor";
import { addToCart } from "./utils";

const Shop = ({ products, setProducts }) => {
  return (
    <div className="shop-page">
      <Products products={products} setProducts={setProducts} />
    </div>
  );
};

const Products = ({ products, setProducts }) => {
  const handleAddToCart = (id) => {
    setProducts(addToCart(products, id));
  };

  return (
    <div className="shop-container">
      {products.map((item) => (
        <div key={item.id} className="products-container">
          <div className="products-image">
            <img src={item.image} alt={`${item.title}`} />
          </div>
          <div className="products-detail">
            <h3>{item.title}</h3>
            <AddToCartBtn
              className="addtocart-btn"
              handleAddToCart={(id) => handleAddToCart(id)}
              id={item.id}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
