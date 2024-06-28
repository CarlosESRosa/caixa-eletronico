export class SaqueService {
  static calcularCedulas(valor: number): Record<string, number> {
    if (!Number.isInteger(valor) || valor <= 0) {
      throw new Error('Valor inválido. Deve ser um número inteiro positivo.');
    }
    const cedulas = [100, 50, 20, 10, 5, 2];
    const resultado: Record<string, number> = {
      "100": 0,
      "50": 0,
      "20": 0,
      "10": 0,
      "5": 0,
      "2": 0,
    };

    let valorRestante = valor;

    for (const cedula of cedulas) {
      const quantidade = Math.floor(valorRestante / cedula);
      resultado[cedula.toString()] = quantidade;
      valorRestante %= cedula;
    }

    return resultado;
  }
}
