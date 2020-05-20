import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {User} from "./interfaces/user.interface";
import {CreateUserDto} from "./dtos/create-user.dto";
import {UpdateUserDto} from "./dtos/update-user.dto";

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) {
    }

    create(payload: CreateUserDto): Promise<User> {
        return this.userModel.create(payload);
    }

    findMany(createdAt?: string): Promise<User[]> {
        return this.userModel.find(createdAt ? { createdAt: { $gte: createdAt }} : {}).exec();
    }

    update(id: string, payload: UpdateUserDto): Promise<User> {
        return this.userModel.findByIdAndUpdate(id, payload, { new: true }).exec();
    }

    delete(id: string): Promise<User> {
        return this.userModel.findByIdAndDelete(id).exec();
    }
}
