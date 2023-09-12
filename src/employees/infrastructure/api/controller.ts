import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from '../../application/service';
import { CreateEmployeeDTO } from '../../domain/create.dto';
import { UpdateEmployeeDTO } from '../../domain/update.dto';
import { StandardResponse } from 'src/shared/infrastructure/api/response';
import { Employees } from 'src/employees/domain/employee.dto';

@Controller('/v1/employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDTO) {
    return await this.employeesService.create(createEmployeeDto);
  }

  @Get()
  async findAll() {
    const response: StandardResponse<Employees> = {
      data: await this.employeesService.findAll(),
      successfulMessage: 'ok',
    };

    return response;
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDTO,
  ) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}
