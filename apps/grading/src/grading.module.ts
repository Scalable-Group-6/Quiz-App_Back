import { Module } from "@nestjs/common";
import { GradingController } from "./grading.controller";
import { GradingService } from "./grading.service";
import { AuthModule, DatabaseModule, RmqModule } from "@app/common";
import { ConfigModule } from "@nestjs/config";
import * as Joi from "joi";
import { QUIZ_SERVICE } from "./constants/services";
import { GradingRepository } from "./grading.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Grading, GradingSchema } from "./schemas/grading.schema";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        // RABBIT_MQ_URL: Joi.string().required(),
        // RABBIT_MQ_GRADING_QUEUE: Joi.string().required(),
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/grading/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{
      name: Grading.name, schema: GradingSchema
    }]),
    RmqModule.register({
      name: QUIZ_SERVICE,
    }),
    AuthModule
  ],
  controllers: [GradingController],
  providers: [GradingService,GradingRepository],
})
export class GradingModule {}
