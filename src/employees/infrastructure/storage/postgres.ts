import { CreateEmployeeDTO } from 'src/employees/domain/create.dto';
import { UpdateEmployeeDTO } from 'src/employees/domain/update.dto';
import { Employee, Employees } from 'src/employees/domain/employee.dto';
import { Injectable, Inject } from '@nestjs/common';
import { PG_CONNECTION } from 'src/database/constants';

@Injectable()
export class PostgresStorage {
  constructor(@Inject(PG_CONNECTION) private sql) {}

  async create(createEmployeeDto: CreateEmployeeDTO): Promise<void> {
    return await this
      .sql`INSERT INTO employees (id, name, address) VALUES (${createEmployeeDto.id}, ${createEmployeeDto.name}, ${createEmployeeDto.address})`;
  }

  async findAll(): Promise<Employees> {
    return await this.sql<Employees>`SELECT * FROM employees`;
  }

  async findOne(id: string): Promise<Employee> {
    return await this
      .sql<Employee>`SELECT id, name, address, created_at, updated_at FROM employees WHERE id = ${id}`;
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDTO,
  ): Promise<void> {
    return await this
      .sql`UPDATE employees SET id = ${id}, name = ${updateEmployeeDto.name}, address = ${updateEmployeeDto.address}, updated_at = now())`;
  }

  async remove(id: string): Promise<void> {
    return await this.sql`DELETE FROM employees WHERE id = ${id}`;
  }
}
