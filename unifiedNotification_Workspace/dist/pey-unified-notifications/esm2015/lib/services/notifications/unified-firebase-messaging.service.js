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
        // currentMessage = new Subject();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pZmllZC1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbm90aWZpY2F0aW9ucy91bmlmaWVkLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUVyRixPQUFPLEVBQUUsZUFBZSxFQUF1QixNQUFNLE1BQU0sQ0FBQztBQUc1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBTy9FLE1BQU0sT0FBTywrQkFBK0I7Ozs7OztJQVcxQyxZQUNVLG1CQUFtRCxFQUNuRCxnQkFBNkMsRUFFN0MsZUFBeUI7UUFIekIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFnQztRQUNuRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQTZCO1FBRTdDLG9CQUFlLEdBQWYsZUFBZSxDQUFVOztRQVpuQyxtQkFBYyxHQUFLLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUMxQyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxJQUFJLENBQUM7O1FBR2YsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBU3ZDLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLFFBQWlCO1FBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBRXpCLElBQUksUUFBUSxFQUFFO1lBQ1osSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQztZQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUM7WUFDdEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO1NBQzdDO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1lBQzNELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQztZQUN6QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUM7U0FDcEQ7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxFQUFVO1FBQ2xCLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7U0FDN0U7SUFDSCxDQUFDOzs7OztJQUNELFVBQVUsQ0FBQyxFQUFVO1FBQ25CLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNoQixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3pDO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7U0FDN0U7SUFDSCxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzdDO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7OztJQUVELGFBQWE7UUFDWCxJQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFO2lCQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDOUIsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUM7WUFDQSxPQUFPLElBQUksT0FBTyxDQUFVLEdBQUcsRUFBRTtnQkFDL0IsT0FBTyxJQUFJLENBQUM7WUFDZCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBMUVGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpRLDhCQUE4QjtZQU05QiwyQkFBMkI7WUFEM0IsUUFBUTs7Ozs7SUFXZix5REFBNkM7O0lBQzdDLGdEQUEwQzs7SUFDMUMsbURBQWlCOztJQUNqQixrREFBZTs7SUFDZixtREFBa0I7O0lBRWxCLHFEQUF1Qzs7Ozs7SUFHckMsOERBQTJEOzs7OztJQUMzRCwyREFBcUQ7Ozs7O0lBRXJELDBEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2JpbGVGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UgfSBmcm9tICcuL21vYmlsZS1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZSc7XHJcbi8vIGltcG9ydCB7IFdlYkZpcmViYXNlTWVzc2FnaW5nU2VydmljZSB9IGZyb20gJy4vd2ViLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0LCBvYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLy4uL2hlbHBlcnMvcGxhdGZvcm0taGVscGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgV2ViRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIH0gZnJvbSAnLi93ZWItZmlyZWJhc2UtbWVzc2FnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5pZmllZEZpcmViYXNlTWVzc2FnaW5nU2VydmljZSB7XHJcblxyXG4gIC8vIGN1cnJlbnRNZXNzYWdlID0gbmV3IFN1YmplY3QoKTtcclxuICBjdXJyZW50TWVzc2FnZSA9ICAgbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcclxuICB0b2tlbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuICBJc0FjdGl2ZSA9IGZhbHNlO1xyXG4gIGlzQWxpdmUgPSB0cnVlO1xyXG4gIGlzTmF0aXZlOiBib29sZWFuO1xyXG4gIC8vICBvbmx5IHJlbGV2YW50IG9uIGlvc1xyXG4gIHBlcm1pc3Npb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbW9iaWxlTm90aWZpY2F0aW9uczogTW9iaWxlRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB3ZWJOb3RpZmljYXRpb25zOiBXZWJGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UsXHJcbiAgICAvLyBwcml2YXRlIHBsYXRmb3JtSGVscGVyOiBQbGF0Zm9ybUhlbHBlclNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1cclxuXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBpbml0KGlzTmF0aXZlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzTmF0aXZlID0gaXNOYXRpdmU7XHJcblxyXG4gICAgaWYgKGlzTmF0aXZlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5pbml0KCk7XHJcbiAgICAgIHRoaXMuY3VycmVudE1lc3NhZ2UgPSB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMuY3VycmVudE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMucGVybWlzc2lvbiA9IHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5wZXJtaXNzaW9uO1xyXG4gICAgICB0aGlzLnRva2VuID0gdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLnRva2VuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53ZWJOb3RpZmljYXRpb25zLmluaXQoKTtcclxuICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IHRoaXMud2ViTm90aWZpY2F0aW9ucy5jdXJyZW50TWVzc2FnZTtcclxuICAgICAgdGhpcy50b2tlbiA9IHRoaXMud2ViTm90aWZpY2F0aW9ucy50b2tlbjtcclxuICAgICAgdGhpcy5wZXJtaXNzaW9uID0gdGhpcy53ZWJOb3RpZmljYXRpb25zLnBlcm1pc3Npb247XHJcbiAgICB9XHJcbiAgICB0aGlzLklzQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGpvaW5Hcm91cChpZDogc3RyaW5nKSB7XHJcbiAgICBpZih0aGlzLmlzTmF0aXZlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5qb2luR3JvdXAoaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dlYiB0b3BpYy9ncm91cCBzdWJzY3JpcHRpb25zIGhhdmUgdG8gYmUgcmVzb2x2ZWQgc2VydmVyc2lkZScpO1xyXG4gICAgfVxyXG4gIH1cclxuICBsZWF2ZUdyb3VwKGlkOiBzdHJpbmcpIHtcclxuICAgIGlmKHRoaXMuaXNOYXRpdmUpIHtcclxuICAgICAgdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLmxlYXZlR3JvdXAoaWQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coJ3dlYiB0b3BpYy9ncm91cCBzdWJzY3JpcHRpb25zIGhhdmUgdG8gYmUgcmVzb2x2ZWQgc2VydmVyc2lkZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGVybWlzc2lvbigpIHtcclxuICAgIGlmKHRoaXMuaXNOYXRpdmUpIHtcclxuICAgICAgdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLnVwZGF0ZVBlcm1pc3Npb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2ViTm90aWZpY2F0aW9ucy5nZXRUb2tlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBvbmx5IHdvcmtzIG9uIGlPUyBvdGhlciBwbGF0Zm9ybXMgZG9udCBuZWVkIHBlcm1pc3Npb25zXHJcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmKHRoaXMucGxhdGZvcm1TZXJ2aWNlLmlzKCdpb3MnKSAmJiB0aGlzLmlzTmF0aXZlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMuaGFzUGVybWlzc2lvbigpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHsgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==