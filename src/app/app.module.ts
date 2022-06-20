import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ManyDetailsComponent } from './many-details/many-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ManyDetailsComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
