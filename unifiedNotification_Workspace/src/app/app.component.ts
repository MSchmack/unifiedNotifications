import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UnifiedFirebaseMessagingService } from 'projects/pey-unified-notifications/src/lib/services/notifications/unified-firebase-messaging.service';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private unifiedNotifications: UnifiedFirebaseMessagingService,
    private statusBar: StatusBar,
    updates: SwUpdate
  ) {
    this.initializeApp();

    updates.available.subscribe(event => {
      updates.activateUpdate().then( () => document.location.reload());
 
  });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.unifiedNotifications.init(false);
      this.unifiedNotifications.currentMessage.subscribe(x => {
          if(x) { 
              console.log(x.notification.body, x.notification.title);
          }
    });
    });
  }
}
