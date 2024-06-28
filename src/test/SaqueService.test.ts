import { SaqueService } from '../services/SaqueService';

describe('SaqueService', () => {
  test('calcula a quantidade mínima de cédulas para 380', () => {
    const resultado = SaqueService.calcularCedulas(380);
    expect(resultado).toEqual({ "100": 3, "50": 1, "20": 1, "10": 1, "5": 0, "2": 0 });
  });

  test('calcula a quantidade mínima de cédulas para 467', () => {
    const resultado = SaqueService.calcularCedulas(467);
    expect(resultado).toEqual({ "100": 4, "50": 1, "20": 0, "10": 1, "5": 1, "2": 1 });
  });

  test('calcula a quantidade mínima de cédulas para corner cases  7, 9, 11, 13, 17, 19', () => {
    expect(SaqueService.calcularCedulas(7)).toEqual({ "100": 0, "50": 0, "20": 0, "10": 0, "5": 1, "2": 1 });
    expect(SaqueService.calcularCedulas(9)).toEqual({ "100": 0, "50": 0, "20": 0, "10": 0, "5": 1, "2": 2 });
    expect(SaqueService.calcularCedulas(11)).toEqual({ "100": 0, "50": 0, "20": 0, "10": 0, "5": 1, "2": 3 });
    expect(SaqueService.calcularCedulas(13)).toEqual({ "100": 0, "50": 0, "20": 0, "10": 0, "5": 1, "2": 4 });
  });

  test('lança erro para valor inválido (não inteiro)', () => {
    expect(() => SaqueService.calcularCedulas(380.5)).toThrow('Valor inválido. Deve ser um número inteiro positivo.');
  });

  test('lança erro para valor inválido (negativo)', () => {
    expect(() => SaqueService.calcularCedulas(-100)).toThrow('Valor inválido. Deve ser um número inteiro positivo.');
  });

  test('lança erro para valor não atendível com as cédulas disponíveis', () => {
    expect(() => SaqueService.calcularCedulas(1)).toThrow('Valor não pode ser atendido com as cédulas disponíveis.');
    expect(() => SaqueService.calcularCedulas(3)).toThrow('Valor não pode ser atendido com as cédulas disponíveis.');
  });

  test('lança erro para valor inválido (0)', () => {
    expect(() => SaqueService.calcularCedulas(0)).toThrow('Valor inválido. Deve ser um número inteiro positivo.');
  });
});
