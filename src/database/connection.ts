import { Module } from '@nestjs/common';
import { PG_CONNECTION } from './constants';
import { ConfigService } from '@nestjs/config';
import postgres from 'postgres';

const dbProvider = {
  provide: PG_CONNECTION,
  inject: [ConfigService],
  useFactory: async (configService: ConfigService) => {
    const queryClient = postgres(configService.get<string>('DB_URL'), {
      transform: postgres.camel,
    });

    return queryClient;
  },
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DatabaseModule {}
