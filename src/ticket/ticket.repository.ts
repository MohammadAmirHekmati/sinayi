import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import {Ticket} from "./ticket.schema";
import {Model} from "mongoose";
import {CreateTicketDto} from "./dto/create-ticket.dto";
import { v4 as uuidv4 } from 'uuid';
import {find} from "rxjs";
@Injectable()
export class TicketRepository {
    constructor(@InjectModel(Ticket.name) private ticketModel:Model<Ticket>) {
    }

    async createTicket(createTicketDto:CreateTicketDto){
        const ticket=new this.ticketModel({
            id:uuidv4(),
            title:createTicketDto.title,
            section:createTicketDto.section,
            user:createTicketDto.user,
            userId:createTicketDto.userId,
            isDone:false
        })

        return await ticket.save()
    }

    async findUserTickets(userId:string){
        const findUserTicket=await this.ticketModel.find({userId:userId}).lean()
        return findUserTicket
    }

    async findTicketById(ticketId:string){
        const findTicket=await this.ticketModel.findOne({id:ticketId}).lean()
        return findTicket
    }

    async findAllTickets(userId?:string){
        if (userId) {
            const tickets = await this.ticketModel.find({userId}).lean()

            return tickets
        }

        const allTickets=await this.ticketModel.find().lean()
        return allTickets
    }
}