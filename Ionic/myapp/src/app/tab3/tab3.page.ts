import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  ngOnInit(): void {
    let numero = 10;
  debugger;
    numero = 20;

    numero = numero + 10;

    numero = 0 ;

    console.log(numero);
  }

}
