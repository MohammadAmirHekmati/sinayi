import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {Ticket, TicketSchema} from "./ticket.schema";
import {TicketRepository} from "./ticket.repository";
import {AuthModule} from "../auth/auth.module";
import {TicketService} from "./ticket.service";
import {TicketController} from "./ticket.controller";
import {Message, MessageSchema} from "./message.schema";
import {MessageRepository} from "./message.repository";

@Module({
    imports:[AuthModule,MongooseModule.forFeature([{name:Ticket.name,schema:TicketSchema},{name:Message.name,schema:MessageSchema}])],
    providers:[TicketRepository,TicketService,MessageRepository],
    controllers:[TicketController]

})
export class TicketModule {}
