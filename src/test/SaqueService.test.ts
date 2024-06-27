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

  test('lança erro para valor inválido (não inteiro)', () => {
    expect(() => SaqueService.calcularCedulas(380.5)).toThrow('Valor inválido. Deve ser um número inteiro positivo.');
  });

  test('lança erro para valor inválido (negativo)', () => {
    expect(() => SaqueService.calcularCedulas(-100)).toThrow('Valor inválido. Deve ser um número inteiro positivo.');
  });

  test('lança erro para valor não atendível com as cédulas disponíveis', () => {
    expect(() => SaqueService.calcularCedulas(463)).toThrow('Valor não pode ser atendido com as cédulas disponíveis.');
  });

  test('lança erro para valor inválido (0)', () => {
    expect(() => SaqueService.calcularCedulas(0)).toThrow('Valor inválido. Deve ser um número inteiro positivo.');
  });
});
