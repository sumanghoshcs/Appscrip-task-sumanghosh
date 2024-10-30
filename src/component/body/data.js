import React, { useState, useEffect, createContext, useContext } from 'react';

// Create a Context for the Shop
export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [data, setData] = useState([]); // Initialize as an empty array

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((json) => {
        if (Array.isArray(json)) {
          const uniqueData = Array.from(
            new Map(json.map((item) => [item.id, item])).values()
          );
          setData(uniqueData);
        } else {
          console.error("Expected an array, received:", json);
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setData([]);
      });
  }, []);

  return (
    <ShopContext.Provider value={data}>
      {children}
    </ShopContext.Provider>
  );
};

// Custom hook to use the ShopContext
export const useShopData = () => {
  return useContext(ShopContext);
};
