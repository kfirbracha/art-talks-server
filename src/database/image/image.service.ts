import { Model } from 'mongoose';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Iimage } from 'src/interfaces/iimage.interface';
// import { imageProviders } from './image.provider';
import { ImageDocument, ImageSchema } from 'src/schemas/image.schema';
@Injectable()
export class ImageService {
  constructor(
    @Inject('IMAGE_MODEL')
    private imageModel: Model<ImageDocument>,
  ) {}

  async findAll() {
    return this.imageModel
      .find()
      .exec()
      .then((res) => {
        console.log({ res });
        return res;
      });
  }
}
