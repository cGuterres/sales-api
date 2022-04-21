import { Request, Response } from 'express';
import AuthenticationService from '../services/AuthenticationService';

export default class AuthenticationController {
  public async authenticate(
    request: Request,
    response: Response,
  ): Promise<Response> {
    const { email, password } = request.body;

    const service = new AuthenticationService();

    const user = await service.execute({
      email,
      password,
    });

    return response.json(user);
  }
}
