import { CreateDto } from 'src/trips/domain/create.dto';
import { UpdateDto } from 'src/trips/domain/update.dto';
import { Result, Results } from 'src/trips/domain/query.dto';
import { Injectable, Inject } from '@nestjs/common';
import { PG_CONNECTION } from 'src/database/constants';
import { Reports } from 'src/trips/domain/report.dto';

const TABLE_NAME = 'trips';

@Injectable()
export class PostgresStorage {
  constructor(@Inject(PG_CONNECTION) private sql) {}

  async create(dto: CreateDto): Promise<void> {
    return await this.sql`INSERT INTO ${this.sql(
      TABLE_NAME,
    )} (id, employee_office_distance_id, driver_id) VALUES (${dto.id}, ${
      dto.employeeOfficeDistanceId
    }, ${dto.driverId})`;
  }

  async update(id: string, dto: UpdateDto): Promise<void> {
    return await this.sql`UPDATE ${this.sql(
      TABLE_NAME,
    )}  SET employee_office_distance_id = ${
      dto.employeeOfficeDistanceId
    }, driver_id = ${dto.driverId}, updated_at = now() WHERE id = ${id}`;
  }

  async remove(id: string): Promise<void> {
    return await this.sql`DELETE FROM ${this.sql(TABLE_NAME)} WHERE id = ${id}`;
  }

  async findAll(): Promise<Results> {
    return await this
      .sql<Results>`SELECT id, employee_office_distance_id, driver_id, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )}`;
  }

  async findOne(id: string): Promise<Result> {
    return await this
      .sql<Result>`SELECT id, employee_office_distance_id, driver_id, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )} WHERE id = ${id}`;
  }

  async reportByRangeDate(
    startDate: string,
    endDate: string,
  ): Promise<Reports> {
    return await this.sql<Reports>`
        SELECT d.name,
               (sum(eod.kilometer_distance) * d.rate_per_kilometer) as total,
               count(*)                                             as trips_count
        FROM ${this.sql(TABLE_NAME)} AS t
                 INNER JOIN drivers d on d.id = t.driver_id
                 INNER JOIN employee_office_distances eod on eod.id = t.employee_office_distance_id
        WHERE t.created_at::date BETWEEN ${startDate}::date AND ${endDate}::date
        GROUP BY d.name, d.rate_per_kilometer
        ORDER BY total DESC`;
  }
}
