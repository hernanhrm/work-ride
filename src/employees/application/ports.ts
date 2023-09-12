import { CreateEmployeeDTO } from '../domain/create.dto';
import { Employee, Employees } from '../domain/employee';
import { UpdateEmployeeDTO } from '../domain/update.dto';

export abstract class Storage {
  // commands
  abstract create(createEmployeeDto: CreateEmployeeDTO): void;
  abstract update(id: string, updateEmployeeDto: UpdateEmployeeDTO): void;
  abstract remove(id: string): void;

  // queries
  abstract findAll(): Employees;
  abstract findOne(id: string): Employee;
}
