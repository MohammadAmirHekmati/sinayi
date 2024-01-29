import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import * as process from "process";
import {ConfigModule, ConfigService} from "@nestjs/config";

@Module({
    imports:[MongooseModule.forRoot("mongodb://localhost:27017/sinayi")]
})
export class DbModule {

}


// MongooseModule.forRootAsync({
//     imports:[ConfigModule],
//     inject:[ConfigService],
//     useFactory:(configService:ConfigService)=>({
//         uri:configService.get("mongo.url")
//     })
// })

// mongodb://root:EmcFJJrPZWGtx4aAN6PubfdX@kilimanjaro.liara.cloud:30218/my-app?authSource=admin