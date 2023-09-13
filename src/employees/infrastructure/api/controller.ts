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
import { EmployeesService as Service } from '../../application/service';
import { CreateEmployeeDTO as CreateDto } from '../../domain/create.dto';
import { UpdateEmployeeDTO as UpdateDto } from '../../domain/update.dto';
import { ResourcePermissions } from 'src/auth/permissions.guard';

const RESOURCE = 'EMPLOYEES';

@Controller('/v1/employees')
export class EmployeesController {
  constructor(private service: Service) {}

  // commands
  @Post()
  @ResourcePermissions(RESOURCE, 'create')
  async create(@Body() dto: CreateDto) {
    return await this.service.create(dto);
  }

  @Patch('/:id')
  @ResourcePermissions(RESOURCE, 'update')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateDto) {
    return await this.service.update(id, dto);
  }

  @Delete('/:id')
  @ResourcePermissions(RESOURCE, 'remove')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.service.remove(id);
  }

  // queries

  @Get()
  @ResourcePermissions(RESOURCE, 'findAll')
  async findAll() {
    return await this.service.findAll();
  }

  @Get('/:id')
  @ResourcePermissions(RESOURCE, 'findOne')
  async findOne(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    return await this.service.findOne(id);
  }
}
