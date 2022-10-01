import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasicosComponent } from './pages/clasicos/clasicos.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SuperDeportivosComponent } from './pages/super-deportivos/super-deportivos.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateCarComponent},
  {path:'galery', component: GaleriaComponent},
  {path: 'alta-gama', component: SuperDeportivosComponent},
  {path: 'clasicos', component: ClasicosComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
