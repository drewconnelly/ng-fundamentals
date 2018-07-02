import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {

  }

  resolve() {
    //tutorial recommended below approach, but seems to be deprecated in rxjs 6.1.0
    //return this.eventService.getEvents().map(events => events);
    //see https://github.com/angular/angular/issues/15548
    return this.eventService.getEvents().pipe(map(data => data));
  }
}
