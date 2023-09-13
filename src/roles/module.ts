import { Module } from '@nestjs/common';
import { Service } from './application/service';
import { RouteController } from './infrastructure/api/controller';
import { PostgresStorage } from './infrastructure/storage/postgres';
import { DatabaseModule } from 'src/database/connection';

@Module({
  imports: [DatabaseModule],
  controllers: [RouteController],
  providers: [
    {
      provide: Service,
      useClass: PostgresStorage,
    },
  ],
})
export class RolesModule {}
