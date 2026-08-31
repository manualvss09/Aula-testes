const totalPedido = (valores) => {
  let total = 0;

  for (let i = 0; i < valores.length; i++) {
    total += valores[i];
  }

  return total;
};

export { totalPedido };

