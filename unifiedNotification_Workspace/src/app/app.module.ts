import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Dialogs } from '@ionic-native/dialogs/ngx';

import { PeyUnifiedNotificationsModule } from 'pey-unified-notifications';
import { AngularFireMessagingModule } from '@angular/fire/messaging';

const config = {
  apiKey: "AIzaSyDE6LoxLcLwIpGUTkgZlEMs1jeAuCfeRjo",
  authDomain: "notificationtest-989f5.firebaseapp.com",
  databaseURL: "https://notificationtest-989f5.firebaseio.com",
  projectId: "notificationtest-989f5",
  storageBucket: "notificationtest-989f5.appspot.com",
  messagingSenderId: "24194137745"
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,

    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    // AngularFireMessaging,
    AngularFireMessagingModule,
    PeyUnifiedNotificationsModule
    // .initialize('test')
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Firebase,
    Dialogs
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
