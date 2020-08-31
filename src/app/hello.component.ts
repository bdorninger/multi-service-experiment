import { Component, Input, Inject, TypeProvider } from '@angular/core';
import { TOKEN, MyService } from '../token';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{name}}!</h1>
            <div *ngFor="let s of services"><p>{{s.doit()}}</p></div>`,
  styles: [`h1 { font-family: Lato; }`],
  // providers: [{provide: TOKEN, multi:true, useClass: MyService}]
})
export class HelloComponent  {
  @Input() name: string;

  constructor(@Inject(TOKEN) public services:MyService[]) {    
    services.forEach(serv => {
      // serv.doit();
    })
  }
}
