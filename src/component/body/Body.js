import React, { useState } from "react";
import { PRODUCTS } from "../Product";
import { Product } from "../body/ProductPage";
import { CaretLeft } from "phosphor-react";
import ReactSelect from "../body/NewReactSelect";

export const Body = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <div
          style={{
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.3)",
            padding: "20px",
            marginTop: "-30px",
          }}
        >
          {" "}
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          </p>
          <p style={{ marginTop: "-10px" }}>
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
          justifyContent: "space-between",
          marginLeft: "10px",
          marginRight: "10px",
          borderTop: "1px solid #e5e5e5",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <div>
          <p style={{ fontWeight: "bold" }}>3425 ITEMS</p>
        </div>
        <div className="filteritem">
          <CaretLeft size={20} style={{ marginTop: "16px" }} />
          <p
            style={{
              color: "#878792",
              borderBottom: "1px solid #878792",
              cursor: "pointer",
            }}
            onClick={toggleMenu}
          >
            HIDE FILTER
          </p>
        </div>
        <div>
          {/* <p style={{ fontWeight: "bold" }}>RECOMMENDED</p> */}
          <ReactSelect />
        </div>
      </div>
      <div
        className="products"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {/* {PRODUCTS.map((product) => ( */}
        <Product
          // data={product}
          isMenuVisible={isMenuVisible}
          setIsMenuVisible={setIsMenuVisible}
        />
        {/* ))} */}
      </div>
    </div>
  );
};
export default Body;
