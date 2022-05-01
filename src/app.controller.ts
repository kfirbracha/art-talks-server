import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Iimage } from './interfaces/iimage.interface';
import { CreateMessageDto } from './shared/dto/create-message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getImages')
  getImages() {
    return this.appService.getImage();
  }

  @Post('/createNewMessage')
  async createNewMessage(@Body() message: CreateMessageDto) {
    console.log({ message });

    return message;
  }

  @Post('/getMessages')
  async getMessages(@Body() req: any) {
    console.log(req);
    return this.appService.getMessages(req.image_id);
  }
}
