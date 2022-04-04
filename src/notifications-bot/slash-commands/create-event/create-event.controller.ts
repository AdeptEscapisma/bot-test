import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { CreateEventService } from './create-event.service';

@Controller('create-event')
export class CreateEventController {
    constructor(private readonly createEventService: CreateEventService) {}

    // TODO: test incoming request and change body type
    @Post('modal')
    @HttpCode(200)
    getModal(@Body() body: any) {
        console.log('POST create-event/modal', body)
        return this.createEventService.getModal(body.trigger_id);
    }

    @Post()
    createEvent(@Body() body: any) {
        console.log('POST create-event', body)
        return this.createEventService.createEvent(body);
    }
}
