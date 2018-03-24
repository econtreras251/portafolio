import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent  {

  producto:any = undefined
  id:string = ""

  constructor( private route:ActivatedRoute,
               private _ps:ProductosService ){

    route.params.subscribe( parametros=>{
        //console.log( parametros['id'] )


        _ps.cargar_producto( parametros['id'] )
              .subscribe( res =>{
                  //console.log( res.json() )
                  this.id = parametros['id']
                  this.producto = res.json()
              })
    })

  }

}
