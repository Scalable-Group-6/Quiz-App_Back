import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { Grading } from "./schemas/grading.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";

@Injectable()
export class GradingRepository extends AbstractRepository<Grading> {
  protected readonly logger = new Logger(GradingRepository.name);

  constructor(
    @InjectModel(Grading.name) quizModel: Model<Grading>,
    @InjectConnection() connection: Connection
  ) {
    super(quizModel, connection);
  }
}
