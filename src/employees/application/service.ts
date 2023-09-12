import { Injectable } from '@nestjs/common';
import { UpdateEmployeeDTO as UpdateEmployeeDTO } from '../domain/update.dto';
import { CreateEmployeeDTO as CreateEmployeeDTO } from '../domain/create.dto';
import { Storage } from './ports';
import { Employee, Employees } from '../domain/employee';

@Injectable()
export class EmployeesService {
  constructor(private readonly storage: Storage) {}

  create(createEmployeeDto: CreateEmployeeDTO) {
    this.storage.create(createEmployeeDto);
  }

  findAll(): Employees {
    return this.findAll();
  }

  findOne(id: string): Employee {
    return this.findOne(id);
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDTO) {
    return this.update(id, updateEmployeeDto);
  }

  remove(id: string) {
    return this.remove(id);
  }
}
