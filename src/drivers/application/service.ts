import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from '../domain/create.dto';
import { UpdateDriverDto } from '../domain/update.dto';
import { Driver, Drivers } from '../domain/driver.dto';
import { Storage } from './ports';

@Injectable()
export class DriversService {
  constructor(private readonly storage: Storage) {}

  async create(createDriverDto: CreateDriverDto): Promise<void> {
    // TODO: validate unique id
    return await this.storage.create(createDriverDto);
  }

  async update(id: string, updateDriverDto: UpdateDriverDto): Promise<void> {
    return await this.storage.update(id, updateDriverDto);
  }

  async remove(id: string): Promise<void> {
    return await this.storage.remove(id);
  }

  async findAll(): Promise<Drivers> {
    return await this.storage.findAll();
  }

  async findOne(id: string): Promise<Driver> {
    return await this.storage.findOne(id);
  }
}
