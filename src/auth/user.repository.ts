import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {User} from "./user.schema";
import {Model} from "mongoose";
import {RegisterDto} from "./dto/register.dto";
import {RoleEnum} from "./enums/role.enum";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private userModel:Model<User>) {
    }

    async register(registerDto:RegisterDto){
        if (registerDto.email.includes("admin"))
        {
            const user=new this.userModel({
                id:uuidv4(),
                email:registerDto.email,
                name:registerDto.name,
                role:[RoleEnum.User,RoleEnum.ADMIN],
                password:registerDto.password,
                mobile:registerDto.mobile
            })

            return  await user.save()

        }

        const user=new this.userModel({
            id:uuidv4(),
            email:registerDto.email,
            name:registerDto.name,
            role:RoleEnum.User,
            password:registerDto.password,
            mobile:registerDto.mobile
        })

        return await user.save()
    }

    async findUserByEmail(email:string){
        const  findUser=await this.userModel.findOne({email:email}).lean()
        return findUser
    }

    async findUserById(id:string){
        const user=await this.userModel.findOne({id})
        return user
    }
}