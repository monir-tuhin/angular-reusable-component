import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DistrictComponent} from './district/district.component';
import {NameComponent} from './name/name.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ResultListComponent} from './result-list/result-list.component';
import {ExaminationComponent} from './examination/examination.component';



@NgModule({
  declarations: [
    DistrictComponent,
    NameComponent,
    ResultListComponent,
    ExaminationComponent
  ],
  exports: [
    DistrictComponent,
    NameComponent,
    ResultListComponent,
    ExaminationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
