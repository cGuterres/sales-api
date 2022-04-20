import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import GetAllUserService from '../services/GetAllUserService';

export default class UserController {
  public async getAll(request: Request, response: Response): Promise<Response> {
    const service = new GetAllUserService();

    const users = await service.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response) {
    const createUserService = new CreateUserService();

    const { name, email, password } = request.body;

    const user = await createUserService.execute({
      name,
      email,
      password,
    });

    return response.json(user);
  }
}
