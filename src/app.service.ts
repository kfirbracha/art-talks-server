import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { ImageService } from './database/image/image.service';
import { Iimage } from './interfaces/iimage.interface';
import { MessageDocument } from './schemas/message.schema';
import { Model } from 'mongoose';
import { ImageDocument } from './schemas/image.schema';
import { UserDocument } from './schemas/user.schema';
@Injectable()
export class AppService {
  constructor(
    @Inject('MESSAGE_MODEL')
    private messageModel: Model<MessageDocument>,
    @Inject('IMAGE_MODEL')
    private imageModel: Model<ImageDocument>,
    @Inject('USER_MODEL')
    private userModel: Model<UserDocument>,
    private imageService: ImageService,
  ) {}
  async getImage() {
    return await this.imageService.findAll().then((res) => {
      console.log({ res });

      return res;
    });
  }

  async createMessage(payload) {
    const user = await this.userModel
      .findOne({ _id: payload.user_id })
      .then((res) => res);
    const image = await this.imageModel
      .findOne({ _id: payload.image_id })
      .then((res) => res);
    console.log({ image, user });
    payload.user_id = user._id;
    payload.image_id = image._id;
    this.messageModel.create(payload).then((res) => {
      console.log({ res });
    });
  }

  getMessages(image_id: string) {
    console.log({ image_id });
    return this.messageModel
      .find({ image_id })
      .populate('image_id')
      .populate('user_id', 'userName')
      .then((res) => {
        return res;
      });
  }
}
