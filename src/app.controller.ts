import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  private static count  = 200;

  private static likeCount  = 50;

  @Get("/getHello")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/pageView")
  pageView(){
    AppController.count ++;
    return AppController.count;
  }

  @Get("/likeCount")
  likeCount(){
    AppController.likeCount ++;
    return AppController.likeCount;
  }
}
