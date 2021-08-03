import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SousMenuComponent } from './sous-menu/sous-menu.component';
import { SlidersComponent } from './sliders/sliders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SousMenuComponent,
    SlidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
