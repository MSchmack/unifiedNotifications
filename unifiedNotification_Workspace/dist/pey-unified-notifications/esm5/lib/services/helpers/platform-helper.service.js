/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/dist/providers/platform";
var PlatformHelperService = /** @class */ (function () {
    function PlatformHelperService(platformService) {
        this.platformService = platformService;
    }
    Object.defineProperty(PlatformHelperService.prototype, "isNative", {
        get: /**
         * @return {?}
         */
        function () {
            //if http://local like in prod build & ios or android
            // solution till platform.is('mobile') fixed
            // return true;
            if (
            // (document.URL.indexOf( 'http://localhost') !== -1) &&
            (window.hasOwnProperty('cordova')) &&
                (this.platformService.is('ios') || this.platformService.is('android'))) {
                return true;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    PlatformHelperService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    PlatformHelperService.ctorParameters = function () { return [
        { type: Platform }
    ]; };
    /** @nocollapse */ PlatformHelperService.ngInjectableDef = i0.defineInjectable({ factory: function PlatformHelperService_Factory() { return new PlatformHelperService(i0.inject(i1.Platform)); }, token: PlatformHelperService, providedIn: "root" });
    return PlatformHelperService;
}());
export { PlatformHelperService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PlatformHelperService.prototype.platformService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0taGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wZXktdW5pZmllZC1ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2hlbHBlcnMvcGxhdGZvcm0taGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFDMUM7SUFLSSwrQkFBb0IsZUFBeUI7UUFBekIsb0JBQWUsR0FBZixlQUFlLENBQVU7SUFBSSxDQUFDO0lBRWxELHNCQUFJLDJDQUFROzs7O1FBQVo7WUFDSSxxREFBcUQ7WUFDckQsNENBQTRDO1lBQzVDLGVBQWU7WUFDZjtZQUNJLHdEQUF3RDtZQUN4RCxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ2xDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUUsRUFDeEU7Z0JBQ0MsT0FBTyxJQUFJLENBQUM7YUFDZjtpQkFBTTtnQkFDSCxPQUFPLEtBQUssQ0FBQzthQUNoQjtRQUNMLENBQUM7OztPQUFBOztnQkFwQkosVUFBVSxTQUFDO29CQUNSLFVBQVUsRUFBRSxNQUFNO2lCQUNyQjs7OztnQkFIUSxRQUFROzs7Z0NBSGpCO0NBeUJDLEFBckJELElBcUJDO1NBbEJZLHFCQUFxQjs7Ozs7O0lBRWxCLGdEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1IZWxwZXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybSkgeyB9XG5cbiAgICBnZXQgaXNOYXRpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIC8vaWYgaHR0cDovL2xvY2FsIGxpa2UgaW4gcHJvZCBidWlsZCAmIGlvcyBvciBhbmRyb2lkXG4gICAgICAgIC8vIHNvbHV0aW9uIHRpbGwgcGxhdGZvcm0uaXMoJ21vYmlsZScpIGZpeGVkXG4gICAgICAgIC8vIHJldHVybiB0cnVlO1xuICAgICAgICBpZihcbiAgICAgICAgICAgIC8vIChkb2N1bWVudC5VUkwuaW5kZXhPZiggJ2h0dHA6Ly9sb2NhbGhvc3QnKSAhPT0gLTEpICYmXG4gICAgICAgICAgICAod2luZG93Lmhhc093blByb3BlcnR5KCdjb3Jkb3ZhJykpICYmXG4gICAgICAgICAgICAodGhpcy5wbGF0Zm9ybVNlcnZpY2UuaXMoJ2lvcycpIHx8IHRoaXMucGxhdGZvcm1TZXJ2aWNlLmlzKCdhbmRyb2lkJykgKVxuICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSAgICAgICAgIFxuICAgIH1cbn1cbiJdfQ==