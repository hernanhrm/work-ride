import { CreateEmployeeDTO } from '../domain/create.dto';
import { Employee, Employees } from '../domain/employee.dto';
import { UpdateEmployeeDTO } from '../domain/update.dto';

export abstract class Storage {
  // commands
  abstract create(createEmployeeDto: CreateEmployeeDTO): Promise<void>;
  abstract update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDTO,
  ): Promise<void>;
  abstract remove(id: string): Promise<void>;

  // queries
  abstract findAll(): Promise<Employees>;
  abstract findOne(id: string): Promise<Employee>;
}
