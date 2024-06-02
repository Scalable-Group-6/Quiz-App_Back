import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { GradingService } from './grading.service';
import { CreateGradingDto } from './dto/create-grading.dto';

@Controller('grading')
export class GradingController {
  constructor(private readonly gradingService: GradingService) {}

  @Get()
  async getAllData(){
    return this.gradingService.getGrading();
  }

  @Post()
  async createGrading(@Body() request: CreateGradingDto) {
    // console.log(request);
    return this.gradingService.createGrading(request);
  }
  @Get('quiz/:quiz_id')
  async getGradingByQuizId(@Param('quiz_id') quiz_id: string) {
    return this.gradingService.findByQuizId(quiz_id);
  }
  @Get('user/:user_id')
  async getGradingByUserId(@Param('user_id') user_id: string) {
    return this.gradingService.findByUserId(user_id);
  }
  @Delete(':id')
  async deleteGrading(@Param('id') id: string) {
    return this.gradingService.delete(id);
  }
  @Delete()
  async deleteAllData(){
    return this.gradingService.deleteAll();
  }

  // @Post()
  // gradingQuiz() {
  //   return this.gradingService.gradingQuiz();
  // }
}
