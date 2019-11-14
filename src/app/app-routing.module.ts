import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AuthGuard} from './_guards';


const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/core/core.module#CoreModule',
    canActivate: [AuthGuard]
  }, {
    path: 'login',
    loadChildren: './modules/login/login.module#LoginModule'
  },
  // otherwise redirect to home
  // {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preload all modules; optionally we could
    // implement a custom preloading strategy for just some
    // of the modules (PRs welcome 😉)
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
