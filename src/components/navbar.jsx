import { Link } from "react-router-dom";
import "../styles/home.css";
import { useEffect, useState } from "react";
import { sumOfCart } from "./utils";

const Navbar = ({ products }) => {
  const [cartHasItem, setCartHasItem] = useState(false);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    setAmount(sumOfCart(products));
    setCartHasItem(sumOfCart(products) > 0);
  }, [products]);

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/main">
            <h2>HOME</h2>
          </Link>
        </li>
        <li>
          <Link to="/shop">
            <h2>SHOP</h2>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            {cartHasItem ? <CartHasItem amount={amount} /> : <CartNoItem />}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const CartNoItem = () => {
  return <h2>CART</h2>;
};

const CartHasItem = ({ amount }) => {
  return (
    <div className="test">
      <h2>CART</h2>
      <div className="dot">{amount}</div>
    </div>
  );
};

export default Navbar;
