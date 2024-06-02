import { NestFactory } from '@nestjs/core';
import { QuizModule } from './quiz.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(QuizModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('QUIZ',true));
  app.useGlobalPipes(new ValidationPipe())
  const configService = app.get(ConfigService);
  await app.startAllMicroservices();
  await app.listen(configService.get('PORT'));




  // await app.listen(3000);
}
bootstrap();
