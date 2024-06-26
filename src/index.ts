import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { calcularCedulas } from './calcularCedulas';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/api/saque', (req: Request, res: Response) => {
  const { valor } = req.body;

  if (!Number.isInteger(valor) || valor <= 0) {
    return res.status(400).json({ error: 'Valor inválido' });
  }

  const resultado = calcularCedulas(valor);
  return res.json(resultado);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
