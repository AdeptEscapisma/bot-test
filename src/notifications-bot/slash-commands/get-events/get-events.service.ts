import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class GetEventsService {

    async getEvents(body: any) {
        console.log(body);
        return 'Succ';
    }
}
