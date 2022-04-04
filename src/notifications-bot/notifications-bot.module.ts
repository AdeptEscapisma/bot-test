import { Module } from '@nestjs/common';
import { CreateEventController } from './slash-commands/create-event/create-event.controller';
import { CreateEventService } from './slash-commands/create-event/create-event.service';
import { GetEventsController } from './slash-commands/get-events/get-events.controller';
import { GetEventsService } from './slash-commands/get-events/get-events.service';

@Module({
  controllers: [CreateEventController, GetEventsController],
  imports: [],
  providers: [CreateEventService, GetEventsService]
})
export class NotificationsBotModule {}
