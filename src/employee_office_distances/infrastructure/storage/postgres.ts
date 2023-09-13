import { CreateDto } from 'src/employee_office_distances/domain/create.dto';
import { UpdateDto } from 'src/employee_office_distances/domain/update.dto';
import {
  Result,
  Results,
} from 'src/employee_office_distances/domain/query.dto';
import { Injectable, Inject } from '@nestjs/common';
import { PG_CONNECTION } from 'src/database/constants';

const TABLE_NAME = 'employee_office_distances';

@Injectable()
export class PostgresStorage {
  constructor(@Inject(PG_CONNECTION) private sql) {}

  async create(dto: CreateDto): Promise<void> {
    return await this.sql`INSERT INTO ${this.sql(
      TABLE_NAME,
    )} (id, employee_id, office_id, kilometer_distance) VALUES (${dto.id}, ${
      dto.employeeId
    }, ${dto.officeId}, ${dto.kilometerDistance})`;
  }

  async update(id: string, dto: UpdateDto): Promise<void> {
    return await this.sql`UPDATE ${this.sql(TABLE_NAME)}  SET employee_id = ${
      dto.employeeId
    }, office_id = ${dto.officeId}, kilometer_distance = ${
      dto.kilometerDistance
    }, updated_at = now() WHERE id = ${id}`;
  }

  async remove(id: string): Promise<void> {
    return await this.sql`DELETE FROM ${this.sql(TABLE_NAME)} WHERE id = ${id}`;
  }

  async findAll(): Promise<Results> {
    return await this
      .sql<Results>`SELECT id, employee_id, office_id, kilometer_distance, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )}`;
  }

  async findOne(id: string): Promise<Result> {
    return await this
      .sql<Result>`SELECT id, employee_id, office_id, kilometer_distance, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )} WHERE id = ${id}`;
  }
}
