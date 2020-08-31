import { Injectable } from '@angular/core';
import { MyService } from '../token';

@Injectable()
export class BServService extends MyService {

  constructor() {
    super();
   }
  
  public doit():string {
    return('B-Service');
  }

}