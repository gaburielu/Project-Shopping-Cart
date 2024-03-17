import { useEffect, useState } from "react";
import {
  sumOfCart,
  getProductinCart,
  addToCart,
  removeFromCart,
  totalAmount,
} from "./utils";
import { AddOne, RemoveOne } from "./minor";
import "../styles/pages.css";

const Cart = ({ products, setProducts }) => {
  const [purchases, setPurchases] = useState([]);
  const [cartHasItem, setCartHasItem] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setCartHasItem(sumOfCart(products) > 0);
    setPurchases(getProductinCart(products));
    setTotal(totalAmount(products).toFixed(2));
  }, [products]);

  const handleAddToCart = (id) => {
    setProducts(addToCart(products, id));
  };

  const handleRemoveFromCart = (id) => {
    setProducts(removeFromCart(products, id));
  };

  return (
    <div className="cart-page">
      <div className="cart-container">
        {cartHasItem ? (
          <div className="cart-product">
            {purchases.map((item) => (
              <div key={item.id} className="cart-product-container">
                <div className="cart-img">
                  <img src={item.image} alt={`${item.title}`} />
                </div>
                <div className="cart-detail">
                  <div className="cart-detail-top">
                    <h3>{item.title}</h3>
                    <p>{item.price} $</p>
                  </div>
                  <div className="cart-detail-bottom">
                    <div> Amount: {item.cart}</div>

                    <div className="cart-button">
                      <RemoveOne
                        handleRemoveFromCart={(id) => handleRemoveFromCart(id)}
                        id={item.id}
                      />
                      <AddOne
                        handleAddToCart={(id) => handleAddToCart(id)}
                        id={item.id}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="cart-empty">Cart is Empty.</div>
        )}
        <div className="cart-checkout">
          <div className="checkout-top">
            <p>Amount &nbsp; &nbsp; &nbsp; &nbsp;: {total} $</p>
            <p>
              Tax &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; :&nbsp;
              {(total * 0.1).toFixed(2)} $
            </p>
            {cartHasItem ? (
              <p>Shipping &nbsp; &nbsp; &nbsp; : 20$</p>
            ) : (
              <p>Shipping &nbsp; &nbsp; &nbsp; : 0$</p>
            )}
          </div>
          <div className="checkout-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
