import {Prop} from "@nestjs/mongoose";
import {User} from "../../auth/user.schema";
import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsString} from "class-validator";

export class CreateTicketDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    section:string

    user?:User

    userId?:string

    @ApiProperty()
    @IsString()
    message:string
}