import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ModuleAModule } from '../module-a/module-a.module';
import { ModuleBModule } from '../module-b/module-b.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ModuleAModule, ModuleBModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
