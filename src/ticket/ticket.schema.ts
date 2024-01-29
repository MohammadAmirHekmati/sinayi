import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";
import {User} from "../auth/user.schema";

export type TicketType=HydratedDocument<Ticket>

@Schema()
export class Ticket {
    @Prop()
    id:string

    @Prop()
    title:string

    @Prop()
    section:string

    @Prop()
    isDone:boolean

    @Prop()
    user:User

    @Prop()
    userId:string
}

export const TicketSchema=SchemaFactory.createForClass(Ticket)