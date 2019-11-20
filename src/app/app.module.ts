import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BnkCreateComponent } from './bnk-create/bnk-create.component';
import { BnkListComponent } from './bnk-list/bnk-list.component';
import { BnkDetailsComponent } from './bnk-details/bnk-details.component';
import {HttpTestComponent} from './http-test/http-test.component'
// ใช้ความสามารถในการ ดึงข้อมูลจาก server (http)
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BnkEditComponent } from './bnk-edit/bnk-edit.component';
import { BnkLoginComponent } from './bnk-login/bnk-login.component';
import { BnkRegisterComponent } from './bnk-register/bnk-register.component';

@NgModule({
  declarations: [
    AppComponent,
    BnkCreateComponent,
    BnkListComponent,
    BnkDetailsComponent,
    HttpTestComponent,
    BookDetailsComponent,
    BookCreateComponent,
    BnkEditComponent,
    BnkLoginComponent,
    BnkRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ใช้ง่าน http ใน project
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
