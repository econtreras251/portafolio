import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portafolio-item',
  templateUrl: './portafolio-item.component.html'
})
export class PortafolioItemComponent  {

  constructor( private route:ActivatedRoute ){

    route.params.subscribe( parametros=>{
        console.log( parametros['id'] )
    })

  }

}
