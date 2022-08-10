import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonComponent } from './person/person.component';
import {RouterModule} from '@angular/router';
import {ShareModule} from './share/share.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PersonUpdateComponent } from './person-update/person-update.component';
import {PersonService} from './partials/services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ShareModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
