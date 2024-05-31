import { AbstractRepository } from "@app/common";
import { Injectable, Logger } from "@nestjs/common";
import { Quiz } from "./schemas/quiz.schema";
import { InjectConnection, InjectModel } from "@nestjs/mongoose";
import { Connection, Model } from "mongoose";

@Injectable()
export class QuizRepository extends AbstractRepository<Quiz> {
  protected readonly logger = new Logger(QuizRepository.name);

  constructor(
    @InjectModel(Quiz.name) quizModel: Model<Quiz>,
    @InjectConnection() connection: Connection
  ) {
    super(quizModel, connection);
  }
}
