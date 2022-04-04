import { Injectable, NotFoundException } from '@nestjs/common';
import { getEventsMessage } from './templates/events-message-text';

@Injectable()
export class GetEventsService {

    async getEvents(body: any) {
        console.log(body);
        return 'Succ';
    }
}
