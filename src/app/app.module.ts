import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompNavbarComponent } from './components/comp-navbar/comp-navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { AbtusComponent } from './pages/abtus/abtus.component';
import { ProdComponent } from './pages/prod/prod.component';
import { VelasComponent } from './pages/prod/velas/velas.component';
import { AlmoComponent } from './pages/prod/almo/almo.component';
import { OtrosComponent } from './pages/prod/otros/otros.component';
import { AlmohComponent } from './pages/almoh/almoh.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CompNavbarComponent,
    HomeComponent,
    AbtusComponent,
    ProdComponent,
    VelasComponent,
    AlmoComponent,
    OtrosComponent,
    AlmohComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
