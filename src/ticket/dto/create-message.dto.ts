import {Prop} from "@nestjs/mongoose";
import {User} from "../../auth/user.schema";
import {Ticket} from "../ticket.schema";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class CreateMessageDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    message:string

    userId?:string

    user?:User

    ticketId?:string

    ticket?:Ticket
}