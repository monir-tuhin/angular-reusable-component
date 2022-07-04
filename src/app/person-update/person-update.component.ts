import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit} from '@angular/core';
import {PersonService} from '../partials/services/person.service';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {
  private selectedPersonObjForEventEmitter: object;
  private selectedPersonObjForRxJs: object;

  constructor(private personService: PersonService, private cdr: ChangeDetectorRef, private zone: NgZone) { }

  ngOnInit() {
    this.getData();
    this.getData2();
  }

  // send data from one object to another obj by event emitter
  getData() {
    this.personService.dataByEvent.subscribe(response => {
      // console.log('Person Update by event emitter::', response);  // you will get the data here.
      if (Object.keys(response).length !== 0) {
        this.selectedPersonObjForEventEmitter = response;
        console.log('selectedObjForEventEmitter :: ', this.selectedPersonObjForEventEmitter);
        this.cdr.markForCheck();
      } else {
        console.log('emptyObjForEventEmitter :: ', response);
      }
    });
  }

  getData2() {
    this.personService.data.subscribe(response => {
     // console.log('Person Update by rxJs::', response);  // you will receive the data from sender component here.
      if (Object.keys(response).length !== 0) {
        this.selectedPersonObjForRxJs = response;
        console.log('selectedObjForRxJs :: ', this.selectedPersonObjForRxJs);
      } else {
        console.log('emptyObjForRxJs :: ', response);
      }
    });
  }

}
