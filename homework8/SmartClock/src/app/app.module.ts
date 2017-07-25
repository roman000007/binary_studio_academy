import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';

import {MdRadioModule, MdInputModule} from '@angular/material';
import { TimeComponent } from './time/time.component';
import { TimerComponent } from './timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import {MdButtonModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimeComponent,
    TimerComponent,
    StopwatchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdRadioModule,
    MdInputModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
