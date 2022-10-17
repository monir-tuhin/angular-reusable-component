import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  ViewChild
} from '@angular/core';
import {PersonService} from '../partials/services/person.service';
import {Observable, of} from 'rxjs';
import {DataService} from '../partials/services/data.service';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {
  selectedPersonObjForEventEmitter: any;
  private selectedPersonObjForRxJs: object;
  personName: string;
  // @ViewChild('nameEventEmitter', {static: true}) personName: ElementRef;

  constructor(private personService: PersonService,
              private cdr: ChangeDetectorRef,
              private data: DataService,
              private zone: NgZone) { }

  ngOnInit() {

    this.data.data$.subscribe(value => console.log(value));

    this.getData();
    this.getData2();
  }


/*  ngAfterViewInit(): void {
    this.getData();
    this.cdr.detectChanges();
  }*/

  // send data from one object to another obj by event emitter
  getData() {
    this.personService.dataByEvent.subscribe(response => {
      // console.log('Person Update by event emitter::', response);  // you will get the data here.
      if (Object.keys(response).length !== 0) {
        this.selectedPersonObjForEventEmitter = response;
        this.personName = 'Hero';
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

data3() {
  this.personService.dataByEvent.subscribe(event => this.selectedPersonObjForEventEmitter = event);
  console.log('gggggggggggg', this.selectedPersonObjForEventEmitter);
}

}
