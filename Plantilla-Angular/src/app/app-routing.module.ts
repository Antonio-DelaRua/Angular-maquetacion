import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ClasicosComponent } from './pages/clasicos/clasicos.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { DeportivosComponent } from './pages/deportivos/deportivos.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SuperDeportivosComponent } from './pages/super-deportivos/super-deportivos.component';
import { TuningComponent } from './pages/tuning/tuning.component';
import { WikiComponent } from './pages/wiki/wiki.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'create', component: CreateCarComponent},
  {path:'galery', component: GaleriaComponent},
  {path: 'alta-gama', component: SuperDeportivosComponent},
  {path: 'clasicos', component: ClasicosComponent},
  {path: 'deportivos', component: DeportivosComponent},
  {path: 'tunning', component: TuningComponent},
  {path: 'about', component: AboutComponent},
  {path: 'wiki', component: WikiComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
