import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UnifiedFirebaseMessagingService } from '../services/notifications/unified-firebase-messaging.service';
import { Platform } from '@ionic/angular';
import { Dialogs } from '@ionic-native/dialogs/ngx';

@Injectable({
  providedIn: 'root'
})
export class IosPushNotificationPermissiongGuard implements CanActivate {

  constructor
  (
    private platformService: Platform,
    private dialogs: Dialogs,
    private unifiedNotificationService: UnifiedFirebaseMessagingService
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.platformService.is('ios') ) {
      return true;
    }
    return this.unifiedNotificationService.hasPermission().then(res => {
      if(res) {
        return true;        
      } else {
        return this.dialogs.alert
        (
          'This app requires push notifications to work as intended.\nYou can turn them silent any time you want.',
          'Important'
        )
        .then(() => {
          this.unifiedNotificationService.updatePermission();  
          return true;
        })
        .catch(e => {
          console.log(e);
          return true;
        });
      }
    });
    return false;
  }
}
