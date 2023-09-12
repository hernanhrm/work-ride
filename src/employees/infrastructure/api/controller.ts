import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { EmployeesService } from '../../application/service';
import { CreateEmployeeDTO } from '../../domain/create.dto';
import { UpdateEmployeeDTO } from '../../domain/update.dto';

@Controller('/v1/employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDTO) {
    return await this.employeesService.create(createEmployeeDto);
  }

  @Get()
  async findAll() {
    return await this.employeesService.findAll();
  }

  @Get('/:id')
  async findOne(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    return this.employeesService.findOne(id);
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDTO,
  ) {
    return this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete('/:id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.employeesService.remove(id);
  }
}
