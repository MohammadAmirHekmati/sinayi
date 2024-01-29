import {Body, Controller, Post, UseGuards} from "@nestjs/common";
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {AuthService} from "./auth.service";
import {RegisterDto} from "./dto/register.dto";
import {LoginDto} from "./dto/login.dto";
import {JwtGuard} from "./guard/jwt.guard";

@ApiTags("[AUTH]")
@Controller("auth")
export class AuthController {
    constructor(private authService:AuthService) {
    }

    @Post("register")
    register(@Body() registerDto:RegisterDto){
        return this.authService.register(registerDto)
    }

    // @ApiBearerAuth("access-token")
    // @UseGuards(JwtGuard)
    @Post("login")
    login(@Body() loginDto:LoginDto){
        return this.authService.login(loginDto)
    }
}