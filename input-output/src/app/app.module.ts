import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ItemDetailComponent } from './components/item-detail.component';
import { ItemOutputComponent } from './components/item-output.component';
import { InputOutputComponent } from './components/input-output.component';
import { AdBannerComponent } from './components/ad.component/ad-banner.component';
import { HeroJobAdComponent } from './components/ad.component/hero-job-ad.component';
import { HeroProfileComponent } from './components/ad.component/hero-profile.component';
import { AdDirective } from './components/ad.component/ad.directive';
import { AdService } from './components/ad.component/ad.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemOutputComponent,
    InputOutputComponent,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
