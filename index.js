const cardapio = [
  { nome: "Coca", preco: 5.0 },
  { nome: "Sorvete", preco: 7.0 },
  { nome: "Carbonara", preco: 22.0 },
  { nome: "Frango a Parmegiana", preco: 18.0 },
  { nome: "Bife a Milanesa", preco: 23.0 }
];

// Exercício 1 : calcular a taxa de entrega

const taxaEntrega = (km) => {
  if (km <= 2) return 0;
  if (km <= 8) return 6;
  return 6 + (km - 8) * 1.5;
};

// Exercício 2 : totalPedido

const totalPedido = (valores) => {
  let total = 0;

  for (let i = 0; i < valores.length; i++) {
    total += valores[i];
  }

  return total;
};

// Exercício 3 : buscarPreco

const buscarPreco = (cardapio, nome) => {
  return cardapio.find(item => item.nome === nome)?.preco || null;
};

// Função Teste

const teste = (titulo, esperado, retornado) => {
  if (esperado === retornado) {
    console.log(`${titulo} passou`);
  } else {
    console.error(`${titulo} não passou`);
  }
};

// Testes do exercício 1

//("1 km", 0, taxaEntrega(1));
//("2 km", 0, taxaEntrega(2));
//("7 km", 6, taxaEntrega(7));
//("10 km", 9, taxaEntrega(10));

//("teste com erro", 10, taxaEntrega(2));

// Testes do exercício 2

//("pedido 1", 60, totalPedido([10, 20, 30]));
//("pedido vazio", 0, totalPedido([]));

// Testes do exercício 3

//("Coca", 5, buscarPreco(cardapio, "Coca"));
//("Sorvete", 7, buscarPreco(cardapio, "Sorvete"));
//("Carbonara", 22, buscarPreco(cardapio, "Carbonara"));
//("Frango a Parmegiana", 18, buscarPreco(cardapio, "Frango a Parmegiana"));
//("Bife a Milanesa", 23, buscarPreco(cardapio, "Bife a Milanesa"));
//("Produto que não existe", null, buscarPreco(cardapio, "Coca-Cola"));

console.log(buscarPreco(cardapio, "Sorvete"));