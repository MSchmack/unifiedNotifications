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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pZmllZC1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvbm90aWZpY2F0aW9ucy91bmlmaWVkLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDOztBQUVyRixPQUFPLEVBQUUsZUFBZSxFQUF1QixNQUFNLE1BQU0sQ0FBQztBQUc1RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7O0FBSS9FO0lBYUUseUNBQ1UsbUJBQW1ELEVBQ25ELGdCQUE2QyxFQUM3QyxlQUF5QjtRQUZ6Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQWdDO1FBQ25ELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBNkI7UUFDN0Msb0JBQWUsR0FBZixlQUFlLENBQVU7UUFYbkMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFDMUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixZQUFPLEdBQUcsSUFBSSxDQUFDOztRQUdmLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQVF2QyxDQUFDOzs7OztJQUVELDhDQUFJOzs7O0lBQUosVUFBSyxRQUFpQjtRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUV6QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUM7WUFDOUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDO1lBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztTQUM3QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztZQUMzRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7WUFDekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxtREFBUzs7OztJQUFULFVBQVUsRUFBVTtRQUNsQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxvREFBVTs7OztJQUFWLFVBQVcsRUFBVTtRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN6QzthQUFNO1lBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1NBQzdFO0lBQ0gsQ0FBQzs7OztJQUVELDBEQUFnQjs7O0lBQWhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQzdDO2FBQU07WUFDTCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBQ0QsMERBQTBEOzs7OztJQUMxRCx1REFBYTs7Ozs7SUFBYjtRQUNFLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNuRCxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUU7aUJBQzVDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakIsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLENBQUMsQ0FBQztTQUNOO1FBQUM7WUFDQSxPQUFPLElBQUksT0FBTyxDQUFVO2dCQUMxQixPQUFPLElBQUksQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOztnQkF6RUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFaUSw4QkFBOEI7Z0JBTTlCLDJCQUEyQjtnQkFEM0IsUUFBUTs7OzBDQU5qQjtDQXFGQyxBQTFFRCxJQTBFQztTQXZFWSwrQkFBK0I7OztJQUUxQyx5REFBMkM7O0lBQzNDLGdEQUEwQzs7SUFDMUMsbURBQWlCOztJQUNqQixrREFBZTs7SUFDZixtREFBa0I7O0lBRWxCLHFEQUF1Qzs7Ozs7SUFHckMsOERBQTJEOzs7OztJQUMzRCwyREFBcUQ7Ozs7O0lBQ3JELDBEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNb2JpbGVGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UgfSBmcm9tICcuL21vYmlsZS1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZSc7XHJcbi8vIGltcG9ydCB7IFdlYkZpcmViYXNlTWVzc2FnaW5nU2VydmljZSB9IGZyb20gJy4vd2ViLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0LCBvYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybUhlbHBlclNlcnZpY2UgfSBmcm9tICcuLy4uL2hlbHBlcnMvcGxhdGZvcm0taGVscGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgV2ViRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIH0gZnJvbSAnLi93ZWItZmlyZWJhc2UtbWVzc2FnaW5nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVW5pZmllZEZpcmViYXNlTWVzc2FnaW5nU2VydmljZSB7XHJcblxyXG4gIGN1cnJlbnRNZXNzYWdlID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcclxuICB0b2tlbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihudWxsKTtcclxuICBJc0FjdGl2ZSA9IGZhbHNlO1xyXG4gIGlzQWxpdmUgPSB0cnVlO1xyXG4gIGlzTmF0aXZlOiBib29sZWFuO1xyXG4gIC8vICBvbmx5IHJlbGV2YW50IG9uIGlvc1xyXG4gIHBlcm1pc3Npb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbW9iaWxlTm90aWZpY2F0aW9uczogTW9iaWxlRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSB3ZWJOb3RpZmljYXRpb25zOiBXZWJGaXJlYmFzZU1lc3NhZ2luZ1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm1cclxuXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBpbml0KGlzTmF0aXZlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzTmF0aXZlID0gaXNOYXRpdmU7XHJcblxyXG4gICAgaWYgKGlzTmF0aXZlKSB7XHJcbiAgICAgIHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5pbml0KCk7XHJcbiAgICAgIHRoaXMuY3VycmVudE1lc3NhZ2UgPSB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMuY3VycmVudE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMucGVybWlzc2lvbiA9IHRoaXMubW9iaWxlTm90aWZpY2F0aW9ucy5wZXJtaXNzaW9uO1xyXG4gICAgICB0aGlzLnRva2VuID0gdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLnRva2VuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy53ZWJOb3RpZmljYXRpb25zLmluaXQoKTtcclxuICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IHRoaXMud2ViTm90aWZpY2F0aW9ucy5jdXJyZW50TWVzc2FnZTtcclxuICAgICAgdGhpcy50b2tlbiA9IHRoaXMud2ViTm90aWZpY2F0aW9ucy50b2tlbjtcclxuICAgICAgdGhpcy5wZXJtaXNzaW9uID0gdGhpcy53ZWJOb3RpZmljYXRpb25zLnBlcm1pc3Npb247XHJcbiAgICB9XHJcbiAgICB0aGlzLklzQWN0aXZlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGpvaW5Hcm91cChpZDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5pc05hdGl2ZSkge1xyXG4gICAgICB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMuam9pbkdyb3VwKGlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWIgdG9waWMvZ3JvdXAgc3Vic2NyaXB0aW9ucyBoYXZlIHRvIGJlIHJlc29sdmVkIHNlcnZlcnNpZGUnKTtcclxuICAgIH1cclxuICB9XHJcbiAgbGVhdmVHcm91cChpZDogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5pc05hdGl2ZSkge1xyXG4gICAgICB0aGlzLm1vYmlsZU5vdGlmaWNhdGlvbnMubGVhdmVHcm91cChpZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnd2ViIHRvcGljL2dyb3VwIHN1YnNjcmlwdGlvbnMgaGF2ZSB0byBiZSByZXNvbHZlZCBzZXJ2ZXJzaWRlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVQZXJtaXNzaW9uKCkge1xyXG4gICAgaWYgKHRoaXMuaXNOYXRpdmUpIHtcclxuICAgICAgdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLnVwZGF0ZVBlcm1pc3Npb24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMud2ViTm90aWZpY2F0aW9ucy5nZXRUb2tlbigpO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyBvbmx5IHdvcmtzIG9uIGlPUyBvdGhlciBwbGF0Zm9ybXMgZG9udCBuZWVkIHBlcm1pc3Npb25zXHJcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmICh0aGlzLnBsYXRmb3JtU2VydmljZS5pcygnaW9zJykgJiYgdGhpcy5pc05hdGl2ZSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5tb2JpbGVOb3RpZmljYXRpb25zLmhhc1Blcm1pc3Npb24oKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9KTtcclxuICAgIH0ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2U8Ym9vbGVhbj4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19