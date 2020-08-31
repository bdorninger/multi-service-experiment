import { Injectable } from '@angular/core';
import { MyService } from '../token';

@Injectable()
export class AServService extends MyService {

  constructor() { 
    super();
  }

  public doit():string {
    return('A-Service');
  }


}