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
var MobileFirebaseMessagingService = /** @class */ (function () {
    function MobileFirebaseMessagingService(firebase) {
        this.firebase = firebase;
        this.permission = new BehaviorSubject(null);
        this.token = new BehaviorSubject(null);
        this.currentMessage = new BehaviorSubject(null);
        this.isAlive = true;
    }
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isAlive = false;
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.init = /**
     * @return {?}
     */
    function () {
        this.getToken();
        this.initNotifications();
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.firebase.getToken()
            .then(function (token) {
            _this.token.next(token);
        })
            .catch(function (err) { return console.log(err); });
        this.firebase.onTokenRefresh()
            .pipe(takeWhile(function () { return _this.isAlive; }))
            .subscribe(function (x) {
            //posts on update
            if (x) {
                if (x !== _this.token) {
                    _this.token.next(x);
                }
            }
        });
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.initNotifications = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.firebase.onNotificationOpen()
            .pipe(takeWhile(function () { return _this.isAlive; }))
            .subscribe(function (notification) {
            _this.currentMessage.next(notification);
        });
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.joinGroup = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        console.log('subscribe to group' + id);
        this.firebase.subscribe(id);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.leaveGroup = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        console.log('unsubscribe to group' + id);
        this.firebase.unsubscribe(id);
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.updatePermission = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.firebase.grantPermission()
            .then(function (permission) {
            _this.permission.next(permission);
        })
            .catch(function (err) { return console.log(err); });
        this.firebase.hasPermission()
            .then(function (perm) {
        })
            .catch(function (err) { return console.log(err); });
    };
    /**
     * @return {?}
     */
    MobileFirebaseMessagingService.prototype.hasPermission = /**
     * @return {?}
     */
    function () {
        return this.firebase.hasPermission()
            .then(function (perm) {
            return perm.isEnabled;
        });
    };
    MobileFirebaseMessagingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    MobileFirebaseMessagingService.ctorParameters = function () { return [
        { type: Firebase }
    ]; };
    /** @nocollapse */ MobileFirebaseMessagingService.ngInjectableDef = i0.defineInjectable({ factory: function MobileFirebaseMessagingService_Factory() { return new MobileFirebaseMessagingService(i0.inject(i1.Firebase)); }, token: MobileFirebaseMessagingService, providedIn: "root" });
    return MobileFirebaseMessagingService;
}());
export { MobileFirebaseMessagingService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9iaWxlLWZpcmViYXNlLW1lc3NhZ2luZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcGV5LXVuaWZpZWQtbm90aWZpY2F0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9ub3RpZmljYXRpb25zL21vYmlsZS1maXJlYmFzZS1tZXNzYWdpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFXLE1BQU0sTUFBTSxDQUFDOztBQUdoRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFHM0M7SUFZRSx3Q0FDVSxRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBUjVCLGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUNoRCxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQVMsSUFBSSxDQUFDLENBQUM7UUFFMUMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQyxZQUFPLEdBQUcsSUFBSSxDQUFDO0lBSVgsQ0FBQzs7OztJQUVMLG9EQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFDRCw2Q0FBSTs7O0lBQUo7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUNELGlEQUFROzs7SUFBUjtRQUFBLGlCQWlCQztRQWhCQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRTthQUNuQixJQUFJLENBQUUsVUFBQSxLQUFLO1lBQ1YsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO2FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDLENBQUM7YUFDbkMsU0FBUyxDQUFFLFVBQUEsQ0FBQztZQUNYLGlCQUFpQjtZQUNqQixJQUFHLENBQUMsRUFBRTtnQkFDSixJQUFHLENBQUMsS0FBSyxLQUFJLENBQUMsS0FBSyxFQUFFO29CQUNuQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDcEI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUNELDBEQUFpQjs7O0lBQWpCO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO2FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxPQUFPLEVBQVosQ0FBWSxDQUFDLENBQUM7YUFDbkMsU0FBUyxDQUFFLFVBQUEsWUFBWTtZQUNwQixLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBQ0Qsa0RBQVM7Ozs7SUFBVCxVQUFVLEVBQVU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUNELG1EQUFVOzs7O0lBQVYsVUFBVyxFQUFVO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUNELHlEQUFnQjs7O0lBQWhCO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsRUFBRTthQUM1QixJQUFJLENBQUMsVUFBQSxVQUFVO1lBQ2QsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBaEIsQ0FBZ0IsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFO2FBQzFCLElBQUksQ0FBQyxVQUFBLElBQUk7UUFDVixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFoQixDQUFnQixDQUFDLENBQUM7SUFDcEMsQ0FBQzs7OztJQUNELHNEQUFhOzs7SUFBYjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7YUFDekIsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDLENBQUMsQ0FBQztJQUNmLENBQUM7O2dCQXhFRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLFFBQVE7Ozt5Q0FKakI7Q0FpRkMsQUF6RUQsSUF5RUM7U0F0RVksOEJBQThCOzs7SUFFekMsb0RBQWdEOztJQUNoRCwrQ0FBMEM7O0lBRTFDLHdEQUEyQzs7SUFFM0MsaURBQWU7Ozs7O0lBR2Isa0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuLy8gZGVjbGFyZSB2YXIgRmlyZWJhc2VQbHVnaW47XHJcbmltcG9ydCB7IEZpcmViYXNlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maXJlYmFzZS9uZ3gnO1xyXG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9iaWxlRmlyZWJhc2VNZXNzYWdpbmdTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgcGVybWlzc2lvbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4obnVsbCk7XHJcbiAgdG9rZW4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4obnVsbCk7XHJcblxyXG4gIGN1cnJlbnRNZXNzYWdlID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcclxuXHJcbiAgaXNBbGl2ZSA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBmaXJlYmFzZTogRmlyZWJhc2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xyXG4gIH1cclxuICBpbml0KCkge1xyXG4gICAgdGhpcy5nZXRUb2tlbigpO1xyXG4gICAgdGhpcy5pbml0Tm90aWZpY2F0aW9ucygpO1xyXG4gIH1cclxuICBnZXRUb2tlbigpIHsgXHJcbiAgICB0aGlzLmZpcmViYXNlLmdldFRva2VuKClcclxuICAgICAgICAudGhlbiggdG9rZW4gPT4ge1xyXG4gICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHRva2VuKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcblxyXG4gICAgdGhpcy5maXJlYmFzZS5vblRva2VuUmVmcmVzaCgpXHJcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoKSA9PiB0aGlzLmlzQWxpdmUpKVxyXG4gICAgICAuc3Vic2NyaWJlKCB4ID0+IHtcclxuICAgICAgICAvL3Bvc3RzIG9uIHVwZGF0ZVxyXG4gICAgICAgIGlmKHgpIHtcclxuICAgICAgICAgIGlmKHggIT09IHRoaXMudG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbi5uZXh0KHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGluaXROb3RpZmljYXRpb25zKCkgeyBcclxuICAgIHRoaXMuZmlyZWJhc2Uub25Ob3RpZmljYXRpb25PcGVuKClcclxuICAgICAgLnBpcGUodGFrZVdoaWxlKCgpID0+IHRoaXMuaXNBbGl2ZSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoIG5vdGlmaWNhdGlvbiA9PiB7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRNZXNzYWdlLm5leHQobm90aWZpY2F0aW9uKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIGpvaW5Hcm91cChpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZygnc3Vic2NyaWJlIHRvIGdyb3VwJyArIGlkKTtcclxuICAgIHRoaXMuZmlyZWJhc2Uuc3Vic2NyaWJlKGlkKTtcclxuICB9XHJcbiAgbGVhdmVHcm91cChpZDogc3RyaW5nKSB7XHJcbiAgICBjb25zb2xlLmxvZygndW5zdWJzY3JpYmUgdG8gZ3JvdXAnICsgaWQpO1xyXG4gICAgdGhpcy5maXJlYmFzZS51bnN1YnNjcmliZShpZCk7XHJcbiAgfVxyXG4gIHVwZGF0ZVBlcm1pc3Npb24oKSB7XHJcbiAgICB0aGlzLmZpcmViYXNlLmdyYW50UGVybWlzc2lvbigpXHJcbiAgICAgIC50aGVuKHBlcm1pc3Npb24gPT4ge1xyXG4gICAgICAgIHRoaXMucGVybWlzc2lvbi5uZXh0KHBlcm1pc3Npb24pO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgdGhpcy5maXJlYmFzZS5oYXNQZXJtaXNzaW9uKClcclxuICAgICAgLnRoZW4ocGVybSA9PiAge1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gIH1cclxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuZmlyZWJhc2UuaGFzUGVybWlzc2lvbigpXHJcbiAgICAgICAgICAgICAgLnRoZW4ocGVybSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGVybS5pc0VuYWJsZWQ7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgfVxyXG59Il19