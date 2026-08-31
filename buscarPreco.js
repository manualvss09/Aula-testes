const buscarPreco = (cardapio, nome) => {
  return cardapio.find(item => item.nome === nome)?.preco || null;
};

export { buscarPreco };
