import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello WOW!';
  }

  getHelloworld(): string {
    return 'Hello World!';
  }

  sayWelcomeToTheUser(name: string): string {
    return `Welcome to the NestJS world, ${name}!`;
  }
}
