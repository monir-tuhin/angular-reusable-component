import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ExaminationComponent} from '../share/examination/examination.component';

@Component({
	selector: 'app-monitoring',
	templateUrl: './monitoring.component.html',
	styleUrls: ['./monitoring.component.scss']
})
export class MonitoringComponent implements OnInit {
	examFormValueTemp: any;
	examObj: any;
	@ViewChild(ExaminationComponent, {static: true}) examinationComponent: ExaminationComponent;

	constructor(
		private cdr: ChangeDetectorRef,
		private fb: FormBuilder,
	) {

	}

	ngOnInit() {
		this.getValue();
	}

	getFormValue($event: any) {
		console.log('formValueFromExamination :', $event);
		this.examFormValueTemp = $event;
	}

	submit() {
		if (this.examinationComponent.examinationFG.valid) {
			console.log('formValueFromExamForOnSubmit:::::', this.examFormValueTemp);
		} else {
			alert('Required fields must be entry');
		}
	}

	getValue() {
		this.examObj = {
			temp: 22,
			pulse: 15
		};
	}

	reset() {
		this.examinationComponent.examinationFG.reset();
	}
}



