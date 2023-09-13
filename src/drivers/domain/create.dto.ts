import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class CreateDriverDto {
  @IsUUID('4', { message: 'Debes enviar un id valido' })
  id: string;

  @IsNotEmpty({ message: 'Debes enviar el nombre del conductor' })
  name: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message:
        'Debes enviar la tarifa del conductor con un maximo de 2 decimales',
    },
  )
  ratePerKilometer: string;
}
