import { Injectable, Inject } from '@angular/core';
import { MobileFirebaseMessagingService } from './mobile-firebase-messaging.service';
// import { WebFirebaseMessagingService } from './web-firebase-messaging.service';
import { BehaviorSubject } from 'rxjs';

import { PlatformHelperService } from './../helpers/platform-helper.service';
import { Platform } from '@ionic/angular';
import { WebFirebaseMessagingService } from './web-firebase-messaging.service';


@Injectable({
  providedIn: 'root'
})
export class UnifiedFirebaseMessagingService {

  currentMessage = new BehaviorSubject(null);
  token = new BehaviorSubject<string>(null);
  IsActive = false;

  //  only relevant on ios
  permission = new BehaviorSubject(null);

  constructor(
    private mobileNotifications: MobileFirebaseMessagingService,
    private webNotifications: WebFirebaseMessagingService,
    private platformHelper: PlatformHelperService,
    private platformService: Platform

  ) {  
    this.init();
  }

  init() {
    if (this.platformHelper.isNative) {
      this.mobileNotifications.init();
      this.currentMessage = this.mobileNotifications.currentMessage;
      this.permission = this.mobileNotifications.permission;
      this.token = this.mobileNotifications.token;
    } else {
      this.webNotifications.init();
      this.currentMessage = this.webNotifications.currentMessage;
      this.token = this.webNotifications.token;
      this.permission = this.webNotifications.permission;
    }
    this.IsActive = true;
  }

  joinGroup(id: string) {
    if(this.platformHelper.isNative) {
      this.mobileNotifications.joinGroup(id);
    } else {
      console.log('web topic/group subscriptions have to be resolved serverside');
    }
  }
  leaveGroup(id: string) {
    if(this.platformHelper.isNative) {
      this.mobileNotifications.leaveGroup(id);
    } else {
      console.log('web topic/group subscriptions have to be resolved serverside');
    }
  }

  updatePermission() {
    if(this.platformHelper.isNative) {
      this.mobileNotifications.updatePermission();
    } else {
      this.webNotifications.getToken();
    }
  }
  // only works on iOS other platforms dont need permissions
  hasPermission(): Promise<boolean> {
    if(this.platformService.is('ios') && this.platformHelper.isNative) {
      return this.mobileNotifications.hasPermission()
        .then(res => { console.log(res);
          return res;
        });
    } {
      return new Promise<boolean>(() => {
        return true;
      });
    }
  }
}
