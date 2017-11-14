import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RandomNumberService } from './random-number.service';
import { HttpClientModule }    from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SvgRectComponent }  from './svg-rect.component';

import { ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
	SvgRectComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	BrowserAnimationsModule,
	ReactiveFormsModule
  ],
  providers: [RandomNumberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
