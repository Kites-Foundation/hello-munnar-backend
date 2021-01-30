import {
  Controller,
  Get,
  UseGuards,
  Request,
  Logger,
  Body,
  Post,
  Put,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ChangePasswordDto, ResetPasswordDto } from '../dto';
import ForgotPwdDTO from '../dto/forgetPassword.dto';
import LoginDTO from '../dto/login.dto';
import RegisterDTO from '../dto/register.dto';
import { AuthService } from '../services';

@ApiTags('Auth Management')
@Controller('api/v1/auth')
export class AuthController {
  private logger = new Logger('Auth Controller');
  constructor(private readonly authService: AuthService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('user')
  getUser(@Request() req: any) {
    return this.authService.getUser(req.user.email);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get('all-users')
  getAllUsers() {
    return this.authService.getAllUsers();
  }

  @Post('register')
  register(@Body() createUser: RegisterDTO): Promise<any> {
    return this.authService.register(createUser);
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  login(@Request() req: any) {
    this.logger.verbose(`user Logged in ${req.user.email}`);
    return this.authService.login(req.user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('logout')
  logout(@Request() req: any) {
    return this.authService.logout(req.user);
  }

  @Post('forgot-password')
  forgotPassword(@Body() body: ForgotPwdDTO) {
    return this.authService.forgotPassword(body);
  }

  @Post('reset-password')
  resetPassword(@Body() body: ResetPasswordDto) {
    return this.authService.resetPassword(body);
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put('change-password')
  changePass(
    @Request() req: any,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    this.logger.verbose('Password Changed Successfully');
    return this.authService.changePassword(req.user, changePasswordDto);
  }
}
