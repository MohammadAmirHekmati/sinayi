import {createParamDecorator, ExecutionContext} from "@nestjs/common";
import {JwTokenInfo} from "../dto/jw-.token.info";

export const GetUser=createParamDecorator(
    (data: unknown, ctx: ExecutionContext): JwTokenInfo =>{
        const req=ctx.switchToHttp().getRequest()
        const user:JwTokenInfo=req["user"]
        return user
    }
)