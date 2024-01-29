import {Injectable} from "@nestjs/common";
import {TicketRepository} from "./ticket.repository";
import {CreateTicketDto} from "./dto/create-ticket.dto";
import {AuthService} from "../auth/auth.service";
import {UserRepository} from "../auth/user.repository";
import {JwTokenInfo} from "../auth/dto/jw-.token.info";
import {MessageRepository} from "./message.repository";
import {CreateMessageDto} from "./dto/create-message.dto";
import {CarriageReturnLineFeed} from "ts-loader/dist/constants";

@Injectable()
export class TicketService {
    constructor(private ticketRepository:TicketRepository,
                private userRepository:UserRepository,
                private messageRepository:MessageRepository) {
    }

    async createTicket(user:JwTokenInfo,createTicketDto:CreateTicketDto){
        const findUser=await this.userRepository.findUserById(user.uid)
        createTicketDto.userId=findUser.id
        createTicketDto.user=findUser
        const createTicket=await this.ticketRepository.createTicket(createTicketDto)
        const createMessageDto:CreateMessageDto={
            ticketId:createTicket.id,
            ticket:createTicket,
            message:createTicketDto.message,
            user:findUser,
            userId:findUser.id
        }
        await this.messageRepository.createMessage(createMessageDto)
        return createTicket
    }

    async createMessage(createMessageDto:CreateMessageDto,ticketId:string,userId:string){
        const findTicket=await this.ticketRepository.findTicketById(ticketId)
        const findUser=await this.userRepository.findUserById(userId)
        createMessageDto.ticketId=ticketId
        createMessageDto.ticket=findTicket
        createMessageDto.user=findUser
        createMessageDto.userId=userId
        const message=await this.messageRepository.createMessage(createMessageDto)
        return message
    }

    async userTickets(userId:string){
        return await this.ticketRepository.findUserTickets(userId)
    }

    async ticketMessages(ticketId:string){
        return await this.messageRepository.ticketMessages(ticketId)
    }

    async allTickets(user:JwTokenInfo){
        const checkIfAdmin=user.role.find(x=>x=="admin")
        if (checkIfAdmin)
            return await this.ticketRepository.findAllTickets()

        if (!checkIfAdmin)
            return  await this.ticketRepository.findAllTickets(user.uid)
    }
}