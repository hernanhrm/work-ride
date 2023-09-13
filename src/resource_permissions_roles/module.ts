import { Module } from '@nestjs/common';
import { Service } from './application/service';
import { RouteController } from './infrastructure/api/controller';
import { PostgresStorage } from './infrastructure/storage/postgres';
import { DatabaseModule } from 'src/database/connection';
import { Storage } from './application/ports';

@Module({
  imports: [DatabaseModule],
  controllers: [RouteController],
  providers: [
    Service,
    {
      provide: Storage,
      useClass: PostgresStorage,
    },
  ],
  exports: [Service],
})
export class ResourcePermissionRolesModule {}
