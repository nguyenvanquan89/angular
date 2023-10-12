import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConponentCliComponent } from './conponent-cli/conponent-cli.component';
import { ComponentManual } from './component-manual/component-manual.component';

@NgModule({
  declarations: [
    AppComponent,
    ConponentCliComponent,
    ComponentManual
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
