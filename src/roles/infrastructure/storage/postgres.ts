import { CreateDto } from 'src/roles/domain/create.dto';
import { UpdateDto } from 'src/roles/domain/update.dto';
import { Result, Results } from 'src/roles/domain/query.dto';
import { Injectable, Inject } from '@nestjs/common';
import { PG_CONNECTION } from 'src/database/constants';

const TABLE_NAME = 'roles';

@Injectable()
export class PostgresStorage {
  constructor(@Inject(PG_CONNECTION) private sql) {}

  async create(dto: CreateDto): Promise<void> {
    return await this.sql`INSERT INTO ${this.sql(
      TABLE_NAME,
    )} (id, name) VALUES (${dto.id}, ${dto.name})`;
  }

  async update(id: string, dto: UpdateDto): Promise<void> {
    return await this.sql`UPDATE ${this.sql(TABLE_NAME)}  SET name = ${
      dto.name
    }, updated_at = now() WHERE id = ${id}`;
  }

  async remove(id: string): Promise<void> {
    return await this.sql`DELETE FROM ${this.sql(TABLE_NAME)} WHERE id = ${id}`;
  }

  async findAll(): Promise<Results> {
    return await this
      .sql<Results>`SELECT id, name, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )}`;
  }

  async findOne(id: string): Promise<Result> {
    let result: Result;
    await this
      .sql<Result>`SELECT id, name, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )} WHERE id = ${id}`.forEach((row) => {
      result = {
        id: row.id,
        name: row.name,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
      };
    });
    return result;
  }
}
