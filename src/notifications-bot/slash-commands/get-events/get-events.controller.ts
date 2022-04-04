import { Body, Controller, Get } from '@nestjs/common';
import { GetEventsService } from './get-events.service';

@Controller('get-events')
export class GetEventsController {
    constructor(private readonly getEventsService: GetEventsService) {}

    // TODO: test incoming request
    @Get()
    async getEvents(@Body() body: any) {
        return await this.getEventsService.getEvents(body);
    }
}
