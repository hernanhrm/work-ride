import { CreateEmployeeDTO } from 'src/employees/domain/create.dto';
import { UpdateEmployeeDTO } from 'src/employees/domain/update.dto';
import { Employee, Employees } from 'src/employees/domain/employee.dto';
import { Injectable, Inject } from '@nestjs/common';
import { PG_CONNECTION } from 'src/database/constants';

const TABLE_NAME = 'employees';

@Injectable()
export class PostgresStorage {
  constructor(@Inject(PG_CONNECTION) private sql) {}

  async create(createEmployeeDto: CreateEmployeeDTO): Promise<void> {
    return await this.sql`INSERT INTO ${this.sql(
      TABLE_NAME,
    )} (id, name, address) VALUES (${createEmployeeDto.id}, ${
      createEmployeeDto.name
    }, ${createEmployeeDto.address})`;
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDTO,
  ): Promise<void> {
    return await this.sql`UPDATE ${this.sql(TABLE_NAME)}  SET name = ${
      updateEmployeeDto.name
    }, address = ${
      updateEmployeeDto.address
    }, updated_at = now() WHERE id = ${id}`;
  }

  async remove(id: string): Promise<void> {
    return await this.sql`DELETE FROM ${this.sql(TABLE_NAME)} WHERE id = ${id}`;
  }

  async findAll(): Promise<Employees> {
    return await this
      .sql<Employees>`SELECT id, name, address, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )}`;
  }

  async findOne(id: string): Promise<Employee> {
    return await this
      .sql<Employee>`SELECT id, name, address, created_at, updated_at FROM ${this.sql(
      TABLE_NAME,
    )} WHERE id = ${id}`;
  }
}
