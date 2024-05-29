import { Controller, Get } from '@nestjs/common';
import { GradingService } from './grading.service';

@Controller()
export class GradingController {
  constructor(private readonly gradingService: GradingService) {}

  @Get()
  getHello(): string {
    return this.gradingService.getHello();
  }
}
