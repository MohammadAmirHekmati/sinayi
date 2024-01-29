import { Module } from '@nestjs/common';
import {DbModule} from "./db/db.module";
import { AuthModule } from './auth/auth.module';
import { TicketModule } from './ticket/ticket.module';


@Module({
  imports: [DbModule, AuthModule, TicketModule],
})
export class AppModule {}
