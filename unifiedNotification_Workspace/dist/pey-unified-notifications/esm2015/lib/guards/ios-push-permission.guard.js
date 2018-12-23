/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UnifiedFirebaseMessagingService } from '../services/notifications/unified-firebase-messaging.service';
import { Platform } from '@ionic/angular';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/dist/providers/platform";
import * as i2 from "@ionic-native/dialogs/ngx/index";
import * as i3 from "../services/notifications/unified-firebase-messaging.service";
export class IosPushNotificationPermissiongGuard {
    /**
     * @param {?} platformService
     * @param {?} dialogs
     * @param {?} unifiedNotificationService
     */
    constructor(platformService, dialogs, unifiedNotificationService) {
        this.platformService = platformService;
        this.dialogs = dialogs;
        this.unifiedNotificationService = unifiedNotificationService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    canActivate(next, state) {
        if (!this.platformService.is('ios')) {
            return true;
        }
        return this.unifiedNotificationService.hasPermission().then(res => {
            if (res) {
                return true;
            }
            else {
                return this.dialogs.alert('This app requires push notifications to work as intended.\nYou can turn them silent any time you want.', 'Important')
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
IosPushNotificationPermissiongGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
IosPushNotificationPermissiongGuard.ctorParameters = () => [
    { type: Platform },
    { type: Dialogs },
    { type: UnifiedFirebaseMessagingService }
];
/** @nocollapse */ IosPushNotificationPermissiongGuard.ngInjectableDef = i0.defineInjectable({ factory: function IosPushNotificationPermissiongGuard_Factory() { return new IosPushNotificationPermissiongGuard(i0.inject(i1.Platform), i0.inject(i2.Dialogs), i0.inject(i3.UnifiedFirebaseMessagingService)); }, token: IosPushNotificationPermissiongGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    IosPushNotificationPermissiongGuard.prototype.platformService;
    /**
     * @type {?}
     * @private
     */
    IosPushNotificationPermissiongGuard.prototype.dialogs;
    /**
     * @type {?}
     * @private
     */
    IosPushNotificationPermissiongGuard.prototype.unifiedNotificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9zLXB1c2gtcGVybWlzc2lvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvZ3VhcmRzL2lvcy1wdXNoLXBlcm1pc3Npb24uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDL0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFLcEQsTUFBTSxPQUFPLG1DQUFtQzs7Ozs7O0lBRTlDLFlBRVUsZUFBeUIsRUFDekIsT0FBZ0IsRUFDaEIsMEJBQTJEO1FBRjNELG9CQUFlLEdBQWYsZUFBZSxDQUFVO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFpQztJQUNqRSxDQUFDOzs7Ozs7SUFDTCxXQUFXLENBQ1QsSUFBNEIsRUFDNUIsS0FBMEI7UUFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFHO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEUsSUFBRyxHQUFHLEVBQUU7Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUV2Qix3R0FBd0csRUFDeEcsV0FBVyxDQUNaO3FCQUNBLElBQUksQ0FBQyxHQUFHLEVBQUU7b0JBQ1QsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ25ELE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUMsQ0FBQztxQkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZixPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDLENBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXJDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxRQUFRO1lBQ1IsT0FBTztZQUZQLCtCQUErQjs7Ozs7Ozs7SUFXcEMsOERBQWlDOzs7OztJQUNqQyxzREFBd0I7Ozs7O0lBQ3hCLHlFQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVuaWZpZWRGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL3VuaWZpZWQtZmlyZWJhc2UtbWVzc2FnaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBEaWFsb2dzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kaWFsb2dzL25neCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIElvc1B1c2hOb3RpZmljYXRpb25QZXJtaXNzaW9uZ0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yXG4gIChcbiAgICBwcml2YXRlIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBkaWFsb2dzOiBEaWFsb2dzLFxuICAgIHByaXZhdGUgdW5pZmllZE5vdGlmaWNhdGlvblNlcnZpY2U6IFVuaWZpZWRGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2VcbiAgKSB7IH1cbiAgY2FuQWN0aXZhdGUoXG4gICAgbmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgaWYoIXRoaXMucGxhdGZvcm1TZXJ2aWNlLmlzKCdpb3MnKSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51bmlmaWVkTm90aWZpY2F0aW9uU2VydmljZS5oYXNQZXJtaXNzaW9uKCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYocmVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWFsb2dzLmFsZXJ0XG4gICAgICAgIChcbiAgICAgICAgICAnVGhpcyBhcHAgcmVxdWlyZXMgcHVzaCBub3RpZmljYXRpb25zIHRvIHdvcmsgYXMgaW50ZW5kZWQuXFxuWW91IGNhbiB0dXJuIHRoZW0gc2lsZW50IGFueSB0aW1lIHlvdSB3YW50LicsXG4gICAgICAgICAgJ0ltcG9ydGFudCdcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy51bmlmaWVkTm90aWZpY2F0aW9uU2VydmljZS51cGRhdGVQZXJtaXNzaW9uKCk7ICBcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==