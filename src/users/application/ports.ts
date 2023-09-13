import { CreateDto } from '../domain/create.dto';
import { Result, Results } from '../domain/query.dto';
import { UpdateDto } from '../domain/update.dto';

export abstract class Storage {
  // commands
  abstract create(dto: CreateDto): Promise<void>;
  abstract update(id: string, dto: UpdateDto): Promise<void>;
  abstract remove(id: string): Promise<void>;

  // queries
  abstract findAll(): Promise<Results>;
  abstract findOne(id: string): Promise<Result>;
  abstract findByEmail(email: string): Promise<Result>;
}

export abstract class RoleService {
  abstract exist(id: string): Promise<boolean>;
}
