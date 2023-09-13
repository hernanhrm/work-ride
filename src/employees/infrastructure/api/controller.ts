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
import { ResourcePermissions } from 'src/auth/permissions.guard';

@Controller('/v1/employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}
  // commands
  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDTO) {
    return await this.employeesService.create(createEmployeeDto);
  }

  @Patch('/:id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDTO,
  ) {
    return await this.employeesService.update(id, updateEmployeeDto);
  }

  @Delete('/:id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.employeesService.remove(id);
  }

  // queries

  @Get()
  @ResourcePermissions('EMPLOYEES', 'findAll')
  async findAll() {
    return await this.employeesService.findAll();
  }

  @Get('/:id')
  async findOne(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    return await this.employeesService.findOne(id);
  }
}
