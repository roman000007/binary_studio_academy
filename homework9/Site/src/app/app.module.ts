import { HumanService } from './services/human.service';
import { ForHumanGuard } from './guards/for-human.guard';
import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk';
import { MdRadioModule, MdInputModule, MdButtonModule, MdTableModule } from '@angular/material';
import { AppModule as TimerModule } from './../timer/app.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ForgetComponent } from './forget/forget.component';
import { ForLoginedGuard } from './guards/for-logined.guard';
import { ForUnloginedGuard } from './guards/for-unlogined.guard';
import { PasswordComponent } from './password/password.component';
import { ProfileComponent } from './profile/profile.component';
import { TimerComponent } from './timer/timer.component';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';
import { SortPipe } from './pipes/sort.pipe';



const appRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [ForUnloginedGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ForUnloginedGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [ForLoginedGuard],
    children: [
      {
        path: '',
        redirectTo: 'profile',
        pathMatch: 'full',
        canActivate: [ForLoginedGuard]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ForLoginedGuard]
      },
      {
        path: 'timer',
        component: TimerComponent,
        canActivate: [ForLoginedGuard]
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [ForLoginedGuard]
      },
    ]
  },
  {
    path: 'forget',
    component: ForgetComponent,
    canActivate: [ForUnloginedGuard],
    children: [
      {
        path: ':id',
        component: PasswordComponent,
        canActivate: [ForHumanGuard]
      }
    ]
  },
  { 
    path: '**',
   component: ErrorComponent 
  }
];



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MainComponent,
    ForgetComponent,
    PasswordComponent,
    ProfileComponent,
    TimerComponent,
    UsersComponent,
    ErrorComponent,
    SortPipe
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    MdInputModule,
    MdButtonModule,
    BrowserAnimationsModule,
    TimerModule,
    MdTableModule,
    CdkTableModule,
    AngularFontAwesomeModule 
  ],
  providers: [
    ForLoginedGuard,
    ForUnloginedGuard,
    ForHumanGuard,
    UserService,
    HumanService
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
