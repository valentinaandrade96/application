import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
 
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full'
  },
 
  {
    path: 'first',
    loadChildren: () => import('./paginas/first/first.module').then( m => m.FirstPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./paginas/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'button',
    loadChildren: () => import('./paginas/button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./paginas/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./paginas/searcher/searcher.module').then( m => m.SearcherPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./paginas/books-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    
    path: 'cart',
    loadChildren: () => import('./paginas/cart/cart.module').then( m => m.CartPageModule)
  },
  
  {
    
    path: 'card',
    loadChildren: () => import('./paginas/SCANNER/card.module').then( m => m.CardPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(rutas, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
