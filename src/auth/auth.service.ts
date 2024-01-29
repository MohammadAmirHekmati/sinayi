import {BadRequestException, Injectable} from "@nestjs/common";
import {UserRepository} from "./user.repository";
import {RegisterDto} from "./dto/register.dto";
import {JwtService} from "@nestjs/jwt";
import {User} from "./user.schema";
import {LoginDto} from "./dto/login.dto";

@Injectable()
export class AuthService {
    constructor(private userRepository:UserRepository,
                private jwtService:JwtService) {
    }

    async register(registerDto:RegisterDto){
        const findDuplicateEmail=await this.userRepository.findUserByEmail(registerDto.email)
        if (findDuplicateEmail)
            throw new BadRequestException(["کاربر وجود دارد"])

        const user=await this.userRepository.register(registerDto)
        const createdUser=user as User
        const payload={uid:createdUser.id,role:createdUser.role}
        return this.jwtService.sign(payload,{expiresIn:"12h"})
    }

    async login(loginDto:LoginDto){
        const findUser=await this.userRepository.findUserByEmail(loginDto.email)

        if (!findUser)
            throw new BadRequestException("نام کاربری پیدا نشد")

        if (findUser.password!==loginDto.password)
            throw new BadRequestException("رمز عبور صحیح نمیباشد")

        const payload={uid:findUser.id,role:findUser.role}
        return this.jwtService.sign(payload,{expiresIn:"12h"})
    }
}