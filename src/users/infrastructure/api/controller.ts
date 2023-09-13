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

@Controller('/v1/users')
export class RouteController {
  constructor(private service: Service) {}
  // commands
  @Post()
  async create(@Body() dto: CreateDto) {
    try {
      return await this.service.create(dto);
    } catch (err) {
      if (err instanceof CustomException) {
        throw new BadRequestException(err.message);
      }

      throw err;
    }
  }

  @Patch('/:id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpdateDto) {
    return await this.service.update(id, dto);
  }

  @Delete('/:id')
  async remove(@Param('id', ParseUUIDPipe) id: string) {
    return await this.service.remove(id);
  }

  // queries
  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get('/:id')
  async findOne(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    return await this.service.findOne(id);
  }
}
