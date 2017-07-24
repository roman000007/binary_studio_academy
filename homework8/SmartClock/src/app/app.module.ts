import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';

import {MdRadioModule} from '@angular/material';
import { TimeComponent } from './time/time.component';
import { TimerComponent } from './timer/timer.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { TimeDisplayerComponent } from './time-displayer/time-displayer.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimeComponent,
    TimerComponent,
    StopwatchComponent,
    TimeDisplayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
