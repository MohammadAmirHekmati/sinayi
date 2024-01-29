import {registerAs} from "@nestjs/config";

export default registerAs("mongo",()=>({
    uri:"mongodb://root:EmcFJJrPZWGtx4aAN6PubfdX@kilimanjaro.liara.cloud:30218/my-app?authSource=admin"
}))