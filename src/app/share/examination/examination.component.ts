import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	forwardRef, Input,
	OnInit,
	Output
} from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
	selector: 'app-examination',
	templateUrl: './examination.component.html',
	styleUrls: ['./examination.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ExaminationComponent),
			multi: true
		}
	],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExaminationComponent implements OnInit {
	examinationFG: FormGroup;
	@Output() formValue = new EventEmitter<any>();
	@Input() item;
	subscriptions: Subscription[] = [];

	constructor(
		private cdr: ChangeDetectorRef,
		private fb: FormBuilder, ) {
	}

	ngOnInit() {
		this.createExaminationFG();
		this.subscriptions.push(
			this.examinationFG.valueChanges.subscribe(x => {
				console.log('form value changed');
				console.log(x);
				this.formValue.emit(x);
			})
		);
		console.log('valueGetFromMonitoring :', this.item);
		if (this.item) {
			this.examinationFG.patchValue(this.item);
		}
	}

	createExaminationFG() {
		this.examinationFG = this.fb.group({
			temp: ['', Validators.required],
			pulse: [''],
		});
	}

	get f() {
		return this.examinationFG.controls;
	}

	onSubmit() {
		console.log(this.examinationFG.value);
	}

}
