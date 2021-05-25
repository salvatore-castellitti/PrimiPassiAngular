import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { TessstComponent } from './tessst/tessst.component';
import { CustomTableComponent } from './custom-table/custom-table.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    TessstComponent,
    CustomTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
