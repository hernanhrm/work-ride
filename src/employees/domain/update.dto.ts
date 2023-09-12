import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateEmployeeDTO {
  @IsNotEmpty({ message: 'Debes enviar el nombre del empleado' })
  name: string;

  @IsString()
  address?: string;
}
