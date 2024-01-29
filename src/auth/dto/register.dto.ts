import {IsEmail, IsNotEmpty, IsString, Matches} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class RegisterDto {
    @ApiProperty()
    @IsEmail()
    @IsNotEmpty()
    email:string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name:string

    @ApiProperty()
    @IsString()
    @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,64}$/gm,{message:"پسور باید باید حداقل 8 کاراکتر و شامل حروف بزرگ و کوچک و کاراکتر های خاص باشد"})
    password:string

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    mobile:string
}