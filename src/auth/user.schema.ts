import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type UserType=HydratedDocument<User>
@Schema()
export class User {
    @Prop()
    id:string

    @Prop()
    name:string

    @Prop()
    password:string

    @Prop()
    role:[string]

    @Prop()
    email:string

    @Prop()
    mobile:string
}

export const UserSchema=SchemaFactory.createForClass(User)