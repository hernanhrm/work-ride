import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  BadRequestException,
} from '@nestjs/common';
import { Service } from '../../application/service';
import { CreateDto } from '../../domain/create.dto';
import { UpdateDto } from '../../domain/update.dto';
import { CustomException } from 'src/shared/infrastructure/domain/exceptions';
import { ResourcePermissions } from 'src/auth/permissions.guard';

const RESOURCE = 'USERS';

@Controller('/v1/users')
export class RouteController {
  constructor(private service: Service) {}
  // commands
  @Post()
  @ResourcePermissions(RESOURCE, 'create')
  async create(@Body() dto: CreateDto) {
    try {
      return await this.service.create(dto);
    } catch (err) {
      if (err instanceof CustomException) {
        throw new BadRequestException(err.message);
      }
    }
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