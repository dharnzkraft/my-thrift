import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { LoginPageModule } from './login/login.module';
import { HistoryPageModule } from './history/history.module';
import { HomePageModule } from './home/home.module';
import { ProfilePageModule } from './profile/profile.module';
import { RegisterPageModule } from './register/register.module';
import { AboutPageModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      { path: '', component: LoginPageModule },
      { path: 'history', component: HistoryPageModule },
      { path: 'home', component: HomePageModule},
      { path: 'login', component: LoginPageModule },
      { path: 'profile', component: ProfilePageModule},
      { path: 'register', component: RegisterPageModule},
      { path: 'about', component: AboutPageModule}
    ])
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
