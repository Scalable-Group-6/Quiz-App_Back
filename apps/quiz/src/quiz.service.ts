import { Injectable } from '@nestjs/common';
import { CreateQuizRequest } from './dto/create-quiz.request';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(private readonly quizRepository: QuizRepository){}


  async createQuiz(request: CreateQuizRequest){
    return this.quizRepository.create(request);
  }

  async showAll(){
    return this.quizRepository.find({});
  }
}
