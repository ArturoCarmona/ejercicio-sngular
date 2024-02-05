import React, { useEffect } from "react";
import SerieCalculador from "./Calculador";

const serieCalculador = new SerieCalculador();

function Calculador({ n, setResult }) {
  useEffect(() => {
    const calcularResultado = () => {
      if (!isNaN(parseInt(n))) {
        const resultado = serieCalculador.calculoSerie(parseInt(n));
        setResult(resultado);
      }
    };
    calcularResultado();
  }, [n, setResult]);

  return null; // Esta componente no renderiza nada visualmente
}

export default Calculador;

