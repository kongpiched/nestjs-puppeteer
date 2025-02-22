import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(@Res() res: Response) {
    const imageBuffer = await this.appService.testBrowser();
    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  }
}
