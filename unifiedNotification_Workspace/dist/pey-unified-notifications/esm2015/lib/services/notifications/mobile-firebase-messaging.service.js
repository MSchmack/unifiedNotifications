/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
// declare var FirebasePlugin;
import { Firebase } from '@ionic-native/firebase/ngx';
import { takeWhile } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@ionic-native/firebase/ngx/index";
export class MobileFirebaseMessagingService {
    /**
     * @param {?} firebase
     */
    constructor(firebase) {
        this.firebase = firebase;
        this.permission = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        this.currentMessage = new BehaviorSubject(null);
        this.isAlive = true;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isAlive = false;
    }
    /**
     * @return {?}
     */
    init() {
        this.getToken();
        this.initNotifications();
    }
    /**
     * @return {?}
     */
    getToken() {
        this.firebase.getToken()
            .then(token => {
            this.token.next(token);
        })
            .catch(err => console.log(err));
        this.firebase.onTokenRefresh()
            .pipe(takeWhile(() => this.isAlive))
            .subscribe(x => {
            //posts on update
            if (x) {
                if (x !== this.token) {
                    this.token.next(x);
                }
            }
        });
    }
    /**
     * @return {?}
     */
    initNotifications() {
        this.firebase.onNotificationOpen()
            .pipe(takeWhile(() => this.isAlive))
            .subscribe(notification => {
            this.currentMessage.next(notification);
        });
    }
    /**
     * @param {?} id
     * @return {?}
     */
    joinGroup(id) {
        console.log('subscribe to group' + id);
        this.firebase.subscribe(id);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    leaveGroup(id) {
        console.log('unsubscribe to group' + id);
        this.firebase.unsubscribe(id);
    }
    /**
     * @return {?}
     */
    updatePermission() {
        this.firebase.grantPermission()
            .then(permission => {
            this.permission.next(permission);
        })
            .catch(err => console.log(err));
        this.firebase.hasPermission()
            .then(perm => {
        })
            .catch(err => console.log(err));
    }
    /**
     * @return {?}
     */
    hasPermission() {
        return this.firebase.hasPermission()
            .then(perm => {
            return perm.isEnabled;
        });
    }
}
MobileFirebaseMessagingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
MobileFirebaseMessagingService.ctorParameters = () => [
    { type: Firebase }
];
/** @nocollapse */ MobileFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function MobileFirebaseMessagingService_Factory() { return new MobileFirebaseMessagingService(i0.inject(i1.Firebase)); }, token: MobileFirebaseMessagingService, providedIn: "root" });
if (false) {
    /** @type {?} */
    MobileFirebaseMessagingService.prototype.permission;
    /** @type {?} */
    MobileFirebaseMessagingService.prototype.token;
    /** @type {?} */
    MobileFirebaseMessagingService.prototype.currentMessage;
    /** @type {?} */
    MobileFirebaseMessagingService.prototype.isAlive;
    /**
     * @type {?}
     * @private
     */
    MobileFirebaseMessagingService.prototype.firebase;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV5LXVuaWZpZWQtbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL21vYmlsZS1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFXLE1BQU0sTUFBTSxDQUFDOztBQUdoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFNM0MsTUFBTSxPQUFPLDhCQUE4Qjs7OztJQVN6QyxZQUNVLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFSNUIsZUFBVSxHQUFHLElBQUksZUFBZSxDQUFVLElBQUksQ0FBQyxDQUFDO1FBQ2hELFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBUyxJQUFJLENBQUMsQ0FBQztRQUUxQyxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLFlBQU8sR0FBRyxJQUFJLENBQUM7SUFJWCxDQUFDOzs7O0lBRUwsV0FBVztRQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUU7YUFDbkIsSUFBSSxDQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO2FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25DLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRTtZQUNkLGlCQUFpQjtZQUNqQixJQUFHLENBQUMsRUFBRTtnQkFDSixJQUFHLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUNELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLEVBQUU7YUFDL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkMsU0FBUyxDQUFFLFlBQVksQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFDRCxTQUFTLENBQUMsRUFBVTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBQ0QsVUFBVSxDQUFDLEVBQVU7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ0QsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEVBQUU7YUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRTthQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFDYixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUNELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO2FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7OztZQXhFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxRQUFROzs7OztJQVNmLG9EQUFnRDs7SUFDaEQsK0NBQTBDOztJQUUxQyx3REFBMkM7O0lBRTNDLGlEQUFlOzs7OztJQUdiLGtEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbi8vIGRlY2xhcmUgdmFyIEZpcmViYXNlUGx1Z2luO1xyXG5pbXBvcnQgeyBGaXJlYmFzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlyZWJhc2Uvbmd4JztcclxuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vYmlsZUZpcmViYXNlTWVzc2FnaW5nU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcblxyXG4gIHBlcm1pc3Npb24gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KG51bGwpO1xyXG4gIHRva2VuID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KG51bGwpO1xyXG5cclxuICBjdXJyZW50TWVzc2FnZSA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XHJcblxyXG4gIGlzQWxpdmUgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZmlyZWJhc2U6IEZpcmViYXNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcclxuICB9XHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuZ2V0VG9rZW4oKTtcclxuICAgIHRoaXMuaW5pdE5vdGlmaWNhdGlvbnMoKTtcclxuICB9XHJcbiAgZ2V0VG9rZW4oKSB7IFxyXG4gICAgdGhpcy5maXJlYmFzZS5nZXRUb2tlbigpXHJcbiAgICAgICAgLnRoZW4oIHRva2VuID0+IHtcclxuICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh0b2tlbik7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG5cclxuICAgIHRoaXMuZmlyZWJhc2Uub25Ub2tlblJlZnJlc2goKVxyXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKCkgPT4gdGhpcy5pc0FsaXZlKSlcclxuICAgICAgLnN1YnNjcmliZSggeCA9PiB7XHJcbiAgICAgICAgLy9wb3N0cyBvbiB1cGRhdGVcclxuICAgICAgICBpZih4KSB7XHJcbiAgICAgICAgICBpZih4ICE9PSB0aGlzLnRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW4ubmV4dCh4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBpbml0Tm90aWZpY2F0aW9ucygpIHsgXHJcbiAgICB0aGlzLmZpcmViYXNlLm9uTm90aWZpY2F0aW9uT3BlbigpXHJcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpKVxyXG4gICAgICAuc3Vic2NyaWJlKCBub3RpZmljYXRpb24gPT4ge1xyXG4gICAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZS5uZXh0KG5vdGlmaWNhdGlvbik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuICBqb2luR3JvdXAoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coJ3N1YnNjcmliZSB0byBncm91cCcgKyBpZCk7XHJcbiAgICB0aGlzLmZpcmViYXNlLnN1YnNjcmliZShpZCk7XHJcbiAgfVxyXG4gIGxlYXZlR3JvdXAoaWQ6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coJ3Vuc3Vic2NyaWJlIHRvIGdyb3VwJyArIGlkKTtcclxuICAgIHRoaXMuZmlyZWJhc2UudW5zdWJzY3JpYmUoaWQpO1xyXG4gIH1cclxuICB1cGRhdGVQZXJtaXNzaW9uKCkge1xyXG4gICAgdGhpcy5maXJlYmFzZS5ncmFudFBlcm1pc3Npb24oKVxyXG4gICAgICAudGhlbihwZXJtaXNzaW9uID0+IHtcclxuICAgICAgICB0aGlzLnBlcm1pc3Npb24ubmV4dChwZXJtaXNzaW9uKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIHRoaXMuZmlyZWJhc2UuaGFzUGVybWlzc2lvbigpXHJcbiAgICAgIC50aGVuKHBlcm0gPT4gIHtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICB9XHJcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybiB0aGlzLmZpcmViYXNlLmhhc1Blcm1pc3Npb24oKVxyXG4gICAgICAgICAgICAgIC50aGVuKHBlcm0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBlcm0uaXNFbmFibGVkO1xyXG4gICAgICAgICAgICAgIH0pO1xyXG4gIH1cclxufSJdfQ==