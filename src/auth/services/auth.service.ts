import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { envHost } from '../../config/constants';
import { ChangePasswordDto } from '../dto';
import User from '../entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  async getAllUsers(): Promise<any> {
    const [users, count] = await this.userRepository.findAndCount();
    return {
      count: count,
      users: users,
    };
  }

  async getUser(email: any): Promise<any> {
    const user = await this.userRepository.findOne({
      email: email.toLowerCase(),
    });
    if (user) {
      delete user.password;
      delete user.token;
      return {
        success: true,
        message: 'Success',
        data: user,
      };
    }
    throw new UnauthorizedException({
      detail: 'user not authorized to access this api',
      code: 'not_authorized',
    });
  }

  async validateUser(email: any, password: any): Promise<any> {
    try {
      const user = await this.userRepository.findOne({
        email: email.toLowerCase(),
      });
      if (user) {
        if (!user.password) {
          return user;
        }
        const match = await bcrypt.compare(password, user.password);
        if (match) {
          return user;
        }
      }
      return null;
    } catch (err) {
      console.log('err', err);
      return {
        success: false,
        message: 'Something went wrong..! Login failed.',
      };
    }
  }

  async login(user: any): Promise<any> {
    try {
      const { email, id } = user;
      const payload = { email, id };
      delete user.password;
      delete user.token;
      return {
        success: true,
        message: 'Success',
        data: user,
        access_token: this.jwtService.sign(payload),
      };
    } catch (err) {
      console.log('err', err);
      return {
        success: false,
        message: 'Something went wrong..! Login failed.',
      };
    }
  }

  async logout(user: any) {
    if (user) {
      user.token = null;
      await this.userRepository.save(user);
    }
    return {
      success: true,
      data: user,
    };
  }

  async register(data: any): Promise<any> {
    try {
      const { password, confirm } = data;
      if (password === confirm) {
        const user = await this.userRepository.findOne({
          email: data.email.toLowerCase(),
        });
        if (user) {
          if (!user.password) {
            const hash = await bcrypt.hash(password, 10);
            const data = {
              password: hash,
            };
            await this.userRepository.update(user.id, data);
          }
          return {
            success: false,
            message: 'User Exist',
            data: {
              email: 'User already exist, please login.',
            },
          };
        } else {
          data.password = await bcrypt.hash(data.password, 10);
          data.status = 'ACTIVE';
          data.uid = uuidv4();
          const fetchUser = await this.userRepository.save(data);
          const { ...result } = fetchUser;
          delete result.password;
          delete result.confirm;
          return {
            success: true,
            message: 'Success',
            data: result,
          };
        }
      }
      return {
        success: false,
        message: 'Error',
        data: {
          confirm: 'Password and confirm password must be same.',
        },
      };
    } catch (err) {
      console.log('err', err);
      return {
        success: false,
        message: 'Something went wrong..! Registration failed.',
      };
    }
  }

  async forgotPassword(data: any): Promise<any> {
    const user = await this.userRepository.findOne({
      email: data.email.toLowerCase(),
    });
    if (user) {
      const token = uuidv4();
      const hostUrl = envHost[process.env.NODE_ENV];
      return await this.mailerService
        .sendMail({
          to: data.email,
          from: `${process.env.EMAIL_SENDER}`,
          subject: 'Reset password link',
          template: 'forgotPwd',
          context: {
            link: `${hostUrl}reset-password/${token}`,
          },
        })
        .then(async () => {
          user.token = token;
          await this.userRepository.save(user);
          return {
            success: true,
            message: 'An email has been sent to reset password.',
          };
        })
        .catch((err) => {
          console.log('err', err);
          return {
            success: false,
            message: 'Something went wrong...!',
          };
        });
    }
    return {
      success: false,
      message: 'Error',
      data: {
        email: 'User does not exist.',
      },
    };
  }

  async resetPassword(data: any): Promise<any> {
    const user = await this.userRepository.findOne({ token: data.token });
    if (user) {
      if (data.password === data.confirm) {
        user.password = await bcrypt.hash(data.password, 10);
        user.token = null;
        const fetchUser = await this.userRepository.save(user);
        const { ...result } = fetchUser;
        return {
          success: true,
          message: 'Success',
          data: result,
        };
      }
      return {
        success: false,
        message: 'Error',
        data: {
          confirm: 'Password and confirm password must be same.',
        },
      };
    }
    return {
      success: false,
      message: 'Error',
      data: {
        token: 'Invalid token',
      },
    };
  }

  async changePassword(user: User, data: ChangePasswordDto): Promise<any> {
    const id = user.id;
    const found = await this.userRepository.findOne({ id });
    const match = await bcrypt.compare(data.currentPassword, found.password);
    if (!match) {
      return {
        success: false,
        message: 'Error',
        data: {
          confirmPassword: 'Current Password is incorrect',
        },
      };
    }
    if (data.password === data.confirm) {
      found.password = await bcrypt.hash(data.password, 10);
      await this.userRepository.save(found);
      return {
        success: true,
        message: 'Success',
      };
    }
    return {
      success: false,
      message: 'Error',
      data: {
        confirmPassword: 'Password and confirm Password must be same',
      },
    };
  }
}
