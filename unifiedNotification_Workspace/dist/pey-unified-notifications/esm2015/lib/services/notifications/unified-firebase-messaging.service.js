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
                .then((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                console.log(res);
                return res;
            }));
        }
        {
            return new Promise((/**
             * @return {?}
             */
            () => {
                return true;
            }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pZmllZC1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbm90aWZpY2F0aW9ucy91bmlmaWVkLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUVyRixPQUFPLEVBQUUsZUFBZSxFQUF1QixNQUFNLE1BQU0sQ0FBQztBQUc1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBTy9FLE1BQU0sT0FBTywrQkFBK0I7Ozs7OztJQVUxQyxZQUNVLG1CQUFtRCxFQUNuRCxnQkFBNkMsRUFDN0MsZUFBeUI7UUFGekIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFnQztRQUNuRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCO1FBQzdDLG9CQUFlLEdBQWYsZUFBZSxDQUFVO1FBWG5DLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0MsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFTLElBQUksQ0FBQyxDQUFDO1FBQzFDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsWUFBTyxHQUFHLElBQUksQ0FBQzs7UUFHZixlQUFVLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFRdkMsQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsUUFBaUI7UUFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFFekIsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDO1lBQzlELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQztZQUN0RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7WUFDM0QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQztTQUNwRDtRQUNELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEVBQVU7UUFDbEIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQztTQUM3RTtJQUNILENBQUM7Ozs7O0lBQ0QsVUFBVSxDQUFDLEVBQVU7UUFDbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQThELENBQUMsQ0FBQztTQUM3RTtJQUNILENBQUM7Ozs7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7O0lBRUQsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUU7aUJBQzVDLElBQUk7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNqQixPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFBQyxDQUFDO1NBQ047UUFBQztZQUNBLE9BQU8sSUFBSSxPQUFPOzs7WUFBVSxHQUFHLEVBQUU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQXpFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFaUSw4QkFBOEI7WUFNOUIsMkJBQTJCO1lBRDNCLFFBQVE7Ozs7O0lBVWYseURBQTJDOztJQUMzQyxnREFBMEM7O0lBQzFDLG1EQUFpQjs7SUFDakIsa0RBQWU7O0lBQ2YsbURBQWtCOztJQUVsQixxREFBdUM7Ozs7O0lBR3JDLDhEQUEyRDs7Ozs7SUFDM0QsMkRBQXFEOzs7OztJQUNyRCwwREFBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9iaWxlRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIH0gZnJvbSAnLi9tb2JpbGUtZmlyZWJhc2UtbWVzc2FnaW5nLnNlcnZpY2UnO1xyXG4vLyBpbXBvcnQgeyBXZWJGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UgfSBmcm9tICcuL3dlYi1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCwgb2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgUGxhdGZvcm1IZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi8uLi9oZWxwZXJzL3BsYXRmb3JtLWhlbHBlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IFdlYkZpcmViYXNlTWVzc2FnaW5nU2VydmljZSB9IGZyb20gJy4vd2ViLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFVuaWZpZWRGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2Uge1xyXG5cclxuICBjdXJyZW50TWVzc2FnZSA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XHJcbiAgdG9rZW4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcbiAgSXNBY3RpdmUgPSBmYWxzZTtcclxuICBpc0FsaXZlID0gdHJ1ZTtcclxuICBpc05hdGl2ZTogYm9vbGVhbjtcclxuICAvLyAgb25seSByZWxldmFudCBvbiBpb3NcclxuICBwZXJtaXNzaW9uID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG1vYmlsZU5vdGlmaWNhdGlvbnM6IE1vYmlsZUZpcmViYXNlTWVzc2FnaW5nU2VydmljZSxcclxuICAgIHByaXZhdGUgd2ViTm90aWZpY2F0aW9uczogV2ViRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBwbGF0Zm9ybVNlcnZpY2U6IFBsYXRmb3JtXHJcblxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgaW5pdChpc05hdGl2ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc05hdGl2ZSA9IGlzTmF0aXZlO1xyXG5cclxuICAgIGlmIChpc05hdGl2ZSkge1xyXG4gICAgICB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMuaW5pdCgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlID0gdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLmN1cnJlbnRNZXNzYWdlO1xyXG4gICAgICB0aGlzLnBlcm1pc3Npb24gPSB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMucGVybWlzc2lvbjtcclxuICAgICAgdGhpcy50b2tlbiA9IHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy50b2tlbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2ViTm90aWZpY2F0aW9ucy5pbml0KCk7XHJcbiAgICAgIHRoaXMuY3VycmVudE1lc3NhZ2UgPSB0aGlzLndlYk5vdGlmaWNhdGlvbnMuY3VycmVudE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMudG9rZW4gPSB0aGlzLndlYk5vdGlmaWNhdGlvbnMudG9rZW47XHJcbiAgICAgIHRoaXMucGVybWlzc2lvbiA9IHRoaXMud2ViTm90aWZpY2F0aW9ucy5wZXJtaXNzaW9uO1xyXG4gICAgfVxyXG4gICAgdGhpcy5Jc0FjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBqb2luR3JvdXAoaWQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuaXNOYXRpdmUpIHtcclxuICAgICAgdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLmpvaW5Hcm91cChpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnd2ViIHRvcGljL2dyb3VwIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBiZSByZXNvbHZlZCBzZXJ2ZXJzaWRlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGxlYXZlR3JvdXAoaWQ6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuaXNOYXRpdmUpIHtcclxuICAgICAgdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLmxlYXZlR3JvdXAoaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dlYiB0b3BpYy9ncm91cCBzdWJzY3JpcHRpb25zIGhhdmUgdG8gYmUgcmVzb2x2ZWQgc2VydmVyc2lkZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGVybWlzc2lvbigpIHtcclxuICAgIGlmICh0aGlzLmlzTmF0aXZlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy51cGRhdGVQZXJtaXNzaW9uKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLndlYk5vdGlmaWNhdGlvbnMuZ2V0VG9rZW4oKTtcclxuICAgIH1cclxuICB9XHJcbiAgLy8gb25seSB3b3JrcyBvbiBpT1Mgb3RoZXIgcGxhdGZvcm1zIGRvbnQgbmVlZCBwZXJtaXNzaW9uc1xyXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybVNlcnZpY2UuaXMoJ2lvcycpICYmIHRoaXMuaXNOYXRpdmUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5oYXNQZXJtaXNzaW9uKClcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==