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
import { ResourcePermissionRolesModule } from './resource_permissions_roles/module';
import { UsersModule } from './users/module';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guard';
import { APP_GUARD } from '@nestjs/core';
import { PermissionsGuard } from './auth/permissions.guard';

@Module({
  imports: [
    UsersModule,
    ResourcePermissionRolesModule,
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
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PermissionsGuard,
    },
  ],
})
export class AppModule {}
