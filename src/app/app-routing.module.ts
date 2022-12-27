import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PersonComponent} from './person/person.component';
import {PersonUpdateComponent} from './person-update/person-update.component';
import {MonitoringComponent} from './monitoring/monitoring.component';


export const routes: Routes = [
  { path: 'person', component: PersonComponent},
  { path: 'person-update', component: PersonUpdateComponent},
  { path: 'monitoring', component: MonitoringComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
  ]
})
export class AppRoutingModule { }
