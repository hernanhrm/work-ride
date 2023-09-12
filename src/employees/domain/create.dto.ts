import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateEmployeeDTO {
  @IsUUID('4', { message: 'Debes enviar un id valido' })
  id: string;

  @IsNotEmpty({ message: 'Debes enviar el nombre del empleado' })
  name: string;

  @IsString()
  address?: string;
}
