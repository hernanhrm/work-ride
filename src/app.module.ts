import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/connection';
import { DriversModule } from './drivers/module';

@Module({
  imports: [
    EmployeesModule,
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    DriversModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
