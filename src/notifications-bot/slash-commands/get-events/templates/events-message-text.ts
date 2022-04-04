import { EventJSON } from "ical-js-parser";
import { DateTime } from "luxon";

export function getEventsMessage(calendarEvents: EventJSON[]): string {    
    let str = '### Ближайшие события:\n\n'

    calendarEvents.forEach((calendarEvent: EventJSON, i) => {
        const { summary: topic, description, location, dtstart } = calendarEvent;

        const startTime = DateTime.fromISO(dtstart.value).toFormat('dd/MM/yyyy HH:mm');

        const eventStr = `#### ${i+1}. ${topic} \n`
        + `:peepo-institutions:  Докладчик: ${description} \n` 
        + `:mag_right:  Подробности: ${topic} \n`
        + `:round_pushpin:  Где: ${location} \n`
        + `:alarm_clock:  Начало в: ${startTime} :andrey: \n\n`;

        str += eventStr;
    })

    return str;
}