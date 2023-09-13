import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Service as UserService } from 'src/users/application/service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private user: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<any> {
    const user = await this.user.findByEmail(email);

    const isSamePassword = await bcrypt.compare(pass, user.password);
    if (!isSamePassword) {
      throw new UnauthorizedException();
    }
    user.password = '';

    const payload = { sub: user.id, username: user.email, role: user.roleId };
    return {
      user: user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
