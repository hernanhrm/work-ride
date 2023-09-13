import { CreateDto } from "src/users/domain/create.dto";
import { UpdateDto } from "src/users/domain/update.dto";
import { Result, Results } from "src/users/domain/query.dto";
import { Injectable, Inject } from "@nestjs/common";
import { PG_CONNECTION } from "src/database/constants";

const TABLE_NAME = "users";

@Injectable()
export class PostgresStorage {
  constructor(@Inject(PG_CONNECTION) private sql) {
  }

  async create(dto: CreateDto): Promise<void> {
    return await this.sql`INSERT INTO ${this.sql(
      TABLE_NAME
    )} (id, name, email, password, role_id) VALUES (${dto.id}, ${dto.name}, ${
      dto.email
    }, ${dto.password}, ${dto.roleId})`;
  }

  async update(id: string, dto: UpdateDto): Promise<void> {
    return await this.sql`UPDATE ${this.sql(TABLE_NAME)}  SET name = ${
      dto.name
    }, email = ${dto.email}, role_id = ${
      dto.roleId
    }, updated_at = now() WHERE id = ${id}`;
  }

  async remove(id: string): Promise<void> {
    return await this.sql`DELETE FROM ${this.sql(TABLE_NAME)} WHERE id = ${id}`;
  }

  async findAll(): Promise<Results> {
    return await this
      .sql<Results>`SELECT id, name, email, role_id, created_at, updated_at FROM ${this.sql(
      TABLE_NAME
    )}`;
  }

  async findOne(id: string): Promise<Result> {
    return await this
      .sql<Result>`SELECT id, name, email, role_id, created_at, updated_at FROM ${this.sql(
      TABLE_NAME
    )} WHERE id = ${id}`;
  }

  // findByEmail returns all user data including the password
  async findByEmail(email: string): Promise<Result> {
    let result: Result;
    await this
      .sql<Result>`SELECT id, name, email, password, role_id, created_at, updated_at FROM ${this.sql(
      TABLE_NAME
    )} WHERE email = ${email}`.forEach((row) => {
      result = {
        id: row.id,
        name: row.name,
        email: row.email,
        password: row.password,
        roleId: row.role_id,
        createdAt: row.created_at,
        updatedAt: row.updated_at,
      };
    });

    return result;
  }
}
