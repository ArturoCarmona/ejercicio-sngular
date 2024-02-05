import React from "react";

function Resultado({ resultado }) {
  return (
    <div>
      <h2>Resultado del cálculo:</h2>
      <p>{resultado}</p>
    </div>
  );
}

export default Resultado;