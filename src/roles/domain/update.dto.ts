import { IsNotEmpty } from 'class-validator';

export class UpdateDto {
  @IsNotEmpty({ message: 'Debes enviar el nombre del rol' })
  name: string;
}
