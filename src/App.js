import logo from "./logo.svg";
import "./App.css";
import navbar from "./components/navbar";
import ProductList from "./components/ProductList";

function App() {

  const productlist = [
    {
      price: 99999,
      name: "Iphone",
      quantity: 0,
    },
    {
      price: 9999,
      name: "redmi",
      quantity: 0,
    },
  ];
  return (
    <>
      <navbar />
      <ProductList productlist={productlist} />
      <h1>xyz</h1>
    </>
  );
}

export default navbar;
