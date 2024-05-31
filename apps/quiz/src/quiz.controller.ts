import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizRequest } from './dto/create-quiz.request';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post()
  async createQuiz(
    @Body() request: CreateQuizRequest
  ){
    return this.quizService.createQuiz(request);
  }

  @Get()
  async getHello(){
    return this.quizService.showAll();
  }
}
