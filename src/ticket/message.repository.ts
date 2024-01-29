import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Message} from "./message.schema";
import {Model} from "mongoose";
import {CreateMessageDto} from "./dto/create-message.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class MessageRepository {
    constructor(@InjectModel(Message.name) private messageModel:Model<Message>) {
    }

    async createMessage(createMessageDto:CreateMessageDto){
        const message=new this.messageModel({
            id:uuidv4(),
            message:createMessageDto.message,
            userId:createMessageDto.userId,
            user:createMessageDto.user,
            ticket:createMessageDto.ticket,
            ticketId:createMessageDto.ticketId,
            createdAt:new Date().getTime()
        })

        return await message.save()
    }

    async ticketMessages(ticketId:string){
        const messages=await this.messageModel.find({ticketId}).lean()
        return messages
    }
}