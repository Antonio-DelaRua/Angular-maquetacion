import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CreateCarComponent } from './pages/create-car/create-car.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuperDeportivosComponent } from './pages/super-deportivos/super-deportivos.component';
import { ClasicosComponent } from './pages/clasicos/clasicos.component';
import { DeportivosComponent } from './pages/deportivos/deportivos.component';
import { TuningComponent } from './pages/tuning/tuning.component';
import { AboutComponent } from './pages/about/about.component';
import { WikiComponent } from './pages/wiki/wiki.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    CreateCarComponent,
    NavbarComponent,
    FooterComponent,
    GaleriaComponent,
    SuperDeportivosComponent,
    ClasicosComponent,
    DeportivosComponent,
    TuningComponent,
    AboutComponent,
    WikiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
