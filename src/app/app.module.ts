import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app-component/app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {UserModule} from "./modules/user/user.module";

const routes: Routes = [
  {path: '', component: AppComponent},
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
