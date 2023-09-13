import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateDto {
  @IsUUID('4', { message: 'Debes enviar un id valido' })
  id: string;

  @IsUUID('4', {
    message:
      'Debes enviar un id valido para la distancia entre el empleado y la oficina',
  })
  employeeOfficeDistanceId: string;

  @IsUUID('4', {
    message: 'Debes enviar un id valido para el conductor',
  })
  driverId: string;
}
