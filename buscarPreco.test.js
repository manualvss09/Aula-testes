import { buscarPreco } from "./buscarPreco";

const cardapio = [
  { nome: "Coca", preco: 5.0 },
  { nome: "Sorvete", preco: 7.0 },
  { nome: "Carbonara", preco: 22.0 },
  { nome: "Frango a Parmegiana", preco: 18.0 },
  { nome: "Bife a Milanesa", preco: 23.0 }
];

describe("buscarPreco", () => {
  test("Coca", () => expect(buscarPreco(cardapio, "Coca")).toBe(5));
  test("Sorvete", () => expect(buscarPreco(cardapio, "Sorvete")).toBe(7));
  test("Carbonara", () => expect(buscarPreco(cardapio, "Carbonara")).toBe(22));
  test("Frango a Parmegiana", () => expect(buscarPreco(cardapio, "Frango a Parmegiana")).toBe(18));
  test("Bife a Milanesa", () => expect(buscarPreco(cardapio, "Bife a Milanesa")).toBe(23));
  test("Produto que não existe", () => expect(buscarPreco(cardapio, "Coca-Cola")).toBe(null));
});

