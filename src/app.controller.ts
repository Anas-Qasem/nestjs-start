import { Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/hello-world')
  getHelloWorld(): string {
    return this.appService.getHelloworld();
  }

  @Post('/hello')
  postHello(@Query('name') name): string {
    return this.appService.sayWelcomeToTheUser(name);
  }

  @Post('/helloParams/:name')
  postHelloParams(@Param() prams): string {
    console.log(prams);
    return this.appService.sayWelcomeToTheUser("");
  }
}
