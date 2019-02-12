/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { MobileFirebaseMessagingService } from './mobile-firebase-messaging.service';
// import { WebFirebaseMessagingService } from './web-firebase-messaging.service';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { WebFirebaseMessagingService } from './web-firebase-messaging.service';
import * as i0 from "@angular/core";
import * as i1 from "./mobile-firebase-messaging.service";
import * as i2 from "./web-firebase-messaging.service";
import * as i3 from "@ionic/angular";
var UnifiedFirebaseMessagingService = /** @class */ (function () {
    function UnifiedFirebaseMessagingService(mobileNotifications, webNotifications, platformService) {
        this.mobileNotifications = mobileNotifications;
        this.webNotifications = webNotifications;
        this.platformService = platformService;
        this.currentMessage = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        this.IsActive = false;
        this.isAlive = true;
        //  only relevant on ios
        this.permission = new BehaviorSubject(null);
    }
    /**
     * @param {?} isNative
     * @return {?}
     */
    UnifiedFirebaseMessagingService.prototype.init = /**
     * @param {?} isNative
     * @return {?}
     */
    function (isNative) {
        this.isNative = isNative;
        if (isNative) {
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
        if (this.isNative) {
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
        if (this.isNative) {
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
        if (this.isNative) {
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
        if (this.platformService.is('ios') && this.isNative) {
            return this.mobileNotifications.hasPermission()
                .then((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                console.log(res);
                return res;
            }));
        }
        {
            return new Promise((/**
             * @return {?}
             */
            function () {
                return true;
            }));
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
        { type: Platform }
    ]; };
    /** @nocollapse */ UnifiedFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function UnifiedFirebaseMessagingService_Factory() { return new UnifiedFirebaseMessagingService(i0.inject(i1.MobileFirebaseMessagingService), i0.inject(i2.WebFirebaseMessagingService), i0.inject(i3.Platform)); }, token: UnifiedFirebaseMessagingService, providedIn: "root" });
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
    UnifiedFirebaseMessagingService.prototype.isAlive;
    /** @type {?} */
    UnifiedFirebaseMessagingService.prototype.isNative;
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
    UnifiedFirebaseMessagingService.prototype.platformService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pZmllZC1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbm90aWZpY2F0aW9ucy91bmlmaWVkLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUVyRixPQUFPLEVBQUUsZUFBZSxFQUF1QixNQUFNLE1BQU0sQ0FBQztBQUc1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBSS9FO0lBYUUseUNBQ1UsbUJBQW1ELEVBQ25ELGdCQUE2QyxFQUM3QyxlQUF5QjtRQUZ6Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWdDO1FBQ25ELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7UUFDN0Msb0JBQWUsR0FBZixlQUFlLENBQVU7UUFYbkMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDMUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsSUFBSSxDQUFDOztRQUdmLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQVF2QyxDQUFDOzs7OztJQUVELDhDQUFJOzs7O0lBQUosVUFBSyxRQUFpQjtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7WUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDO1lBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztTQUM3QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztZQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxtREFBUzs7OztJQUFULFVBQVUsRUFBVTtRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxvREFBVTs7OztJQUFWLFVBQVcsRUFBVTtRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7OztJQUVELDBEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzdDO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBQ0QsMERBQTBEOzs7OztJQUMxRCx1REFBYTs7Ozs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUU7aUJBQzVDLElBQUk7Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQUMsQ0FBQztTQUNOO1FBQUM7WUFDQSxPQUFPLElBQUksT0FBTzs7O1lBQVU7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7O2dCQXpFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpRLDhCQUE4QjtnQkFNOUIsMkJBQTJCO2dCQUQzQixRQUFROzs7MENBTmpCO0NBcUZDLEFBMUVELElBMEVDO1NBdkVZLCtCQUErQjs7O0lBRTFDLHlEQUEyQzs7SUFDM0MsZ0RBQTBDOztJQUMxQyxtREFBaUI7O0lBQ2pCLGtEQUFlOztJQUNmLG1EQUFrQjs7SUFFbEIscURBQXVDOzs7OztJQUdyQyw4REFBMkQ7Ozs7O0lBQzNELDJEQUFxRDs7Ozs7SUFDckQsMERBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vYmlsZUZpcmViYXNlTWVzc2FnaW5nU2VydmljZSB9IGZyb20gJy4vbW9iaWxlLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlJztcclxuLy8gaW1wb3J0IHsgV2ViRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIH0gZnJvbSAnLi93ZWItZmlyZWJhc2UtbWVzc2FnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QsIG9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtSGVscGVyU2VydmljZSB9IGZyb20gJy4vLi4vaGVscGVycy9wbGF0Zm9ybS1oZWxwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBXZWJGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UgfSBmcm9tICcuL3dlYi1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmlmaWVkRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIHtcclxuXHJcbiAgY3VycmVudE1lc3NhZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4gIHRva2VuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG4gIElzQWN0aXZlID0gZmFsc2U7XHJcbiAgaXNBbGl2ZSA9IHRydWU7XHJcbiAgaXNOYXRpdmU6IGJvb2xlYW47XHJcbiAgLy8gIG9ubHkgcmVsZXZhbnQgb24gaW9zXHJcbiAgcGVybWlzc2lvbiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtb2JpbGVOb3RpZmljYXRpb25zOiBNb2JpbGVGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHdlYk5vdGlmaWNhdGlvbnM6IFdlYkZpcmViYXNlTWVzc2FnaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVxyXG5cclxuICApIHtcclxuICB9XHJcblxyXG4gIGluaXQoaXNOYXRpdmU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNOYXRpdmUgPSBpc05hdGl2ZTtcclxuXHJcbiAgICBpZiAoaXNOYXRpdmUpIHtcclxuICAgICAgdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLmluaXQoKTtcclxuICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5jdXJyZW50TWVzc2FnZTtcclxuICAgICAgdGhpcy5wZXJtaXNzaW9uID0gdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLnBlcm1pc3Npb247XHJcbiAgICAgIHRoaXMudG9rZW4gPSB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMudG9rZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndlYk5vdGlmaWNhdGlvbnMuaW5pdCgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlID0gdGhpcy53ZWJOb3RpZmljYXRpb25zLmN1cnJlbnRNZXNzYWdlO1xyXG4gICAgICB0aGlzLnRva2VuID0gdGhpcy53ZWJOb3RpZmljYXRpb25zLnRva2VuO1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb24gPSB0aGlzLndlYk5vdGlmaWNhdGlvbnMucGVybWlzc2lvbjtcclxuICAgIH1cclxuICAgIHRoaXMuSXNBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgam9pbkdyb3VwKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmlzTmF0aXZlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5qb2luR3JvdXAoaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dlYiB0b3BpYy9ncm91cCBzdWJzY3JpcHRpb25zIGhhdmUgdG8gYmUgcmVzb2x2ZWQgc2VydmVyc2lkZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBsZWF2ZUdyb3VwKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmlzTmF0aXZlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5sZWF2ZUdyb3VwKGlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWIgdG9waWMvZ3JvdXAgc3Vic2NyaXB0aW9ucyBoYXZlIHRvIGJlIHJlc29sdmVkIHNlcnZlcnNpZGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBlcm1pc3Npb24oKSB7XHJcbiAgICBpZiAodGhpcy5pc05hdGl2ZSkge1xyXG4gICAgICB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMudXBkYXRlUGVybWlzc2lvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53ZWJOb3RpZmljYXRpb25zLmdldFRva2VuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIG9ubHkgd29ya3Mgb24gaU9TIG90aGVyIHBsYXRmb3JtcyBkb250IG5lZWQgcGVybWlzc2lvbnNcclxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm1TZXJ2aWNlLmlzKCdpb3MnKSAmJiB0aGlzLmlzTmF0aXZlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMuaGFzUGVybWlzc2lvbigpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=