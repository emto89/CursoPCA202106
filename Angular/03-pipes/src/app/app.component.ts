import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Jacobo Perez";

  nombre2: string = "JaCoBo PeReZ";

  numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  PI: number = Math.PI;

  salario: number = 5000000;

  percent: number = 0.459;

  fecha: Date = new Date();

  idioma: string = 'es';

  valorPromesa = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      resolve('llego la data');
    },4500)
  });

  heroe = {
    nombre: 'Logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }

}
