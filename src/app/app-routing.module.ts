import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./hospital-home-landing/hospital-home-landing.module').then(m => m.HospitalHomePageLandingModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration-page/registration-page.module').then(m => m.RegistrationPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
