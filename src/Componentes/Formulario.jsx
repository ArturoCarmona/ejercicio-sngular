import React, { useState } from "react";
import Calculador from "./Calculador";

function Formulario({ onSubmit }) {
  const [inputNum, setInputNum] = useState("");

  const handleChange = (event) => {
    setInputNum(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputNum);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Número:
        <input type="number" value={inputNum} onChange={handleChange} />
      </label>
      <button type="submit">Calcular</button>
    </form>
  );
}

export default Formulario;
