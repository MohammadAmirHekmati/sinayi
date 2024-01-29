import {Module} from "@nestjs/common";
import {ConfigModule} from "@nestjs/config";
import mongoConfiguration from "./mongo/mongo.configuration";
import {JwtModule} from "@nestjs/jwt";

@Module({
    imports:[ConfigModule.forRoot({
    load:[mongoConfiguration],
        isGlobal:true
    })]
})
export class ConfigurationModule {

}