import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UnifiedFirebaseMessagingService } from '../services/notifications/unified-firebase-messaging.service';
import { Platform } from '@ionic/angular';
import { Dialogs } from '@ionic-native/dialogs/ngx';
export declare class IosPushNotificationPermissiongGuard implements CanActivate {
    private platformService;
    private dialogs;
    private unifiedNotificationService;
    constructor(platformService: Platform, dialogs: Dialogs, unifiedNotificationService: UnifiedFirebaseMessagingService);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean;
}
