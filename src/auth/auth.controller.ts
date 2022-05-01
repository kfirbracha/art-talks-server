import { Body, Controller, Get, Post } from '@nestjs/common';
import { Iuser } from 'src/interfaces/iuser.interface';
import { CreateUserDto } from 'src/shared/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/createUser')
  createUser(@Body() user: CreateUserDto) {
    return this.authService.createUser(user).then((res) => {
      console.log(res);
      return true;
    });
  }

  @Post('login')
  login(@Body() user: Iuser) {
    return this.authService.login(user).then((res) => {
      if (res) {
        return {
          _id: res._id,
        };
      }
      return false;
    });
  }
}
