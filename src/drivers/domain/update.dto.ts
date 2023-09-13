import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateDriverDto {
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
