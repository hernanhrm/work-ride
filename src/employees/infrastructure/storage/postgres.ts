import { CreateEmployeeDTO } from 'src/employees/domain/create.dto';
import { UpdateEmployeeDTO } from 'src/employees/domain/update.dto';
import { Employees } from 'src/employees/domain/employee';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PostgresStorage {
  create(createEmployeeDto: CreateEmployeeDTO) {}

  findAll(): Employees {
    const employees: Employees = [
      {
        ID: '1',
        Name: 'Hernan',
        Address: 'Puerto Cortes',
        CreatedAt: Date.now().toString(),
      },
    ];
    return employees;
  }

  findOne(id: string) {
    const employees: Employees = [
      {
        ID: id,
        Name: 'Hernan',
        Address: 'Puerto Cortes',
        CreatedAt: Date.now().toString(),
      },
    ];
    return employees;
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDTO) {
    return this.update(id, updateEmployeeDto);
  }

  remove(id: string) {
    return this.remove(id);
  }
}
