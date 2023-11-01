import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'funcionario',
    loadChildren: () => import('./funcionario/funcionario.module').then( m => m.FuncionarioPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'acompchamadousr',
    loadChildren: () => import('./acompchamadousr/acompchamadousr.module').then( m => m.AcompchamadousrPageModule)
  },
  {
    path: 'solicichamadousr',
    loadChildren: () => import('./solicichamadousr/solicichamadousr.module').then( m => m.SolicichamadousrPageModule)
  },
  {
    path: 'aceitrchamadsfunc',
    loadChildren: () => import('./aceitrchamadsfunc/aceitrchamadsfunc.module').then( m => m.AceitrchamadsfuncPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
