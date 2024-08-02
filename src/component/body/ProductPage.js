import "./ProductPage.css";
import React, { useEffect, useContext, useState } from "react";
import { ShopContext } from "../../component/context/shop-context";
import Menu from "../body/menu";
import { Heart } from "phosphor-react";

export const Product = (props) => {
  const [data, setData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        // Check if the response is OK
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        if (Array.isArray(json)) {
          // Filter out duplicates based on the product id
          const uniqueData = Array.from(
            new Map(json.map((item) => [item.id, item])).values()
          );
          setData(uniqueData); // Set data with unique products
        } else {
          console.error("Expected an array, received:", json);
          setData([]); // Ensure data is an array even if there's an issue
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setData([]); // Set data to empty array on error
      });
  }, []);

  const { addToCart, cartItems } = useContext(ShopContext);

  // Conditional rendering for when data is not an array or empty
  if (!Array.isArray(data) || data.length === 0) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={{ display: props.isMenuVisible ? "block" : "none" }}>
          <Menu
            isMenuVisible={props.isMenuVisible}
            setIsMenuVisible={props.setIsMenuVisible}
          ></Menu>
        </div>
        <div className={props.isMenuVisible ? "product-list" : "product-list2"}>
          {data.map((item) => (
            <div key={item.id} className="product">
              <img src={item.image} alt={item.title} />
              <div className="description">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p className="text-container">{item.title}</p>
                </div>
                {/* <p>${item.price}</p> */}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "-50px",
                }}
              >
                <Heart size={32} />
              </div>

              {/* <button className="addToCartBtn" onClick={() => addToCart(item.id)}>
            Add To Cart {cartItems[item.id] > 0 && <> ({cartItems[item.id]})</>}
          </button> */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
