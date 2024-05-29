import { NestFactory } from '@nestjs/core';
import { GradingModule } from './grading.module';

async function bootstrap() {
  const app = await NestFactory.create(GradingModule);
  await app.listen(3000);
}
bootstrap();
