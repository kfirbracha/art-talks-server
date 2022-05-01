import { Inject, Injectable } from '@nestjs/common';
import { Iuser } from 'src/interfaces/iuser.interface';
import { MessageDocument } from 'src/schemas/message.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/shared/dto/create-user.dto';
@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<MessageDocument>,
  ) {}
  async createUser(user: CreateUserDto) {
    console.log({ user });

    return await this.userModel.create(user).then((res) => {
      console.log({ res });

      return res;
    });
  }

  async login(user: Iuser) {
    return this.userModel
      .findOne({ userName: user.userName, password: user.password })
      .exec();
  }
}
