import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { NextCloudCalendarService } from 'src/common/services/next-cloud-calendar.service';
import { CreateEventController } from './slash-commands/create-event/create-event.controller';
import { CreateEventService } from './slash-commands/create-event/create-event.service';
import { GetEventsController } from './slash-commands/get-events/get-events.controller';
import { GetEventsService } from './slash-commands/get-events/get-events.service';

@Module({
  controllers: [CreateEventController, GetEventsController],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    })
  ],
  providers: [CreateEventService, NextCloudCalendarService, GetEventsService]
})
export class NotificationsBotModule {}
