import { Request, Response, NextFunction } from 'express';
import { SaqueService } from '../services/SaqueService';

export class SaqueController {
  public static handle(req: Request, res: Response, next: NextFunction): void {
    try {
      const { valor } = req.body;
      const resultado = SaqueService.calcularCedulas(valor);
      res.json(resultado);
    } catch (error) {
      next(error);
    }
  }
}
