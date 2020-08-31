import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AServService } from './aserv.service';
import { TOKEN } from '../token';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ { provide: TOKEN, multi:true, useClass: AServService} ]
})
export class ModuleAModule { }