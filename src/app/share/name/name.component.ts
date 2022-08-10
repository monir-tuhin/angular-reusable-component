import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  forwardRef,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {Subscription} from 'rxjs';
import {ControlValueAccessor, UntypedFormControl, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
	selector: 'name-input',
	templateUrl: './name.component.html',
	styleUrls: ['./name.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NameComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameComponent implements OnInit, ControlValueAccessor, OnDestroy {
  subscriptions: Subscription[] = [];
  name = new UntypedFormControl('');

  get value() {
    return this.name.value;
  }

  set value(value) {
    this.name.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  onChange: any = () => {};
  onTouched: any = () => {};

	constructor(
		private cdr: ChangeDetectorRef,
	) {
    this.subscriptions.push(
      this.name.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
	}

	ngOnInit() {

  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
    if (value === null) {
      this.name.reset();
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }


}
