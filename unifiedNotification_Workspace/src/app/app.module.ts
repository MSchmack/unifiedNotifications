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

// import { PeyUnifiedNotificationsModule } from 'pey-unified-notifications';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const config = {
  apiKey: "AIzaSyAYIZxcD0t_qMvf9Ir5AhUkdNneGNj1t2U",
  authDomain: "unifiednotifications-8e613.firebaseapp.com",
  databaseURL: "https://unifiednotifications-8e613.firebaseio.com",
  projectId: "unifiednotifications-8e613",
  storageBucket: "unifiednotifications-8e613.appspot.com",
  messagingSenderId: "95470027554"
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
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    // PeyUnifiedNotificationsModule
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
