import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos:any[] = []
  cargando:boolean = true

  constructor( private http:Http ) {
    this.cargar_productos()
  }

  public cargar_productos(){
    this.http.get('https://angular-4f93c.firebaseio.com/productos_idx.json')
        .subscribe( res=>{
          //console.log( res.json() )
          this.cargando = false
        })
  }

}