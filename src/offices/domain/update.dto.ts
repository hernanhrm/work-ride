import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDto {
  @IsNotEmpty({ message: 'Debes enviar el nombre de la oficina' })
  name: string;

  @IsString()
  address?: string;
}
