import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "../navbar/Navbar.css";
import "../navbar/Navbar.css";
import { ShopContext } from "../context/shop-context";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">SHOP</Link>
        <Link to="">SKILLS</Link>
        <Link to="">STORIES</Link>
        <Link to="">ABOUT</Link>
        <Link to="">CONTACT US</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
          {Object.values(cartItems).reduce((acc, item) => acc + item) > 0 && (
            <span>
              {Object.values(cartItems).reduce((acc, item) => acc + item)}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};
