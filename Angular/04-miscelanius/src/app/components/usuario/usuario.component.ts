import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  constructor(private _router: ActivatedRoute) {
    
    this._router.params.subscribe(params => {
      console.log("Ruta padre");
      console.log(params);

    } )
  }

  ngOnInit(): void {
  }

}
