import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { LottieModule } from 'ngx-lottie';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RadioComponent } from './radio/radio.component';
import { MessageInfoComponent } from './message-info/message-info.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MenuIconsComponent } from './menu-icons/menu-icons.component';
import { NotificationsComponent } from './notifications/notifications.component'

@NgModule({
  declarations: [
    AppComponent,
    SplashScreenComponent,
    LandingPageComponent,
    RadioComponent,
    MessageInfoComponent,
    MessagesListComponent,
    MenuIconsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    LottieModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
