import { IsEmail, IsNotEmpty, IsStrongPassword, IsUUID } from 'class-validator';

export class UpdateDto {
  @IsNotEmpty({ message: 'Debes enviar el nombre del usuario' })
  name: string;

  @IsEmail({}, { message: 'Debes enviar un email valido' })
  email: string;

  @IsUUID('4', { message: 'Debes enviar un id de rol valido' })
  roleId: string;
}
