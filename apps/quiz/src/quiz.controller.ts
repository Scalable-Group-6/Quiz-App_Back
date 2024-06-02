import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { CreateQuizDto } from "./dto/create-quiz.dto";
import { AddParticipantDto } from "./dto/add-participant.dto";
import { UpdateQuizDto } from "./dto/update-quiz.dto";
import { UpdateQuestionsDto } from "./dto/update-question.dto";
import { RmqService } from "@app/common";
import { Ctx, EventPattern, Payload, RmqContext } from "@nestjs/microservices";
import { JwtAuthGuard } from "@app/common";

@Controller("quiz")
export class QuizController {
  constructor(
    private readonly quizService: QuizService,
    private readonly rmqService: RmqService
  ) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createQuiz(
    @Body() request: CreateQuizDto

    //  ,@Req() req:any
  ) {
    // console.log(req.user);
    return this.quizService.createQuiz(request);
  }
  @Get(":id")
  @UseGuards(JwtAuthGuard)
  async getQuizById(@Param("id") id: string) {
    return this.quizService.getQuizById(id);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getAllQuiz() {
    return this.quizService.showAll();
  }
  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  async deleteQuiz(@Param("id") id: string) {
    return this.quizService.delete(id);
  }
  // @Patch(":id/participant")
  // async addParticipant(
  //   @Param("id") id: string,
  //   @Body() addParticipantDto: AddParticipantDto
  // ) {
  //   return this.quizService.addParticipant(id, addParticipantDto);
  // }
  // @Delete(":id/participant/:userId")
  // async removeParticipant(
  //   @Param("id") id: string,
  //   @Param("userId") userId: string
  // ) {
  //   return this.quizService.removeParticipant(id, userId);
  // }
  @Patch(":id")
  @UseGuards(JwtAuthGuard)
  async updateQuiz(
    @Param("id") id: string,
    @Body() updateQuizDto: UpdateQuizDto
  ) {
    return this.quizService.updateQuiz(id, updateQuizDto);
  }
  @Patch(":id/questions")
  @UseGuards(JwtAuthGuard)
  async updateQuestions(
    @Param("id") id: string,
    @Body() updateQuestionsDto: UpdateQuestionsDto
  ) {
    return this.quizService.updateQuestions(id, updateQuestionsDto);
  }

  // @EventPattern('grading')
  // async handleGrading(@Payload() data:any, @Ctx() context: RmqContext) {
  //   // this.quizService.grading(data);
  //   console.log(data);
  //   // this.rmqService.ack(context);
  //   // console.log(data);
  // }
}
