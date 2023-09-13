import { IsUUID } from 'class-validator';

export class CreateDto {
  @IsUUID('4', { message: 'Debes enviar un id valido' })
  id: string;

  @IsUUID('4', { message: 'Debes enviar un id valido para el recurso' })
  resourcePermissionId: string;

  @IsUUID('4', { message: 'Debes enviar un id valido para el rol' })
  roleId: string;
}
