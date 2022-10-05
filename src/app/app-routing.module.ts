import { NotificationsComponent } from './notifications/notifications.component';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RadioComponent } from './radio/radio.component';
import { MessageInfoComponent } from './message-info/message-info.component';

const routes: Routes = [
  { path: 'home', component: SplashScreenComponent },
  { path: 'landing-page', component: LandingPageComponent },
  { path: 'radio', component: RadioComponent },
  {path: 'message', component: MessageInfoComponent},
  {path:'messages', component: MessagesListComponent},
  {path:'notifications', component: NotificationsComponent},
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
