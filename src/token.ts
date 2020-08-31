import { InjectionToken, Injectable } from "@angular/core";

export const TOKEN = new InjectionToken<string>('MyService');

@Injectable()
export abstract class MyService {
  public abstract doit():string;
}