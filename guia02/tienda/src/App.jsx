import React from "react";
import './App.css';
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <div className="App">
        <h1>Tienda</h1>
        <h3>Lista de Productos</h3>
        <ProductList />
      </div>
  );
}
export default App;