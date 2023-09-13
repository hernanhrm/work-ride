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
import { DriversService as Service } from '../../application/service';
import { CreateDriverDto as CreateDto } from '../../domain/create.dto';
import { UpdateDriverDto as UpdateDto } from '../../domain/update.dto';
import { ResourcePermissions } from 'src/auth/permissions.guard';

const RESOURCE = 'DRIVERS';

@Controller('/v1/drivers')
export class DriversController {
  constructor(private readonly service: Service) {}

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
