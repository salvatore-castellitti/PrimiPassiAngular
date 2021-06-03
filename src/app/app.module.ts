import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';
import { TessstComponent } from './tessst/tessst.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { PaginationPipe } from './pagination.pipe';
import { AmountPagesTablePipe } from './amount-pages-table.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomButtonComponent,
    TessstComponent,
    CustomTableComponent,
    SearchFilterPipe,
    PaginationPipe,
    AmountPagesTablePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
