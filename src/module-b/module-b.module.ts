import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BServService } from './bserv.service';
import { TOKEN } from '../token';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ { provide: TOKEN, multi:true, useClass: BServService} ]
})
export class ModuleBModule { }