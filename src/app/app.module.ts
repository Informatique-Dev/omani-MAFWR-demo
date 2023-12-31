import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { RootComponent } from './core/Layout/root/root.component';
import { HeaderComponent } from './core/Layout/header/header.component';
import { FooterComponent } from './core/Layout/footer/footer.component';
import { MenuComponent } from './core/Layout/menu/menu.component';
import {LoginComponent} from "./pages/login/login.component";
import {MatTabsModule} from "@angular/material/tabs";
import {STEPPER_GLOBAL_OPTIONS} from "@angular/cdk/stepper";
import {PdfViewerModule} from "ng2-pdf-viewer";

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatTabsModule,
    PdfViewerModule
  ],
  providers: [ {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {displayDefaultIndicatorType: false},
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
