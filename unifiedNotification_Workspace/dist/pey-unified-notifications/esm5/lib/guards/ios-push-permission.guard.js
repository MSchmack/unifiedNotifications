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
var IosPushNotificationPermissiongGuard = /** @class */ (function () {
    function IosPushNotificationPermissiongGuard(platformService, dialogs, unifiedNotificationService) {
        this.platformService = platformService;
        this.dialogs = dialogs;
        this.unifiedNotificationService = unifiedNotificationService;
    }
    /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    IosPushNotificationPermissiongGuard.prototype.canActivate = /**
     * @param {?} next
     * @param {?} state
     * @return {?}
     */
    function (next, state) {
        var _this = this;
        if (!this.platformService.is('ios')) {
            return true;
        }
        return this.unifiedNotificationService.hasPermission().then(function (res) {
            if (res) {
                return true;
            }
            else {
                return _this.dialogs.alert('This app requires push notifications to work as intended.\nYou can turn them silent any time you want.', 'Important')
                    .then(function () {
                    _this.unifiedNotificationService.updatePermission();
                    return true;
                })
                    .catch(function (e) {
                    console.log(e);
                    return true;
                });
            }
        });
        return false;
    };
    IosPushNotificationPermissiongGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    IosPushNotificationPermissiongGuard.ctorParameters = function () { return [
        { type: Platform },
        { type: Dialogs },
        { type: UnifiedFirebaseMessagingService }
    ]; };
    /** @nocollapse */ IosPushNotificationPermissiongGuard.ngInjectableDef = i0.defineInjectable({ factory: function IosPushNotificationPermissiongGuard_Factory() { return new IosPushNotificationPermissiongGuard(i0.inject(i1.Platform), i0.inject(i2.Dialogs), i0.inject(i3.UnifiedFirebaseMessagingService)); }, token: IosPushNotificationPermissiongGuard, providedIn: "root" });
    return IosPushNotificationPermissiongGuard;
}());
export { IosPushNotificationPermissiongGuard };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9zLXB1c2gtcGVybWlzc2lvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvZ3VhcmRzL2lvcy1wdXNoLXBlcm1pc3Npb24uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDL0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFFcEQ7SUFLRSw2Q0FFVSxlQUF5QixFQUN6QixPQUFnQixFQUNoQiwwQkFBMkQ7UUFGM0Qsb0JBQWUsR0FBZixlQUFlLENBQVU7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQWlDO0lBQ2pFLENBQUM7Ozs7OztJQUNMLHlEQUFXOzs7OztJQUFYLFVBQ0UsSUFBNEIsRUFDNUIsS0FBMEI7UUFGNUIsaUJBMEJDO1FBdkJDLElBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRztZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUM3RCxJQUFHLEdBQUcsRUFBRTtnQkFDTixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBRXZCLHdHQUF3RyxFQUN4RyxXQUFXLENBQ1o7cUJBQ0EsSUFBSSxDQUFDO29CQUNKLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUNuRCxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLFVBQUEsQ0FBQztvQkFDTixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBckNGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsUUFBUTtnQkFDUixPQUFPO2dCQUZQLCtCQUErQjs7OzhDQUh4QztDQTZDQyxBQXRDRCxJQXNDQztTQW5DWSxtQ0FBbUM7Ozs7OztJQUk1Qyw4REFBaUM7Ozs7O0lBQ2pDLHNEQUF3Qjs7Ozs7SUFDeEIseUVBQW1FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVW5pZmllZEZpcmViYXNlTWVzc2FnaW5nU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL25vdGlmaWNhdGlvbnMvdW5pZmllZC1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IERpYWxvZ3MgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2RpYWxvZ3Mvbmd4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSW9zUHVzaE5vdGlmaWNhdGlvblBlcm1pc3Npb25nR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG5cbiAgY29uc3RydWN0b3JcbiAgKFxuICAgIHByaXZhdGUgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybSxcbiAgICBwcml2YXRlIGRpYWxvZ3M6IERpYWxvZ3MsXG4gICAgcHJpdmF0ZSB1bmlmaWVkTm90aWZpY2F0aW9uU2VydmljZTogVW5pZmllZEZpcmViYXNlTWVzc2FnaW5nU2VydmljZVxuICApIHsgfVxuICBjYW5BY3RpdmF0ZShcbiAgICBuZXh0OiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogT2JzZXJ2YWJsZTxib29sZWFuPiB8IFByb21pc2U8Ym9vbGVhbj4gfCBib29sZWFuIHtcbiAgICBpZighdGhpcy5wbGF0Zm9ybVNlcnZpY2UuaXMoJ2lvcycpICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVuaWZpZWROb3RpZmljYXRpb25TZXJ2aWNlLmhhc1Blcm1pc3Npb24oKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZihyZXMpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7ICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpYWxvZ3MuYWxlcnRcbiAgICAgICAgKFxuICAgICAgICAgICdUaGlzIGFwcCByZXF1aXJlcyBwdXNoIG5vdGlmaWNhdGlvbnMgdG8gd29yayBhcyBpbnRlbmRlZC5cXG5Zb3UgY2FuIHR1cm4gdGhlbSBzaWxlbnQgYW55IHRpbWUgeW91IHdhbnQuJyxcbiAgICAgICAgICAnSW1wb3J0YW50J1xuICAgICAgICApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnVuaWZpZWROb3RpZmljYXRpb25TZXJ2aWNlLnVwZGF0ZVBlcm1pc3Npb24oKTsgIFxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19