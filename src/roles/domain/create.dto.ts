import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateDto {
  @IsUUID('4', { message: 'Debes enviar un id valido' })
  id: string;

  @IsNotEmpty({ message: 'Debes enviar el nombre del rol' })
  name: string;
}
