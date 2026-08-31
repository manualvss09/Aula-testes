// Exercício 1: calcular a taxa de entrega

const taxaEntrega = (km) => {
  if (km <= 2) {
    return 0;
  }

  if (km <= 8) {
    return 6;
  }

  return 6 + (km - 8) * 1.5;
};

export { taxaEntrega };

