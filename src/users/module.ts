import { Module } from '@nestjs/common';
import { Service } from './application/service';
import { Storage } from './application/ports';
import { RouteController } from './infrastructure/api/controller';
import { PostgresStorage } from './infrastructure/storage/postgres';
import { DatabaseModule } from 'src/database/connection';
import { RolesModule } from 'src/roles/module';

@Module({
  imports: [DatabaseModule, RolesModule],
  controllers: [RouteController],
  providers: [Service, { provide: Storage, useClass: PostgresStorage }],
})
export class UsersModule {}
