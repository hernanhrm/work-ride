import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DriversService } from '../../application/service';
import { CreateDriverDto } from '../../domain/create.dto';
import { UpdateDriverDto } from '../../domain/update.dto';

@Controller('/v1/drivers')
export class DriversController {
  constructor(private readonly driversService: DriversService) {}

  // commands
  @Post()
  async create(@Body() createDriverDto: CreateDriverDto) {
    return await this.driversService.create(createDriverDto);
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() updateDriverDto: UpdateDriverDto,
  ) {
    return await this.driversService.update(id, updateDriverDto);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return await this.driversService.remove(id);
  }

  // queries
  @Get()
  async findAll() {
    return await this.driversService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string) {
    return await this.driversService.findOne(id);
  }
}
