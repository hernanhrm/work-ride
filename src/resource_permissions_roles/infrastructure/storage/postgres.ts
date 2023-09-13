import { CreateDto } from 'src/resource_permissions_roles/domain/create.dto';
import { UpdateDto } from 'src/resource_permissions_roles/domain/update.dto';
import {
  Result,
  Results,
} from 'src/resource_permissions_roles/domain/query.dto';
import { Injectable, Inject } from '@nestjs/common';
import { PG_CONNECTION } from 'src/database/constants';
import { Permission } from 'src/resource_permissions_roles/domain/permissions';

const TABLE_NAME = 'resource_permissions_roles';

@Injectable()
export class PostgresStorage {
  constructor(@Inject(PG_CONNECTION) private sql) {}

  async create(dto: CreateDto): Promise<void> {
    return await this.sql`INSERT INTO ${this.sql(
      TABLE_NAME,
    )} (id, resource_permission_id, role_id) VALUES (${dto.id}, ${
      dto.resourcePermissionId
    }, ${dto.roleId})`;
  }

  async update(id: string, dto: UpdateDto): Promise<void> {
    return await this.sql`UPDATE ${this.sql(
      TABLE_NAME,
    )}  SET resource_permission_id = ${dto.resourcePermissionId}, role_id = ${
      dto.roleId
    }, updated_at = now() WHERE id = ${id}`;
  }

  async remove(id: string): Promise<void> {
    return await this.sql`DELETE FROM ${this.sql(TABLE_NAME)} WHERE id = ${id}`;
  }

  async findAll(): Promise<Results> {
    return await this
      .sql<Results>`SELECT id, resource_permission_id, role_id, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )}`;
  }

  async findOne(id: string): Promise<Result> {
    return await this
      .sql<Result>`SELECT id, resource_permission_id, role_id, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )} WHERE id = ${id}`;
  }

  async findPermissionsByResourceAndRole(
    resource: string,
    userId: string,
  ): Promise<Permission> {
    let permission: Permission;
    await this.sql`SELECT rp.name, rpr.permissions
FROM resource_permissions rp
         INNER JOIN resource_permissions_roles rpr on rp.id = rpr.resource_permission_id
         INNER JOIN roles r on rpr.role_id = r.id
         INNER JOIN users u on r.id = u.role_id
    WHERE rp.name = ${resource}
      AND u.id= ${userId}`.forEach((row) => {
      permission = {
        resource: row.resource,
        permissions: row.permissions,
      };
    });

    return permission;
  }
}
