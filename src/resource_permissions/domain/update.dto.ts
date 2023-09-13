import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateDto {
  @IsNotEmpty({ message: 'Debes enviar el nombre del recurso' })
  name: string;

  @IsOptional()
  @IsString({
    message: 'Debes enviar el una descripcion valida para el recurso',
  })
  description: string;
}
