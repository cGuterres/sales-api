import { Request, Response } from 'express';
import SendForgotPasswordEmailService from '../services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response) {
    const service = new SendForgotPasswordEmailService();

    const { email } = request.body;

    await service.execute({
      email,
    });

    return response.status(204).json();
  }
}
