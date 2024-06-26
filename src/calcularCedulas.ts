/*
  Calcula a quantidade mínima de cédulas necessárias para um valor de saque.
  @param valor - O valor do saque.
  @returns Um objeto com a quantidade de cédulas de cada valor.
*/
export function calcularCedulas(valor: number): Record<number, number> {
  const cedulas = [100, 50, 20, 10, 5, 2];
  const resultado: Record<number, number> = {};

  for (const cedula of cedulas) {
    const quantidade = Math.floor(valor / cedula);
    valor %= cedula;
    resultado[cedula] = quantidade;
  }

  return resultado;
}
