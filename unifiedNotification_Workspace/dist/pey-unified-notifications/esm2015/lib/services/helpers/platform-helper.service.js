/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as i0 from "@angular/core";
import * as i1 from "@ionic/angular/dist/providers/platform";
export class PlatformHelperService {
    /**
     * @param {?} platformService
     */
    constructor(platformService) {
        this.platformService = platformService;
    }
    /**
     * @return {?}
     */
    get isNative() {
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
    }
}
PlatformHelperService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
PlatformHelperService.ctorParameters = () => [
    { type: Platform }
];
/** @nocollapse */ PlatformHelperService.ngInjectableDef = i0.defineInjectable({ factory: function PlatformHelperService_Factory() { return new PlatformHelperService(i0.inject(i1.Platform)); }, token: PlatformHelperService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    PlatformHelperService.prototype.platformService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0taGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wZXktdW5pZmllZC1ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2hlbHBlcnMvcGxhdGZvcm0taGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFJMUMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUU5QixZQUFvQixlQUF5QjtRQUF6QixvQkFBZSxHQUFmLGVBQWUsQ0FBVTtJQUFJLENBQUM7Ozs7SUFFbEQsSUFBSSxRQUFRO1FBQ1IscURBQXFEO1FBQ3JELDRDQUE0QztRQUM1QyxlQUFlO1FBQ2Y7UUFDSSx3REFBd0Q7UUFDeEQsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUUsRUFDeEU7WUFDQyxPQUFPLElBQUksQ0FBQztTQUNmO2FBQU07WUFDSCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7OztZQXBCSixVQUFVLFNBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckI7Ozs7WUFIUSxRQUFROzs7Ozs7OztJQU1ELGdEQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUGxhdGZvcm1IZWxwZXJTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGxhdGZvcm1TZXJ2aWNlOiBQbGF0Zm9ybSkgeyB9XG5cbiAgICBnZXQgaXNOYXRpdmUoKTogYm9vbGVhbiB7XG4gICAgICAgIC8vaWYgaHR0cDovL2xvY2FsIGxpa2UgaW4gcHJvZCBidWlsZCAmIGlvcyBvciBhbmRyb2lkXG4gICAgICAgIC8vIHNvbHV0aW9uIHRpbGwgcGxhdGZvcm0uaXMoJ21vYmlsZScpIGZpeGVkXG4gICAgICAgIC8vIHJldHVybiB0cnVlO1xuICAgICAgICBpZihcbiAgICAgICAgICAgIC8vIChkb2N1bWVudC5VUkwuaW5kZXhPZiggJ2h0dHA6Ly9sb2NhbGhvc3QnKSAhPT0gLTEpICYmXG4gICAgICAgICAgICAod2luZG93Lmhhc093blByb3BlcnR5KCdjb3Jkb3ZhJykpICYmXG4gICAgICAgICAgICAodGhpcy5wbGF0Zm9ybVNlcnZpY2UuaXMoJ2lvcycpIHx8IHRoaXMucGxhdGZvcm1TZXJ2aWNlLmlzKCdhbmRyb2lkJykgKVxuICAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSAgICAgICAgIFxuICAgIH1cbn1cbiJdfQ==