import "./App.css";
import Body from "./body/Body";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "../component/body/Cart";
import { MagnifyingGlass, Heart, Handbag, User, Star } from "phosphor-react";
import { ShopContextProvider } from "./context/shop-context";
import { Navbar } from "./navbar/Navbar";
function App() {
  return (
    <div className="App">
      {/* <h1>Wellcome to our Thor Ecommerce Website</h1> */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "15px",
          margin: "5px",
          padding: "5px",
        }}
      >
        <div>
          <Star size={32} style={{ cursor: "pointer" }} />
        </div>
        <div style={{ marginTop: "-22px" }}>
          <h1 style={{ cursor: "pointer" }}>LOGO</h1>
        </div>
        <div>
          <MagnifyingGlass size={32} style={{ cursor: "pointer" }} />
          <Heart size={32} style={{ cursor: "pointer" }} />
          <Handbag size={32} style={{ cursor: "pointer" }} />
          <User size={32} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
