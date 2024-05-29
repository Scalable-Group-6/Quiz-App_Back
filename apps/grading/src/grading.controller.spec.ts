import { Test, TestingModule } from '@nestjs/testing';
import { GradingController } from './grading.controller';
import { GradingService } from './grading.service';

describe('GradingController', () => {
  let gradingController: GradingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GradingController],
      providers: [GradingService],
    }).compile();

    gradingController = app.get<GradingController>(GradingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(gradingController.getHello()).toBe('Hello World!');
    });
  });
});
