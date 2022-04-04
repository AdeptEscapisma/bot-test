import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEventService } from './create-event.service';

@Controller('create-event')
export class CreateEventController {
    constructor(private readonly createEventService: CreateEventService) {}

    // TODO: test incoming request and change body type
    @Get()
    getModal(@Body() body: any) {
        return this.createEventService.getModal(body.trigger_id);
    }

    @Post()
    createEvent(@Body() createEventDTO: any) {
        return this.createEventService.createEvent(createEventDTO);
    }
}
