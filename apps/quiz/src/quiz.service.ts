import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizRepository } from './quiz.repository';
import { AddParticipantDto } from './dto/add-participant.dto';
import { Quiz } from './schemas/quiz.schema';
import { Types } from 'mongoose';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { UpdateQuestionsDto } from './dto/update-question.dto';

@Injectable()
export class QuizService {
  constructor(private readonly quizRepository: QuizRepository){}
  private readonly logger = new Logger(QuizService.name);


  async createQuiz(request: CreateQuizDto){
    return this.quizRepository.create(request);
  }

  async showAll(){
    return this.quizRepository.find({});
  }

  async getQuizById(id: string): Promise<Quiz> {
    const quiz = await this.quizRepository.findOne({ _id: new Types.ObjectId(id) });
    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }

    return quiz;
  }

  async delete(id: string): Promise<{ deleted: boolean }> {
    await this.quizRepository.deleteById(id);
    return { deleted: true };
  }
  // async addParticipant(id: string, addParticipantDto: AddParticipantDto): Promise<Quiz> {
  //   const quiz = await this.quizRepository.findOne({ _id: new Types.ObjectId(id) });
  //   if (!quiz) {
  //     throw new NotFoundException(`Quiz with ID ${id} not found`);
  //   }

  //   const participantExists = quiz.participants.some(
  //     participant => participant.user_id === addParticipantDto.user_id
  //   );

  //   if (participantExists) {
  //     throw new BadRequestException(`Participant with user_id ${addParticipantDto.user_id} already exists`);
  //   }

  //   const filterQuery = { _id: new Types.ObjectId(id) };
  //   const updateQuery = { $push: { participants: addParticipantDto } };

  //   return this.quizRepository.findOneAndUpdate(filterQuery, updateQuery);
  // }

  // async removeParticipant(quizId: string, userId: string): Promise<Quiz> {
  //   const filterQuery = { _id: new Types.ObjectId(quizId) };
  //   const updateQuery = { $pull: { participants: { user_id: userId } } };

  //   const quiz = await this.quizRepository.findOneAndUpdate(filterQuery, updateQuery);
  //   if (!quiz) {
  //     throw new NotFoundException(`Quiz with ID ${quizId} not found`);
  //   }

  //   return quiz;
  // }
  async updateQuiz(id: string, updateQuizDto: UpdateQuizDto): Promise<Quiz> {
    const filterQuery = { _id: new Types.ObjectId(id) };
    const updateQuery = { $set: updateQuizDto };

    const quiz = await this.quizRepository.findOneAndUpdate(filterQuery, updateQuery);
    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }

    return quiz;
  }
  async updateQuestions(id: string, updateQuestionsDto: UpdateQuestionsDto): Promise<Quiz> {
    const filterQuery = { _id: new Types.ObjectId(id) };
    const updateQuery = { $set: { questions: updateQuestionsDto.questions } };

    const quiz = await this.quizRepository.findOneAndUpdate(filterQuery, updateQuery);
    if (!quiz) {
      throw new NotFoundException(`Quiz with ID ${id} not found`);
    }

    return quiz;
  }

  // async grading(data:any){
  //   this.logger.log(`Grading quiz with data: ${JSON.stringify(data)}`);
  // }
}
