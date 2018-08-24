import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AboutModule } from './about-module/about.module';
import { ContactModule } from './contact-module/contact.module';
import { HomeModule } from './home-module/home.module';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { MaterialModule } from './material-module/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AboutModule,
    ContactModule,
    HomeModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES)    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
