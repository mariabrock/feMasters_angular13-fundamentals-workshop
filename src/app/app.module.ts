
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { AdminComponent } from './examples/child-routes/admin/admin.component';
import { AdminPayrollComponent } from './examples/child-routes/admin/admin-payroll/admin-payroll.component';
import { AdminVacationComponent } from './examples/child-routes/admin/admin-vacation/admin-vacation.component';
import { CustomInputComponent } from './examples/custom-input/custom-input.component';
import { CustomControlComponent } from './examples/custom-input/custom-control/custom-control.component';
import { DynamicComponentComponent } from './examples/dynamic-component/dynamic-component.component';
import { CircleModule } from './examples/dynamic-component/circle/circle.module';
import { SquareModule } from './examples/dynamic-component/square/square.module';
import { TriangleModule } from './examples/dynamic-component/triangle/triangle.module';
import { LazyModuleComponent } from './examples/lazy-module/lazy-module.component';
import { LazyRoutingModule } from './examples/lazy-module/lazy-routing/lazy-routing.module';
import { ProtectedComponent } from './examples/protected/protected.component';
import { RouteParamsComponent } from './examples/route-params/route-params.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    CircleModule,
    SquareModule,
    TriangleModule,
    LazyRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    AdminComponent,
    AdminPayrollComponent,
    AdminVacationComponent,
    CustomInputComponent,
    CustomControlComponent,
    DynamicComponentComponent,
    LazyModuleComponent,
    ProtectedComponent,
    RouteParamsComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
