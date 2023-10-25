import { Component, OnInit } from '@angular/core';
import { Componente } from './interfaces/componente';
import { ComponentesService } from './servicios/componentes.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ShoppingCartComponentComponent } from './componentes/shopping-cart-component/shopping-cart-component.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  public componentes: Componente[] = [
    
    {
      nombre: 'Iniciio',
      ruta: '/infinite-scroll',
      color: 'black',
      icono:'infinite-outline'
    },
    {
      nombre: 'Shopping Cart',
      ruta: '/cart',
      color: 'black',
      icono:'airplane'

    },
    {
      nombre: 'Buscar',
      ruta: '/search',
      color: 'black',
      icono:'search-outline'

    },
    {
      nombre: 'Log out',
      ruta: '/button',
      color: 'sucess',
      icono:'radio-button-on-outline'
    },
    
    {
      nombre: 'scan',
      ruta: '/card',
      color: 'sucess',
      icono:'mdi:qrcode-scan'
    }
    
    
   
    
  ];

  constructor(private route: ActivatedRoute,private modalController: ModalController) { }
public nombre:string;
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombre=params.name;
      console.log(params.name);
    });
  }
}
