import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProdComponent } from './pages/prod/prod.component';
import { AbtusComponent } from './pages/abtus/abtus.component';
import { VelasComponent } from './pages/velas/velas.component';
import { AlmohComponent } from './pages/almoh/almoh.component';
import { OtrosComponent } from './pages/otros/otros.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'prod',
    component: ProdComponent,
  },
  {
    path: 'abtus',
    component: AbtusComponent,
  },
  {
    path: 'velas',
    component: VelasComponent,
  },
  {
    path: 'almoh',
    component: AlmohComponent,
  },
  {
    path: 'otros',
    component: OtrosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
