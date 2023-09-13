import { Injectable } from '@nestjs/common';
import { UpdateDto } from '../domain/update.dto';
import { CreateDto } from '../domain/create.dto';
import { Storage } from './ports';
import { Result, Results } from '../domain/query.dto';
import { Reports } from '../domain/report.dto';

@Injectable()
export class Service {
  constructor(private readonly storage: Storage) {}

  // commands
  async create(dto: CreateDto): Promise<void> {
    return this.storage.create(dto);
  }

  async update(id: string, dto: UpdateDto): Promise<void> {
    return this.storage.update(id, dto);
  }

  async remove(id: string): Promise<void> {
    return this.storage.remove(id);
  }

  // queries
  async findAll(): Promise<Results> {
    return this.storage.findAll();
  }

  async findOne(id: string): Promise<Result> {
    return this.storage.findOne(id);
  }

  async reportByDateRange(
    startDate: string,
    endDate: string,
  ): Promise<Reports> {
    return this.storage.reportByRangeDate(startDate, endDate);
  }
}
