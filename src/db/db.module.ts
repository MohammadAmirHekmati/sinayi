import {Module} from "@nestjs/common";
import {MongooseModule} from "@nestjs/mongoose";
import * as process from "process";
import {ConfigModule, ConfigService} from "@nestjs/config";
// mongodb://root:EmcFJJrPZWGtx4aAN6PubfdX@kilimanjaro.liara.cloud:30218/my-app?authSource=admin
// mongodb://localhost:27017/sinayi
@Module({
    imports:[MongooseModule.forRoot("mongodb://root:EmcFJJrPZWGtx4aAN6PubfdX@kilimanjaro.liara.cloud:30218/my-app?authSource=admin")]
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