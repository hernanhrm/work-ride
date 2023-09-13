import { CreateDriverDto } from '../domain/create.dto';
import { Driver, Drivers } from '../domain/driver.dto';
import { UpdateDriverDto } from '../domain/update.dto';

export abstract class Storage {
  // commands
  abstract create(createEmployeeDto: CreateDriverDto): Promise<void>;
  abstract update(
    id: string,
    updateEmployeeDto: UpdateDriverDto,
  ): Promise<void>;
  abstract remove(id: string): Promise<void>;

  // queries
  abstract findAll(): Promise<Drivers>;
  abstract findOne(id: string): Promise<Driver>;
}
