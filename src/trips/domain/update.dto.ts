import { IsUUID } from 'class-validator';

export class UpdateDto {
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
