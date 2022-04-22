import { Request, Response } from 'express';
import ResetPasswordService from '../services/ResetPasswordService';

export default class ResetPasswordController {
  public async create(request: Request, response: Response) {
    const service = new ResetPasswordService();

    const { token, password } = request.body;

    await service.execute({
      token,
      password,
    });

    return response.status(204).json();
  }
}
