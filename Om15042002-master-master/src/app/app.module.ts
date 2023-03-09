import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonPartsModule } from './common-parts/common-parts.module';
import { TaskPagesModule } from './task-pages/task-pages.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { UserAuthModule } from './user-auth/user-auth.module';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import { MaterialComponent } from './material/material.component'
import { ToastrModule } from 'ngx-toastr';
// import {MaterialModule} from 'src/mate'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    CommonPartsModule,
    TaskPagesModule,
    AppRoutingModule,
    RouterModule,
    MatSlideToggleModule,
    UserAuthModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      
    })
  ],
  exports: [
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
