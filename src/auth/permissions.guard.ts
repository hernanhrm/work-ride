import { SetMetadata } from '@nestjs/common';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Service as ResourcePermissionRole } from 'src/resource_permissions_roles/application/service';
import { Permission } from 'src/resource_permissions_roles/domain/permissions';

export const PERMISSIONS_KEY = 'permissions';
export const ResourcePermissions = (resource?: string, permission?: string) =>
  SetMetadata(PERMISSIONS_KEY, [resource, permission]);

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private resourcePermissionRole: ResourcePermissionRole,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const [resource, permission] = this.reflector.getAllAndOverride(
      PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!permission) {
      return true;
    }

    const { user } = context.switchToHttp().getRequest();
    const userPermissions: Permission =
      await this.resourcePermissionRole.findPermissionsByResourceAndRole(
        resource,
        user.sub,
      );

    return userPermissions.permissions?.split(',').includes(permission);
  }
}
