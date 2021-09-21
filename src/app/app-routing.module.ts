import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recetas',
    loadChildren: () => import('./pages/recetas/recetas.module').then( m => m.RecetasPageModule)
  },
  {
    path: 'creacion-recetas',
    loadChildren: () => import('./pages/creacion-recetas/creacion-recetas.module').then( m => m.CreacionRecetasPageModule)
  },
  {
    path: 'formularioregistro',
    loadChildren: () => import('./pages/formularioregistro/formularioregistro.module').then( m => m.FormularioregistroPageModule)
  },
  {
    path: 'loginuser',
    loadChildren: () => import('./pages/loginuser/loginuser.module').then( m => m.LoginuserPageModule)
  },
  {
    path: 'ingresodatos',
    loadChildren: () => import('./pages/ingresodatos/ingresodatos.module').then( m => m.IngresodatosPageModule)
  },
  {
    path: 'vegetariano',
    loadChildren: () => import('./pages/vegetariano/vegetariano.module').then( m => m.VegetarianoPageModule)
  },
  {
    path: 'vegano',
    loadChildren: () => import('./pages/vegano/vegano.module').then( m => m.VeganoPageModule)
  },
  {
    path: 'salados',
    loadChildren: () => import('./pages/salados/salados.module').then( m => m.SaladosPageModule)
  },
  {
    path: 'dulces',
    loadChildren: () => import('./pages/dulces/dulces.module').then( m => m.DulcesPageModule)
  },
  {
    path: 'bebestibles',
    loadChildren: () => import('./pages/bebestibles/bebestibles.module').then( m => m.BebestiblesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
