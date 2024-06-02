import { Inject, Injectable, Logger } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { QUIZ_SERVICE } from "./constants/services";
import { ClientProxy } from "@nestjs/microservices";
import { GradingRepository } from "./grading.repository";
import { Grading } from "./schemas/grading.schema";

@Injectable()
export class GradingService {
  constructor(private readonly gradingRepository: GradingRepository) {}
  private readonly logger = new Logger(GradingService.name);
  getHello(): string {
    return "Hello World!";
  }
  async getGrading(): Promise<Grading[]> {
    return this.gradingRepository.find({});
  }
  async createGrading(request) {
    const { correct_answers, user_answers } = request;
    const score = this.calculateGrade(correct_answers, user_answers);
    request.score = score;
    return this.gradingRepository.create(request);
  }
  async findByQuizId(quiz_id: string): Promise<Grading[]> {
    return this.gradingRepository.find({ quiz_id });
  }
  async findByUserId(user_id: string): Promise<Grading[]> {
    return this.gradingRepository.find({ user_id });
  }
  async delete(id: string): Promise<{ deleted: boolean }> {
    await this.gradingRepository.deleteById(id);
    return { deleted: true };
  }
  async deleteAll(): Promise<{ deleted: boolean }> {
    await this.gradingRepository.deleteAll();
    return { deleted: true };
  }
  calculateGrade(correctAnswers: string[], userAnswers: string[]) {
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
      if (correctAnswers[i] === userAnswers[i]) {
        score++;
      }
    }
    return score;
  }
}
