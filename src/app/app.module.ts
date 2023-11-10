import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './components/data/data.component';
import { PlusComponent } from './components/plus/plus.component';
import { MinusComponent } from './components/minus/minus.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    PlusComponent,
    MinusComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
