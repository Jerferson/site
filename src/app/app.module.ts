import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import {
  FaIconLibrary,
  FontAwesomeModule
} from '@fortawesome/angular-fontawesome';

import {
  faUniversity,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook, faInstagram, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './ui/carousel/carousel.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library?: FaIconLibrary) {
    library.addIcons(
      faUniversity,
      faFacebook,
      faInstagram,
      faTwitter
    );
  }
}
