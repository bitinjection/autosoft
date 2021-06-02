import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { TaxPageComponent } from './tax-page/tax-page.component';
import { LogoComponent } from './logo/logo.component';
import { TaxInputComponent } from './tax-input/tax-input.component';
import { TaxResultsComponent } from './tax-results/tax-results.component';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, CoreModule ],
  declarations: [ AppComponent, AppRoutingModule.components, TaxPageComponent, LogoComponent, TaxInputComponent, TaxResultsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
