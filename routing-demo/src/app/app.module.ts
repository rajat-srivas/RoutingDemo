import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { UsersComponent } from './users/users.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ErrorsComponent } from './errors/errors.component';
import { CustomStylesDirective } from './custom-styles.directive';

@NgModule({
  declarations: [
    AppComponent,
    // UsersComponent,
    DepartmentsComponent,
    ErrorsComponent,
    CustomStylesDirective
  ],
  imports: [
 RouterModule,
  BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
