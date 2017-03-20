import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { NavBarComponent }  from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component'
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent,
                  NavBarComponent,
                  JumbotronComponent,
                  HomeComponent,
                  AboutComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
