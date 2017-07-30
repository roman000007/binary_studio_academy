import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';

import {MdRadioModule, MdInputModule, MdButtonModule} from '@angular/material';
import { TimeComponent } from './time/time.component';
import { TimerComponent } from './timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

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
  exports:[     
    ClockComponent,
    TimeComponent,
    TimerComponent,
    StopwatchComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
