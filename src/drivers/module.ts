import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/connection';
import { DriversService } from 'src/drivers/application/service';
import { DriversController } from 'src/drivers/infrastructure/api/controller';
import { PostgresStorage } from './infrastructure/storage/postgres';
import { Storage } from './application/ports';

@Module({
  imports: [DatabaseModule],
  controllers: [DriversController],
  providers: [
    DriversService,
    {
      provide: Storage,
      useClass: PostgresStorage,
    },
  ],
})
export class DriversModule {}
