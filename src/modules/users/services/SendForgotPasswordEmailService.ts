import ApiError from '@shared/errors/ApiError';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../typeorm/repositories/UserRepository';
import UserTokenRepository from '../typeorm/repositories/UserTokenRepository';
import EtherealMail from '@config/mail/EtherealMail';
import path from 'path';

interface IRequest {
  email: string;
}

export default class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const userRepository = getCustomRepository(UserRepository);
    const userTokenRepository = getCustomRepository(UserTokenRepository);

    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new ApiError('User does not exists');
    }

    const { token } = await userTokenRepository.generate(user.id);

    const forgotPasswordTemplate = path.resolve(
      __dirname,
      '..',
      'views',
      'forgot_password.hbs',
    );

    await EtherealMail.sendMail({
      to: {
        name: user.name,
        email: email,
      },
      subject: '[Nodejs] - Reset password',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `http://localhost:3000/reset_password?token?${token}`,
        },
      },
    });
  }
}
