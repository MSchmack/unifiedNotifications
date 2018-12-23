/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MobileFirebaseMessagingService } from './mobile-firebase-messaging.service';
// import { WebFirebaseMessagingService } from './web-firebase-messaging.service';
import { BehaviorSubject } from 'rxjs';
import { PlatformHelperService } from './../helpers/platform-helper.service';
import { Platform } from '@ionic/angular';
import { WebFirebaseMessagingService } from './web-firebase-messaging.service';
import * as i0 from "@angular/core";
import * as i1 from "./mobile-firebase-messaging.service";
import * as i2 from "./web-firebase-messaging.service";
import * as i3 from "../helpers/platform-helper.service";
import * as i4 from "@ionic/angular/dist/providers/platform";
var UnifiedFirebaseMessagingService = /** @class */ (function () {
    function UnifiedFirebaseMessagingService(mobileNotifications, webNotifications, platformHelper, platformService) {
        this.mobileNotifications = mobileNotifications;
        this.webNotifications = webNotifications;
        this.platformHelper = platformHelper;
        this.platformService = platformService;
        this.currentMessage = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        this.IsActive = false;
        //  only relevant on ios
        this.permission = new BehaviorSubject(null);
        this.init();
    }
    /**
     * @return {?}
     */
    UnifiedFirebaseMessagingService.prototype.init = /**
     * @return {?}
     */
    function () {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.init();
            this.currentMessage = this.mobileNotifications.currentMessage;
            this.permission = this.mobileNotifications.permission;
            this.token = this.mobileNotifications.token;
        }
        else {
            this.webNotifications.init();
            this.currentMessage = this.webNotifications.currentMessage;
            this.token = this.webNotifications.token;
            this.permission = this.webNotifications.permission;
        }
        this.IsActive = true;
    };
    /**
     * @param {?} id
     * @return {?}
     */
    UnifiedFirebaseMessagingService.prototype.joinGroup = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.joinGroup(id);
        }
        else {
            console.log('web topic/group subscriptions have to be resolved serverside');
        }
    };
    /**
     * @param {?} id
     * @return {?}
     */
    UnifiedFirebaseMessagingService.prototype.leaveGroup = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.leaveGroup(id);
        }
        else {
            console.log('web topic/group subscriptions have to be resolved serverside');
        }
    };
    /**
     * @return {?}
     */
    UnifiedFirebaseMessagingService.prototype.updatePermission = /**
     * @return {?}
     */
    function () {
        if (this.platformHelper.isNative) {
            this.mobileNotifications.updatePermission();
        }
        else {
            this.webNotifications.getToken();
        }
    };
    // only works on iOS other platforms dont need permissions
    // only works on iOS other platforms dont need permissions
    /**
     * @return {?}
     */
    UnifiedFirebaseMessagingService.prototype.hasPermission = 
    // only works on iOS other platforms dont need permissions
    /**
     * @return {?}
     */
    function () {
        if (this.platformService.is('ios') && this.platformHelper.isNative) {
            return this.mobileNotifications.hasPermission()
                .then(function (res) {
                console.log(res);
                return res;
            });
        }
        {
            return new Promise(function () {
                return true;
            });
        }
    };
    UnifiedFirebaseMessagingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UnifiedFirebaseMessagingService.ctorParameters = function () { return [
        { type: MobileFirebaseMessagingService },
        { type: WebFirebaseMessagingService },
        { type: PlatformHelperService },
        { type: Platform }
    ]; };
    /** @nocollapse */ UnifiedFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function UnifiedFirebaseMessagingService_Factory() { return new UnifiedFirebaseMessagingService(i0.inject(i1.MobileFirebaseMessagingService), i0.inject(i2.WebFirebaseMessagingService), i0.inject(i3.PlatformHelperService), i0.inject(i4.Platform)); }, token: UnifiedFirebaseMessagingService, providedIn: "root" });
    return UnifiedFirebaseMessagingService;
}());
export { UnifiedFirebaseMessagingService };
if (false) {
    /** @type {?} */
    UnifiedFirebaseMessagingService.prototype.currentMessage;
    /** @type {?} */
    UnifiedFirebaseMessagingService.prototype.token;
    /** @type {?} */
    UnifiedFirebaseMessagingService.prototype.IsActive;
    /** @type {?} */
    UnifiedFirebaseMessagingService.prototype.permission;
    /**
     * @type {?}
     * @private
     */
    UnifiedFirebaseMessagingService.prototype.mobileNotifications;
    /**
     * @type {?}
     * @private
     */
    UnifiedFirebaseMessagingService.prototype.webNotifications;
    /**
     * @type {?}
     * @private
     */
    UnifiedFirebaseMessagingService.prototype.platformHelper;
    /**
     * @type {?}
     * @private
     */
    UnifiedFirebaseMessagingService.prototype.platformService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pZmllZC1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbm90aWZpY2F0aW9ucy91bmlmaWVkLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUVyRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXZDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7Ozs7O0FBRy9FO0lBWUUseUNBQ1UsbUJBQW1ELEVBQ25ELGdCQUE2QyxFQUM3QyxjQUFxQyxFQUNyQyxlQUF5QjtRQUh6Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWdDO1FBQ25ELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7UUFDN0MsbUJBQWMsR0FBZCxjQUFjLENBQXVCO1FBQ3JDLG9CQUFlLEdBQWYsZUFBZSxDQUFVO1FBWG5DLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzFDLGFBQVEsR0FBRyxLQUFLLENBQUM7O1FBR2pCLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQVNyQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDOzs7O0lBRUQsOENBQUk7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1lBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7WUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsbURBQVM7Ozs7SUFBVCxVQUFVLEVBQVU7UUFDbEIsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7U0FDN0U7SUFDSCxDQUFDOzs7OztJQUNELG9EQUFVOzs7O0lBQVYsVUFBVyxFQUFVO1FBQ25CLElBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7OztJQUVELDBEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBRyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRTtZQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztTQUM3QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQztJQUNELDBEQUEwRDs7Ozs7SUFDMUQsdURBQWE7Ozs7O0lBQWI7UUFDRSxJQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFO1lBQ2pFLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRTtpQkFDNUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM5QixPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFBQztZQUNBLE9BQU8sSUFBSSxPQUFPLENBQVU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQXZFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVhRLDhCQUE4QjtnQkFNOUIsMkJBQTJCO2dCQUYzQixxQkFBcUI7Z0JBQ3JCLFFBQVE7OzswQ0FOakI7Q0FrRkMsQUF4RUQsSUF3RUM7U0FyRVksK0JBQStCOzs7SUFFMUMseURBQTJDOztJQUMzQyxnREFBMEM7O0lBQzFDLG1EQUFpQjs7SUFHakIscURBQXVDOzs7OztJQUdyQyw4REFBMkQ7Ozs7O0lBQzNELDJEQUFxRDs7Ozs7SUFDckQseURBQTZDOzs7OztJQUM3QywwREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9iaWxlRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIH0gZnJvbSAnLi9tb2JpbGUtZmlyZWJhc2UtbWVzc2FnaW5nLnNlcnZpY2UnO1xyXG4vLyBpbXBvcnQgeyBXZWJGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UgfSBmcm9tICcuL3dlYi1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm1IZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9oZWxwZXJzL3BsYXRmb3JtLWhlbHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IFdlYkZpcmViYXNlTWVzc2FnaW5nU2VydmljZSB9IGZyb20gJy4vd2ViLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaW5pdERvbUFkYXB0ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVuaWZpZWRGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2Uge1xyXG5cclxuICBjdXJyZW50TWVzc2FnZSA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbiAgdG9rZW4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgSXNBY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgLy8gIG9ubHkgcmVsZXZhbnQgb24gaW9zXHJcbiAgcGVybWlzc2lvbiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtb2JpbGVOb3RpZmljYXRpb25zOiBNb2JpbGVGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHdlYk5vdGlmaWNhdGlvbnM6IFdlYkZpcmViYXNlTWVzc2FnaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm1IZWxwZXI6IFBsYXRmb3JtSGVscGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVxyXG5cclxuICApIHsgIFxyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpbml0KCkge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm1IZWxwZXIuaXNOYXRpdmUpIHtcclxuICAgICAgdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLmluaXQoKTtcclxuICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5jdXJyZW50TWVzc2FnZTtcclxuICAgICAgdGhpcy5wZXJtaXNzaW9uID0gdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLnBlcm1pc3Npb247XHJcbiAgICAgIHRoaXMudG9rZW4gPSB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMudG9rZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndlYk5vdGlmaWNhdGlvbnMuaW5pdCgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlID0gdGhpcy53ZWJOb3RpZmljYXRpb25zLmN1cnJlbnRNZXNzYWdlO1xyXG4gICAgICB0aGlzLnRva2VuID0gdGhpcy53ZWJOb3RpZmljYXRpb25zLnRva2VuO1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb24gPSB0aGlzLndlYk5vdGlmaWNhdGlvbnMucGVybWlzc2lvbjtcclxuICAgIH1cclxuICAgIHRoaXMuSXNBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgam9pbkdyb3VwKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmKHRoaXMucGxhdGZvcm1IZWxwZXIuaXNOYXRpdmUpIHtcclxuICAgICAgdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLmpvaW5Hcm91cChpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnd2ViIHRvcGljL2dyb3VwIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBiZSByZXNvbHZlZCBzZXJ2ZXJzaWRlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxlYXZlR3JvdXAoaWQ6IHN0cmluZykge1xyXG4gICAgaWYodGhpcy5wbGF0Zm9ybUhlbHBlci5pc05hdGl2ZSkge1xyXG4gICAgICB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMubGVhdmVHcm91cChpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnd2ViIHRvcGljL2dyb3VwIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBiZSByZXNvbHZlZCBzZXJ2ZXJzaWRlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQZXJtaXNzaW9uKCkge1xyXG4gICAgaWYodGhpcy5wbGF0Zm9ybUhlbHBlci5pc05hdGl2ZSkge1xyXG4gICAgICB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMudXBkYXRlUGVybWlzc2lvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53ZWJOb3RpZmljYXRpb25zLmdldFRva2VuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIG9ubHkgd29ya3Mgb24gaU9TIG90aGVyIHBsYXRmb3JtcyBkb250IG5lZWQgcGVybWlzc2lvbnNcclxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYodGhpcy5wbGF0Zm9ybVNlcnZpY2UuaXMoJ2lvcycpICYmIHRoaXMucGxhdGZvcm1IZWxwZXIuaXNOYXRpdmUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5oYXNQZXJtaXNzaW9uKClcclxuICAgICAgICAudGhlbihyZXMgPT4geyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH0ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19