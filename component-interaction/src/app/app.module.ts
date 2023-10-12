import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroParentComponent } from './components/hero-parent.component';
import { HeroChildComponent } from './components/hero-child.component';
import { NameChildComponent } from './components/name-child.component';
import { NameParentComponent } from './components/name-parent.component';
import { VersionChildComponent } from './components/version-child.component';
import { VersionParentComponent } from './components/version-parent.component';
import { VoterComponent } from './components/voter.component';
import { VotetakerComponent } from './components/votetaker.component';
import { CountDownTimerComponent } from './components/countdown-timer.component';
import { CountDownParentComponent } from './components/countdown-parent-via-local.component';
import { CountDownParentViaVcComponent } from './components/countdown-parent-via-vc.component';
import { AstronautComponent } from './components/astronaut-component';
import { MissionControlComponent } from './components/mission-control.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroParentComponent,
    HeroChildComponent,
    NameChildComponent,
    NameParentComponent,
    VersionChildComponent,
    VersionParentComponent,
    VoterComponent,
    VotetakerComponent,
    CountDownTimerComponent,
    CountDownParentComponent,
    CountDownParentViaVcComponent,
    AstronautComponent,
    MissionControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
