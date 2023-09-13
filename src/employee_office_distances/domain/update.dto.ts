import { IsNumber, IsUUID } from 'class-validator';

export class UpdateDto {
  @IsUUID('4', { message: 'Debes enviar un id de empleado valido' })
  employeeId: string;

  @IsUUID('4', { message: 'Debes enviar un id de oficina valido' })
  officeId: string;

  @IsNumber(
    { maxDecimalPlaces: 2 },
    {
      message:
        'Debes enviar una distancia valida entre el empleado y la oficina',
    },
  )
  kilometerDistance: number;
}
