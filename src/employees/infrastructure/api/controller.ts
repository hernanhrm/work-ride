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
import { Employees } from 'src/employees/domain/employee';

@Controller('/v1/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDTO) {
    return this.employeesService.create(createEmployeeDto);
  }

  @Get()
  findAll() {
    const response: StandardResponse<Employees> = {
      data: this.employeesService.findAll(),
      successfulMessage: 'ok',
    };
    return response;
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.employeesService.findOne(id);
  }

  @Patch('/:id')
  update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDTO,
  ) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.employeesService.remove(id);
  }
}
