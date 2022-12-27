import {EventEmitter, Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  // send data from one object to another obj by event emitter
  dataByEvent: EventEmitter<object> = new EventEmitter<object>();

  private dataSource: BehaviorSubject<object> = new BehaviorSubject<object>({});
  data: Observable<object> = this.dataSource.asObservable();

  constructor() {
  }

  // send data from one object to another obj by event emitter
  sendDataByEvent(data: object) {
    this.dataByEvent.emit(data);
  }

  // send data from one object to another obj by rxJs
  sendData(data: object) {
    this.dataSource.next(data);
  }

}
