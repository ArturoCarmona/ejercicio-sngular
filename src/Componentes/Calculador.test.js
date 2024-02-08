const Calculador = require('./Calculador');

describe('Calculador', () => {
  const calculador = new Calculador();

  test('esTriangular debería calcular si un número es triangular correctamente', () => {
    expect(calculador.esTriangular(1)).toBe(1);
    expect(calculador.esTriangular(2)).toBe(3);
    expect(calculador.esTriangular(3)).toBe(6);
    expect(calculador.esTriangular(4)).toBe(10);
    
  });

  test('esPrimo debería calcular si un número es primo correctamente', () => {
    expect(calculador.esPrimo(1)).toBe(false);
    expect(calculador.esPrimo(2)).toBe(true);
    expect(calculador.esPrimo(3)).toBe(true);
    expect(calculador.esPrimo(4)).toBe(false);
    
  });

  test('esFibonacci debería calcular la serie Fibonacci correctamente', () => {
    expect(calculador.esFibonacci(1)).toBe(1);
    expect(calculador.esFibonacci(2)).toBe(1);
    expect(calculador.esFibonacci(3)).toBe(2);
    expect(calculador.esFibonacci(4)).toBe(3);
    
  });

  test('calculoSerie debería calcular la serie correctamente', () => {
    // Suponiendo que esTriangular, esPrimo y esFibonacci son correctos
    
    expect(calculador.calculoSerie(1)).toBe(7);
    expect(calculador.calculoSerie(2)).toBe(12);
    expect(calculador.calculoSerie(3)).toBe(21);
    expect(calculador.calculoSerie(4)).toBe(35);
    expect(calculador.calculoSerie(5)).toBe(48);
    expect(calculador.calculoSerie(6)).toBe(69);
    expect(calculador.calculoSerie(7)).toBe(91);
    expect(calculador.calculoSerie(8)).toBe(124);
    expect(calculador.calculoSerie(9)).toBe(165);
    expect(calculador.calculoSerie(10)).toBe(221);
    
  });
});
