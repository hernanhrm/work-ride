import { Module } from '@nestjs/common';
import { EmployeesService } from './application/service';
import { EmployeesController } from './infrastructure/api/controller';
import { PostgresStorage } from './infrastructure/storage/postgres';
import { DatabaseModule } from 'src/database/connection';

@Module({
  imports: [DatabaseModule],
  controllers: [EmployeesController],
  providers: [
    {
      provide: EmployeesService,
      useClass: PostgresStorage,
    },
  ],
})
export class EmployeesModule {}
