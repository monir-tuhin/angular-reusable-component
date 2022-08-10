import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {PersonService} from '../partials/services/person.service';
import {Router} from '@angular/router';
import {of} from 'rxjs';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonComponent implements OnInit {
  personForm: UntypedFormGroup;
  // resultList = new EventEmitter<any>();
  resultList: any[] = [];
  // @ViewChild(ResultListComponent, { static: false }) child: ResultListComponent; // it also get component's property

  // districtName: string;
  // personName: string;

  constructor( private formBuilder: UntypedFormBuilder,
               private personService: PersonService,
               private router: Router) {
    this.personForm = this.formBuilder.group({
      district: ['',  Validators.required],
      personName: ['',  Validators.required],
      results: [this.resultList]
    });
  }

  ngOnInit() {
    // this.getResultList();
  }

  submit() {
    // this.personForm.controls.results.patchValue(this.resultList);
    console.log('Person Save::', this.personForm.value);
    // console.log(this.child.resultList);
    // console.log(this.resultList);
  }

 /* getSelectedDistrict($event) {
    console.log($event);
    if ($event) {
      this.districtName = ($event && $event.districtName ? $event.districtName : null);
    } else {
      this.districtName = null;
    }
  }*/

  callFromChild(obj) {

  }

/*  getResultList() {
    this.resultList = [
      {id: 101, exam: 'PSC', passYear: 2005, result: 4.50},
      {id: 102, exam: 'JSC', passYear: 2008, result: 5.00},
      {id: 103, exam: 'SSC', passYear: 2010, result: 4.80},
      {id: 104, exam: 'HSC', passYear: 2012, result: 4.50},
      {id: 105, exam: 'Honors', passYear: 2016, result: 3.80},
      {id: 106, exam: 'Masters', passYear: 2018, result: 3.50}
    ];
  }*/

  resultListEvent($event: any) {
    console.log('result output', $event);
    this.personForm.controls.results.patchValue($event);
    // this.resultList =
  }

  // send data from one object to another obj by event emitter
  updatePerson(personObj: object) {
    this.personService.sendDataByEvent(personObj);
    this.router.navigate(['/person-update']);
  }

  // send data from one object to another obj by rxJs
  updatePerson2(personObj: object) {
    this.personService.sendData(personObj);
    this.router.navigate(['/person-update']);
  }
}
