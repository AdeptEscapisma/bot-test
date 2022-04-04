import { Injectable } from '@nestjs/common';
import { instanceToPlain, plainToInstance } from 'class-transformer';
import { CreateEventDTO } from './dto/create-event.dto';
import { EventModalDTO } from './dto/event-modal.dto';

@Injectable()
export class CreateEventService {
    getModal(body: any) {
        // const title = {
        //   display_name: 'Название события',
        //   name: 'event_title',
        //   type: 'text',
        //   min_length: 5,
        //   max_length: 50,
        //   placeholder: 'Как я познакомился с NestJS'
        // };
    
        // const start = {
        //   display_name: 'Начало',
        //   name: 'event_start',
        //   type: 'text',
        //   placeholder: 'dd/MM/yyyy HH:mm'
        // };
    
        // const end = {
        //   display_name: 'Окончание',
        //   name: 'event_end',
        //   type: 'text',
        //   placeholder: 'dd/MM/yyyy HH:mm'
        // };
    
        // const location = {
        //   display_name: 'Место встречи',
        //   name: 'event_location',
        //   type: 'text',
        //   min_length: 5,
        //   max_length: 100,
        //   placeholder: 'Офис 96'
        // };
    
        // const speaker = {
        //   display_name: 'Докладчик',
        //   name: 'event_speaker',
        //   type: 'text',
        //   placeholder: 'daniil.milin'
        // };
        
        // const description = {
        //   display_name: 'Подробности',
        //   name: 'event_description',
        //   type: 'textarea',
        //   placeholder: 'Немного историй о том, как я начал знакомство с NestJS после работы с чистым Express'
        // };
    
        // const elements = [ 
        //   title,
        //   start,
        //   end,
        //   location,
        //   speaker,
        //   description
        // ];
    
        // const dialog = {
        //   callback_id: 'mycallbackid',
        //   title: 'Создать событие',
        //   elements,
        //   introduction_text: 'Окно создания события в рабочем календаре.',
        //   submit_label: 'Создать'
        // };
    
        // const modal = plainToInstance(EventModalDTO, {
        //   trigger_id,
        //   url: 'post-event-url',
        //   dialog
        // })
    
        // return instanceToPlain(modal);
        console.log(body);
        return 'Succ';
      }
    
      async createEvent(createEvent: any) {
        console.log(createEvent);
        return 'Succ';
      }
    
}
