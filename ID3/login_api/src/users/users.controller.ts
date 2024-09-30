import { Controller, Get, Post, Body, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Post('login')
  login(@Body() createUserDto: CreateUserDto) {
    const { email, password } = createUserDto;
    return this.usersService.loginUser(email, password);
  }

  @Post('refresh')
  refreshTokens(@Req() request: Request) {
    const [type, token] = request.headers['authorization']?.split(' ') || [];
    return this.usersService.refreshToken(token);
  }
}
