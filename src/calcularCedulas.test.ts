import { calcularCedulas } from './calcularCedulas';

test('calcula a quantidade mínima de cédulas para 380', () => {
  expect(calcularCedulas(380)).toEqual({ 100: 3, 50: 1, 20: 1, 10: 1, 5: 0, 2: 0 });
});

test('calcula a quantidade mínima de cédulas para 7', () => {
  expect(calcularCedulas(7)).toEqual({ 100: 0, 50: 0, 20: 0, 10: 0, 5: 1, 2: 1 });
});

test('calcula a quantidade mínima de cédulas para 0', () => {
  expect(calcularCedulas(0)).toEqual({ 100: 0, 50: 0, 20: 0, 10: 0, 5: 0, 2: 0 });
});
