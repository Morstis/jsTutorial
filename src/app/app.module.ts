import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ArticelComponent } from './components/articel/articel.component';
import { BasicRouterOutletComponent } from './components/basic-router-outlet/basic-router-outlet.component';
import { PrismModule } from '@ngx-prism/rxjs';
@NgModule({
  declarations: [AppComponent, ArticelComponent, BasicRouterOutletComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    PrismModule,
  ],

  providers: [],
  bootstrap: [BasicRouterOutletComponent],
})
export class AppModule {}
