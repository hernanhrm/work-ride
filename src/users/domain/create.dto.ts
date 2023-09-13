import { IsEmail, IsNotEmpty, IsStrongPassword, IsUUID } from 'class-validator';
import { hashPassword } from './hash';

export class CreateDto {
  @IsUUID('4', { message: 'Debes enviar un id valido' })
  id: string;

  @IsNotEmpty({ message: 'Debes enviar el nombre del usuario' })
  name: string;

  @IsEmail({}, { message: 'Debes enviar un email valido' })
  email: string;

  @IsStrongPassword(
    { minLength: 6 },
    { message: 'Debes usar una clave valida' },
  )
  password: string;

  @IsUUID('4', { message: 'Debes enviar un id de rol valido' })
  roleId: string;
}
