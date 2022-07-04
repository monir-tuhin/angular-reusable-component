import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef, Input, OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {FormBuilder, NG_VALUE_ACCESSOR} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ResultListComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultListComponent implements OnInit, OnDestroy {
  resultList: any[] = [];
  subscriptions: Subscription[] = [];
  // @ViewChild(ResultListComponent, {static: true}) resultList;
  // @Input() resultListOutput: EventEmitter<any> = new EventEmitter<any>();
  @Output() resultListOutput = new EventEmitter<any>();
  @Input() resultListInput: any[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.getResultList();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  getResultList() {
    this.resultList = [
      {id: 101, exam: 'PSC', passYear: 2005, result: 4.50},
      {id: 102, exam: 'JSC', passYear: 2008, result: 5.00},
      {id: 103, exam: 'SSC', passYear: 2010, result: 4.80},
      {id: 104, exam: 'HSC', passYear: 2012, result: 4.50},
      {id: 105, exam: 'Honors', passYear: 2016, result: 3.80},
      {id: 106, exam: 'Masters', passYear: 2018, result: 3.50}
    ];
    this.resultListOutput.emit(this.resultList);
  }

}
