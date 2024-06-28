export class SaqueService {
  static calcularCedulas(valor: number): Record<string, number> {
    // Verificar se o valor é válido (inteiro maior que 0)
    if (!Number.isInteger(valor) || valor <= 0) {
      throw new Error('Valor inválido. Deve ser um número inteiro positivo.');
    }

    // Verificar se o valor pode ser atendido com as cédulas disponíveis
    if(valor < 5 && valor % 2 !== 0) {
      throw new Error('Valor não pode ser atendido com as cédulas disponíveis.');
    }

    let cedulas = [100, 50, 20, 10, 5, 2];
    const resultado: Record<string, number> = {
      "100": 0,
      "50": 0,
      "20": 0,
      "10": 0,
      "5": 0,
      "2": 0,
    };

    let valorRestante = valor;
    
    if(valor % 2 !== 0){
      resultado["5"] = 1
      valorRestante -= 5;
      cedulas = cedulas.filter(item => item !== 5);
    }
    
    for (const cedula of cedulas) {
      if (valorRestante <= 0) break;
      const quantidade = Math.floor(valorRestante / cedula); 
      if (quantidade > 0) {
        resultado[cedula] = quantidade;
        valorRestante %= cedula;
      }
    }

    return resultado;
  }
}
