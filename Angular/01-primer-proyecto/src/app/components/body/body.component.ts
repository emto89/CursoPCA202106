import { Component } from "@angular/core";

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'tu sangras...',
    autor: 'Batman'
  }

  personajes: string[] = ['Superman', 'Mujer Maravilla', 'Flash'];

}