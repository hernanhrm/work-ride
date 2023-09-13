import { CreateDriverDto } from 'src/drivers/domain/create.dto';
import { UpdateDriverDto } from 'src/drivers/domain/update.dto';
import { Driver, Drivers } from 'src/drivers/domain/driver.dto';
import { Injectable, Inject } from '@nestjs/common';
import { PG_CONNECTION } from 'src/database/constants';

const TABLE_NAME = 'drivers';

@Injectable()
export class PostgresStorage {
  constructor(@Inject(PG_CONNECTION) private sql) {}

  // commands
  async create(createEmployeeDto: CreateDriverDto): Promise<void> {
    return await this.sql`INSERT INTO ${this.sql(
      TABLE_NAME,
    )} (id, name, rate_per_kilometer) VALUES (${createEmployeeDto.id}, ${
      createEmployeeDto.name
    }, ${createEmployeeDto.ratePerKilometer})`;
  }

  async update(id: string, updateEmployeeDto: UpdateDriverDto): Promise<void> {
    return await this.sql`UPDATE ${this.sql(TABLE_NAME)} SET name = ${
      updateEmployeeDto.name
    }, rate_per_kilometer = ${
      updateEmployeeDto.ratePerKilometer
    }, updated_at = now() WHERE id = ${id}`;
  }

  async remove(id: string): Promise<void> {
    return await this.sql`DELETE FROM ${this.sql(TABLE_NAME)} WHERE id = ${id}`;
  }

  // queries
  async findAll(): Promise<Drivers> {
    return await this
      .sql<Drivers>`SELECT id, name, rate_per_kilometer, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )}`;
  }

  async findOne(id: string): Promise<Driver> {
    return await this
      .sql<Driver>`SELECT id, name, rate_per_kilometer, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )} WHERE id = ${id}`;
  }
}
