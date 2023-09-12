import { Injectable } from '@nestjs/common';
import { UpdateEmployeeDTO as UpdateEmployeeDTO } from '../domain/update.dto';
import { CreateEmployeeDTO as CreateEmployeeDTO } from '../domain/create.dto';
import { Storage } from './ports';
import { Employee, Employees } from '../domain/employee.dto';

@Injectable()
export class EmployeesService {
  constructor(private readonly storage: Storage) {}

  // commands
  async create(createEmployeeDto: CreateEmployeeDTO): Promise<void> {
    return this.storage.create(createEmployeeDto);
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDTO,
  ): Promise<void> {
    return this.storage.update(id, updateEmployeeDto);
  }

  async remove(id: string): Promise<void> {
    return this.storage.remove(id);
  }

  // queries
  async findAll(): Promise<Employees> {
    return this.storage.findAll();
  }

  async findOne(id: string): Promise<Employee> {
    return this.storage.findOne(id);
  }
}
