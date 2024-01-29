import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./user.schema";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {UserRepository} from "./user.repository";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports:[MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
        JwtModule.register({
            global:true,
            secret:"Abc123456@"
        })],
    controllers:[AuthController],
    providers:[AuthService,UserRepository],
    exports:[UserRepository]

})
export class AuthModule {}
