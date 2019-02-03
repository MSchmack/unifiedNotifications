/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
import * as i3 from "@ionic/angular/dist/providers/platform";
export class UnifiedFirebaseMessagingService {
    /**
     * @param {?} mobileNotifications
     * @param {?} webNotifications
     * @param {?} platformService
     */
    constructor(mobileNotifications, webNotifications, platformService) {
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
    init(isNative) {
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
    }
    /**
     * @param {?} id
     * @return {?}
     */
    joinGroup(id) {
        if (this.isNative) {
            this.mobileNotifications.joinGroup(id);
        }
        else {
            console.log('web topic/group subscriptions have to be resolved serverside');
        }
    }
    /**
     * @param {?} id
     * @return {?}
     */
    leaveGroup(id) {
        if (this.isNative) {
            this.mobileNotifications.leaveGroup(id);
        }
        else {
            console.log('web topic/group subscriptions have to be resolved serverside');
        }
    }
    /**
     * @return {?}
     */
    updatePermission() {
        if (this.isNative) {
            this.mobileNotifications.updatePermission();
        }
        else {
            this.webNotifications.getToken();
        }
    }
    // only works on iOS other platforms dont need permissions
    /**
     * @return {?}
     */
    hasPermission() {
        if (this.platformService.is('ios') && this.isNative) {
            return this.mobileNotifications.hasPermission()
                .then(res => {
                console.log(res);
                return res;
            });
        }
        {
            return new Promise(() => {
                return true;
            });
        }
    }
}
UnifiedFirebaseMessagingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
UnifiedFirebaseMessagingService.ctorParameters = () => [
    { type: MobileFirebaseMessagingService },
    { type: WebFirebaseMessagingService },
    { type: Platform }
];
/** @nocollapse */ UnifiedFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function UnifiedFirebaseMessagingService_Factory() { return new UnifiedFirebaseMessagingService(i0.inject(i1.MobileFirebaseMessagingService), i0.inject(i2.WebFirebaseMessagingService), i0.inject(i3.Platform)); }, token: UnifiedFirebaseMessagingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pZmllZC1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbm90aWZpY2F0aW9ucy91bmlmaWVkLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUVyRixPQUFPLEVBQUUsZUFBZSxFQUF1QixNQUFNLE1BQU0sQ0FBQztBQUc1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBTy9FLE1BQU0sT0FBTywrQkFBK0I7Ozs7OztJQVUxQyxZQUNVLG1CQUFtRCxFQUNuRCxnQkFBNkMsRUFDN0MsZUFBeUI7UUFGekIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFnQztRQUNuRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUFVO1FBWG5DLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzFDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLElBQUksQ0FBQzs7UUFHZixlQUFVLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFRdkMsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsUUFBaUI7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1lBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7WUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQVU7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQztTQUM3RTtJQUNILENBQUM7Ozs7O0lBQ0QsVUFBVSxDQUFDLEVBQVU7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQztTQUM3RTtJQUNILENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7O0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUU7aUJBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFBQztZQUNBLE9BQU8sSUFBSSxPQUFPLENBQVUsR0FBRyxFQUFFO2dCQUMvQixPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUF6RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWlEsOEJBQThCO1lBTTlCLDJCQUEyQjtZQUQzQixRQUFROzs7OztJQVVmLHlEQUEyQzs7SUFDM0MsZ0RBQTBDOztJQUMxQyxtREFBaUI7O0lBQ2pCLGtEQUFlOztJQUNmLG1EQUFrQjs7SUFFbEIscURBQXVDOzs7OztJQUdyQyw4REFBMkQ7Ozs7O0lBQzNELDJEQUFxRDs7Ozs7SUFDckQsMERBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1vYmlsZUZpcmViYXNlTWVzc2FnaW5nU2VydmljZSB9IGZyb20gJy4vbW9iaWxlLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlJztcclxuLy8gaW1wb3J0IHsgV2ViRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIH0gZnJvbSAnLi93ZWItZmlyZWJhc2UtbWVzc2FnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QsIG9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtSGVscGVyU2VydmljZSB9IGZyb20gJy4vLi4vaGVscGVycy9wbGF0Zm9ybS1oZWxwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBXZWJGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UgfSBmcm9tICcuL3dlYi1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVbmlmaWVkRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIHtcclxuXHJcbiAgY3VycmVudE1lc3NhZ2UgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG4gIHRva2VuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG4gIElzQWN0aXZlID0gZmFsc2U7XHJcbiAgaXNBbGl2ZSA9IHRydWU7XHJcbiAgaXNOYXRpdmU6IGJvb2xlYW47XHJcbiAgLy8gIG9ubHkgcmVsZXZhbnQgb24gaW9zXHJcbiAgcGVybWlzc2lvbiA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBtb2JpbGVOb3RpZmljYXRpb25zOiBNb2JpbGVGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHdlYk5vdGlmaWNhdGlvbnM6IFdlYkZpcmViYXNlTWVzc2FnaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybVxyXG5cclxuICApIHtcclxuICB9XHJcblxyXG4gIGluaXQoaXNOYXRpdmU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNOYXRpdmUgPSBpc05hdGl2ZTtcclxuXHJcbiAgICBpZiAoaXNOYXRpdmUpIHtcclxuICAgICAgdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLmluaXQoKTtcclxuICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5jdXJyZW50TWVzc2FnZTtcclxuICAgICAgdGhpcy5wZXJtaXNzaW9uID0gdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLnBlcm1pc3Npb247XHJcbiAgICAgIHRoaXMudG9rZW4gPSB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMudG9rZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndlYk5vdGlmaWNhdGlvbnMuaW5pdCgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlID0gdGhpcy53ZWJOb3RpZmljYXRpb25zLmN1cnJlbnRNZXNzYWdlO1xyXG4gICAgICB0aGlzLnRva2VuID0gdGhpcy53ZWJOb3RpZmljYXRpb25zLnRva2VuO1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb24gPSB0aGlzLndlYk5vdGlmaWNhdGlvbnMucGVybWlzc2lvbjtcclxuICAgIH1cclxuICAgIHRoaXMuSXNBY3RpdmUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgam9pbkdyb3VwKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmlzTmF0aXZlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5qb2luR3JvdXAoaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dlYiB0b3BpYy9ncm91cCBzdWJzY3JpcHRpb25zIGhhdmUgdG8gYmUgcmVzb2x2ZWQgc2VydmVyc2lkZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBsZWF2ZUdyb3VwKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLmlzTmF0aXZlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5sZWF2ZUdyb3VwKGlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWIgdG9waWMvZ3JvdXAgc3Vic2NyaXB0aW9ucyBoYXZlIHRvIGJlIHJlc29sdmVkIHNlcnZlcnNpZGUnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVBlcm1pc3Npb24oKSB7XHJcbiAgICBpZiAodGhpcy5pc05hdGl2ZSkge1xyXG4gICAgICB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMudXBkYXRlUGVybWlzc2lvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53ZWJOb3RpZmljYXRpb25zLmdldFRva2VuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8vIG9ubHkgd29ya3Mgb24gaU9TIG90aGVyIHBsYXRmb3JtcyBkb250IG5lZWQgcGVybWlzc2lvbnNcclxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm1TZXJ2aWNlLmlzKCdpb3MnKSAmJiB0aGlzLmlzTmF0aXZlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMuaGFzUGVybWlzc2lvbigpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxib29sZWFuPigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=