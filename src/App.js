import "./App.css";
import React, { useState } from "react";
import Formulario from "./Componentes/Formulario";
import Calculador from "./Componentes/SerieCalculador";
import Resultado from "./Componentes/Resultado";

function App() {
  const [n, setN] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSubmit = (inputValor) => {
    setN(inputValor);
  };

  return (
    <div className="App">
      <h1>Calculadora de serie</h1>
      <Formulario onSubmit={handleSubmit} />
      <Calculador n={n} setResult={setResultado} />
      <Resultado resultado={resultado} />

    </div>
  );
}

export default App;
