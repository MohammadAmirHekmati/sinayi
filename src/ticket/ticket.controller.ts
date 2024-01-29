import {Body, Controller, Get, Post, Query, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {TicketService} from "./ticket.service";
import {JwTokenInfo} from "../auth/dto/jw-.token.info";
import {CreateTicketDto} from "./dto/create-ticket.dto";
import {GetUser} from "../auth/decorators/get-user.decorator";
import {JwtGuard} from "../auth/guard/jwt.guard";
import {CreateMessageDto} from "./dto/create-message.dto";

@ApiTags("[TICKET]")
@Controller("ticket")
export class TicketController {
    constructor(private ticketService:TicketService) {
    }


    @ApiBearerAuth("access-token")
    @UseGuards(JwtGuard)
    @Post("create")
    async createTicket(@GetUser() user:JwTokenInfo,@Body() createTicketDto:CreateTicketDto){
        return this.ticketService.createTicket(user, createTicketDto)
    }

    @ApiBearerAuth("access-token")
    @UseGuards(JwtGuard)
    @Post("create/message")
    async createMessage(@Body() createMessageDto:CreateMessageDto,@Query("ticketId") ticketId:string,@GetUser() user:JwTokenInfo){
        return this.ticketService.createMessage(createMessageDto,ticketId,user.uid)
    }

    @ApiBearerAuth("access-token")
    @UseGuards(JwtGuard)
    @Get("user")
    async userTickets(@GetUser() user:JwTokenInfo){
        return this.ticketService.userTickets(user.uid)
    }

    @ApiBearerAuth("access-token")
    @UseGuards(JwtGuard)
    @Get("messages")
    async ticketMessages(@Query("ticketId") ticketId:string){
        return await this.ticketService.ticketMessages(ticketId)
    }

    @ApiBearerAuth("access-token")
    @UseGuards(JwtGuard)
    @Get("all")
    async allTickets(@GetUser() user:JwTokenInfo){
        return await this.ticketService.allTickets(user)
    }
}