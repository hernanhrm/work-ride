import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import dotenvConfig from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  dotenvConfig.config();

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
