import { Module } from '@nestjs/common';
import { NotificationsBotModule } from './notifications-bot/notifications-bot.module';

@Module({
  imports: [NotificationsBotModule],
  providers: [],
})
export class AppModule {}
