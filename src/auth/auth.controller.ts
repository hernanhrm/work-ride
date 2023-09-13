import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './guard';
import { ResourcePermissions } from './permissions.guard';

@Controller('/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @ResourcePermissions()
  @HttpCode(HttpStatus.OK)
  @Post('/login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.pass);
  }
}
