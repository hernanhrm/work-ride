import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/connection';
import { DriversService } from 'src/drivers/application/service';
import { DriversController } from 'src/drivers/infrastructure/api/controller';
import { PostgresStorage } from './infrastructure/storage/postgres';

@Module({
  imports: [DatabaseModule],
  controllers: [DriversController],
  providers: [
    {
      provide: DriversService,
      useClass: PostgresStorage,
    },
  ],
})
export class DriversModule {}
