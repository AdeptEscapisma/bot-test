import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetEventsService } from './get-events.service';

@Controller('get-events')
export class GetEventsController {
    constructor(private readonly getEventsService: GetEventsService) {}

    // TODO: test incoming request
    @Post()
    async getEvents(@Body() body: any) {
        return await this.getEventsService.getEvents(body);
    }
}
