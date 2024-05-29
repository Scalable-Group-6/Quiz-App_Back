import { Injectable } from '@nestjs/common';

@Injectable()
export class GradingService {
  getHello(): string {
    return 'Hello World!';
  }
}
