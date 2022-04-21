import { Request, Response } from 'express';
import UpdateUserAvarService from '../services/UpdateUserAvarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const service = new UpdateUserAvarService();

    const user = await service.execute({
      id: request.user.id,
      avatarFileName: request.file?.filename,
    });

    return response.json(user);
  }
}
