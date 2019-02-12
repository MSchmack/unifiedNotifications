/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { UnifiedFirebaseMessagingService } from '../services/notifications/unified-firebase-messaging.service';
import { Platform } from '@ionic/angular';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular";
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
        return this.unifiedNotificationService.hasPermission().then((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (res) {
                return true;
            }
            else {
                return this.dialogs.alert('This app requires push notifications to work as intended.\nYou can turn them silent any time you want.', 'Important')
                    .then((/**
                 * @return {?}
                 */
                () => {
                    this.unifiedNotificationService.updatePermission();
                    return true;
                }))
                    .catch((/**
                 * @param {?} e
                 * @return {?}
                 */
                e => {
                    console.log(e);
                    return true;
                }));
            }
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9zLXB1c2gtcGVybWlzc2lvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvZ3VhcmRzL2lvcy1wdXNoLXBlcm1pc3Npb24uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDL0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFLcEQsTUFBTSxPQUFPLG1DQUFtQzs7Ozs7O0lBRTlDLFlBRVUsZUFBeUIsRUFDekIsT0FBZ0IsRUFDaEIsMEJBQTJEO1FBRjNELG9CQUFlLEdBQWYsZUFBZSxDQUFVO1FBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFDaEIsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUFpQztJQUNqRSxDQUFDOzs7Ozs7SUFDTCxXQUFXLENBQ1QsSUFBNEIsRUFDNUIsS0FBMEI7UUFDMUIsSUFBRyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFHO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDaEUsSUFBRyxHQUFHLEVBQUU7Z0JBQ04sT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUV2Qix3R0FBd0csRUFDeEcsV0FBVyxDQUNaO3FCQUNBLElBQUk7OztnQkFBQyxHQUFHLEVBQUU7b0JBQ1QsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGdCQUFnQixFQUFFLENBQUM7b0JBQ25ELE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUMsRUFBQztxQkFDRCxLQUFLOzs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2YsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQyxFQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFyQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEsUUFBUTtZQUNSLE9BQU87WUFGUCwrQkFBK0I7Ozs7Ozs7O0lBV3BDLDhEQUFpQzs7Ozs7SUFDakMsc0RBQXdCOzs7OztJQUN4Qix5RUFBbUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVbmlmaWVkRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvbm90aWZpY2F0aW9ucy91bmlmaWVkLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgRGlhbG9ncyB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGlhbG9ncy9uZ3gnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJb3NQdXNoTm90aWZpY2F0aW9uUGVybWlzc2lvbmdHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcblxuICBjb25zdHJ1Y3RvclxuICAoXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgZGlhbG9nczogRGlhbG9ncyxcbiAgICBwcml2YXRlIHVuaWZpZWROb3RpZmljYXRpb25TZXJ2aWNlOiBVbmlmaWVkRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlXG4gICkgeyB9XG4gIGNhbkFjdGl2YXRlKFxuICAgIG5leHQ6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHwgUHJvbWlzZTxib29sZWFuPiB8IGJvb2xlYW4ge1xuICAgIGlmKCF0aGlzLnBsYXRmb3JtU2VydmljZS5pcygnaW9zJykgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudW5pZmllZE5vdGlmaWNhdGlvblNlcnZpY2UuaGFzUGVybWlzc2lvbigpLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmKHJlcykge1xuICAgICAgICByZXR1cm4gdHJ1ZTsgICAgICAgIFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlhbG9ncy5hbGVydFxuICAgICAgICAoXG4gICAgICAgICAgJ1RoaXMgYXBwIHJlcXVpcmVzIHB1c2ggbm90aWZpY2F0aW9ucyB0byB3b3JrIGFzIGludGVuZGVkLlxcbllvdSBjYW4gdHVybiB0aGVtIHNpbGVudCBhbnkgdGltZSB5b3Ugd2FudC4nLFxuICAgICAgICAgICdJbXBvcnRhbnQnXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMudW5pZmllZE5vdGlmaWNhdGlvblNlcnZpY2UudXBkYXRlUGVybWlzc2lvbigpOyAgXG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXX0=