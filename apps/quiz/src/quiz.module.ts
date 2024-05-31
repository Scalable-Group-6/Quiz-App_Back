import { Module } from "@nestjs/common";
import { QuizController } from "./quiz.controller";
import { QuizService } from "./quiz.service";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { DatabaseModule } from "@app/common";

import { MongooseModule } from "@nestjs/mongoose";
import { Quiz, QuizSchema } from "./schemas/quiz.schema";
import { QuizRepository } from "./quiz.repository";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema:Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      
      }),
      envFilePath: './apps/quiz/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{
      name: Quiz.name, schema: QuizSchema
    }])
  ],
  controllers: [QuizController,],
  providers: [QuizService,QuizRepository],
})
export class QuizModule {}
