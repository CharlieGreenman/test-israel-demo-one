import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./routing/app-routing.module";
import { GlobalHeaderComponentModule } from "@test-israel-demo-one/common/ui";
import { GlobalFooterModule } from "@test-israel-demo-one/common/ui";
import { GlobalSidenavModule } from "@test-israel-demo-one/common/ui";
import { MatListModule } from "@angular/material/list";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { StoreModule } from "@ngrx/store";
import { environment } from "@test-israel-demo-one/common/common-environment";
import { AuthCoreModule } from "@test-israel-demo-one/common/common-services";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, GlobalHeaderComponentModule, GlobalFooterModule, GlobalSidenavModule, MatListModule, StoreModule.forRoot({}), StoreDevtoolsModule.instrument({
    maxAge: 25, // Retains last 25 states
    logOnly: environment.production, // Restrict extension to log-only mode
    autoPause: true, // Pauses recording actions and state changes when the extension window is not open
  }), AuthCoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
