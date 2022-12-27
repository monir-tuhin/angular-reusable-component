import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef, OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'district-select',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DistrictComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DistrictComponent implements OnInit, ControlValueAccessor, OnDestroy {
  districtList: any[] = [];
  // districtForm: FormGroup;
  subscriptions: Subscription[] = [];
  districtName = new UntypedFormControl('');

  // @Output() districtSelectEvent = new EventEmitter<any>();

  get value() {
    return this.districtName.value;
  }

  set value(value) {
    this.districtName.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor(
    private cdr: ChangeDetectorRef,
    private formBuilder: UntypedFormBuilder
  ) {
    /*this.districtForm = this.formBuilder.group({
      districtName: [],
    });*/
    this.subscriptions.push(
      this.districtName.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnInit() {
    this.getDistrictList();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  getDistrictList() {
    this.districtList = [
      {id: 101, name: 'Dhaka'},
      {id: 102, name: 'Khulna'},
      {id: 103, name: 'Satkhira'},
      {id: 104, name: 'Barisal'},
      {id: 105, name: 'Chadpur'},
    ];
  }

  // changeSupplier($event) {
  //   this.districtSelectEvent.emit($event);
  // }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
    if (value === null) {
      this.districtName.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

}
