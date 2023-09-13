import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateDto {
  @IsUUID('4', { message: 'Debes enviar un id valido' })
  id: string;

  @IsNotEmpty({ message: 'Debes enviar el nombre del recurso' })
  name: string;

  @IsOptional()
  @IsString({
    message: 'Debes enviar el una descripcion valida para el recurso',
  })
  description: string;
}
