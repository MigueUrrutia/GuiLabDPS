import React from "react";
import './App.css';
import Form from "./components/Form";

const App = () => {
  return (
    <div className="App">
      <div className="App-content">
        <h2>
          Lista de cosas por hacer
        </h2>
        <Form />
      </div>
    </div>
  );
}
export default App;