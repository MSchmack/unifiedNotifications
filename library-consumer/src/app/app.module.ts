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
import { AngularFireMessagingModule } from '@angular/fire/messaging';

// import { PeyUnifiedNotificationsModule } from 'pey-unified-notifications';

const config = {
  apiKey: "AIzaSyAB3QEguBeekr_b_TQbUATQCuKeFHjMlog",
  authDomain: "effilinkinspection.firebaseapp.com",
  databaseURL: "https://effilinkinspection.firebaseio.com",
  projectId: "effilinkinspection",
  storageBucket: "effilinkinspection.appspot.com",
  messagingSenderId: "734442418094"
}


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireMessagingModule,
    // PeyUnifiedNotificationsModule

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
