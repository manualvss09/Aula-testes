import { totalPedido } from "./totalPedido";

describe("totalPedido", () => {
  test("pedido 1", () => expect(totalPedido([10, 20, 30])).toBe(60));
  test("pedido vazio", () => expect(totalPedido([])).toBe(0));
});

