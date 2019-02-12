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
        return this.unifiedNotificationService.hasPermission().then((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            if (res) {
                return true;
            }
            else {
                return _this.dialogs.alert('This app requires push notifications to work as intended.\nYou can turn them silent any time you want.', 'Important')
                    .then((/**
                 * @return {?}
                 */
                function () {
                    _this.unifiedNotificationService.updatePermission();
                    return true;
                }))
                    .catch((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    console.log(e);
                    return true;
                }));
            }
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9zLXB1c2gtcGVybWlzc2lvbi5ndWFyZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvZ3VhcmRzL2lvcy1wdXNoLXBlcm1pc3Npb24uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFDL0csT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7QUFFcEQ7SUFLRSw2Q0FFVSxlQUF5QixFQUN6QixPQUFnQixFQUNoQiwwQkFBMkQ7UUFGM0Qsb0JBQWUsR0FBZixlQUFlLENBQVU7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNoQiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQWlDO0lBQ2pFLENBQUM7Ozs7OztJQUNMLHlEQUFXOzs7OztJQUFYLFVBQ0UsSUFBNEIsRUFDNUIsS0FBMEI7UUFGNUIsaUJBMEJDO1FBdkJDLElBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRztZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsMEJBQTBCLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsR0FBRztZQUM3RCxJQUFHLEdBQUcsRUFBRTtnQkFDTixPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE9BQU8sS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBRXZCLHdHQUF3RyxFQUN4RyxXQUFXLENBQ1o7cUJBQ0EsSUFBSTs7O2dCQUFDO29CQUNKLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO29CQUNuRCxPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDLEVBQUM7cUJBQ0QsS0FBSzs7OztnQkFBQyxVQUFBLENBQUM7b0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZixPQUFPLElBQUksQ0FBQztnQkFDZCxDQUFDLEVBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQXJDRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxRLFFBQVE7Z0JBQ1IsT0FBTztnQkFGUCwrQkFBK0I7Ozs4Q0FIeEM7Q0E2Q0MsQUF0Q0QsSUFzQ0M7U0FuQ1ksbUNBQW1DOzs7Ozs7SUFJNUMsOERBQWlDOzs7OztJQUNqQyxzREFBd0I7Ozs7O0lBQ3hCLHlFQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVuaWZpZWRGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL3VuaWZpZWQtZmlyZWJhc2UtbWVzc2FnaW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBEaWFsb2dzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kaWFsb2dzL25neCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIElvc1B1c2hOb3RpZmljYXRpb25QZXJtaXNzaW9uZ0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuXG4gIGNvbnN0cnVjdG9yXG4gIChcbiAgICBwcml2YXRlIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm0sXG4gICAgcHJpdmF0ZSBkaWFsb2dzOiBEaWFsb2dzLFxuICAgIHByaXZhdGUgdW5pZmllZE5vdGlmaWNhdGlvblNlcnZpY2U6IFVuaWZpZWRGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2VcbiAgKSB7IH1cbiAgY2FuQWN0aXZhdGUoXG4gICAgbmV4dDogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IE9ic2VydmFibGU8Ym9vbGVhbj4gfCBQcm9taXNlPGJvb2xlYW4+IHwgYm9vbGVhbiB7XG4gICAgaWYoIXRoaXMucGxhdGZvcm1TZXJ2aWNlLmlzKCdpb3MnKSApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51bmlmaWVkTm90aWZpY2F0aW9uU2VydmljZS5oYXNQZXJtaXNzaW9uKCkudGhlbihyZXMgPT4ge1xuICAgICAgaWYocmVzKSB7XG4gICAgICAgIHJldHVybiB0cnVlOyAgICAgICAgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5kaWFsb2dzLmFsZXJ0XG4gICAgICAgIChcbiAgICAgICAgICAnVGhpcyBhcHAgcmVxdWlyZXMgcHVzaCBub3RpZmljYXRpb25zIHRvIHdvcmsgYXMgaW50ZW5kZWQuXFxuWW91IGNhbiB0dXJuIHRoZW0gc2lsZW50IGFueSB0aW1lIHlvdSB3YW50LicsXG4gICAgICAgICAgJ0ltcG9ydGFudCdcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgdGhpcy51bmlmaWVkTm90aWZpY2F0aW9uU2VydmljZS51cGRhdGVQZXJtaXNzaW9uKCk7ICBcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==