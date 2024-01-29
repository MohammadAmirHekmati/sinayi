import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";
import {User} from "../auth/user.schema";
import {Ticket} from "./ticket.schema";

export type MessageType=HydratedDocument<Message>
@Schema()
export class Message {

    @Prop()
    id:string

    @Prop()
    message:string

    @Prop()
    userId:string

    @Prop()
    user:User

    @Prop()
    ticketId:string

    @Prop()
    ticket:Ticket

    @Prop()
    createdAt:string
}

export const MessageSchema=SchemaFactory.createForClass(Message)