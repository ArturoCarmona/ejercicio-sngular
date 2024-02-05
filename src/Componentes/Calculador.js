class Calculador {
  esTriangular(n) {
    return (n * (n + 1)) / 2;
  }

  esPrimo(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return n !== 1;
  }

  esFibonacci(n) {
    let f0 = 0;
    let f1 = 1;

    for (let i = 0; i < n; i++) {
      let fn = f0 + f1;
      f0 = f1;
      f1 = fn;
    }
    return f0;
  }

  calculoSerie(n) {
    return (
      2 * this.esTriangular(n + 1) -
      2 * this.esPrimo(n) +
      this.esFibonacci(n + 1)
    );
  }
}

module.exports = Calculador;
