import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/connection';
import { DriversModule } from './drivers/module';
import { OfficeModule } from './offices/module';
import { EmployeeOfficeDistanceModule } from './employee_office_distances/module';
import { TripsModule } from './trips/module';
import { ThrottlerModule } from '@nestjs/throttler';
import { RolesModule } from './roles/module';
import { ResourcePermissionsModule } from './resource_permissions/module';

@Module({
  imports: [
    ResourcePermissionsModule,
    RolesModule,
    TripsModule,
    EmployeeOfficeDistanceModule,
    OfficeModule,
    EmployeesModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DriversModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 10,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
