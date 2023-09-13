import { Inject, Injectable } from '@nestjs/common';
import { UpdateDto } from '../domain/update.dto';
import { CreateDto } from '../domain/create.dto';
import { Storage } from './ports';
import { Result, Results } from '../domain/query.dto';
import { hashPassword } from '../domain/hash';
import { CustomException } from 'src/shared/infrastructure/domain/exceptions';
import { Service as RoleService } from 'src/roles/application/service';

@Injectable()
export class Service {
  @Inject(RoleService)
  private role: RoleService;

  @Inject(Storage)
  private readonly storage: Storage;

  // commands
  async create(dto: CreateDto): Promise<void> {
    await this.validateUpsert(dto.email, dto.roleId);

    dto.password = await hashPassword(dto.password);

    return this.storage.create(dto);
  }

  async update(id: string, dto: UpdateDto): Promise<void> {
    await this.validateUpsert(dto.email, dto.roleId);

    return this.storage.update(id, dto);
  }

  async remove(id: string): Promise<void> {
    return this.storage.remove(id);
  }

  // queries
  async findAll(): Promise<Results> {
    return this.storage.findAll();
  }

  async findOne(id: string): Promise<Result> {
    return this.storage.findOne(id);
  }

  // findByEmail returns all user data including the password
  // this method is meant to be used by the login and signup process
  // if using it in an endpoint, make sure to clear the password
  async findByEmail(id: string): Promise<Result> {
    return this.storage.findByEmail(id);
  }

  private async validateUpsert(email: string, roleId: string) {
    const user: Result = await this.findByEmail(email);
    if (user) {
      throw new CustomException(`Ya existe un usuario con el mismo email`);
    }

    const roleExist: boolean = await this.role.exist(roleId);
    if (!roleExist) {
      throw new CustomException(`El role no existe`);
    }
  }
}
