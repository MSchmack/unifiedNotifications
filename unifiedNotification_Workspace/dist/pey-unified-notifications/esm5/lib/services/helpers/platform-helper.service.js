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
            // document.URL.startsWith('http://localhost:')
            if (
            // (document.URL.indexOf( 'http://localhost') !== -1) &&
            // (document.URL.indexOf('localhost:8080') > -1 ) 
            // document.URL.startsWith('http://localhost:8')
            document.URL.startsWith('http://')
                && (!(document.URL.startsWith('http://localhost:81')))
            // || (environment.production == false && (
            //     (window.hasOwnProperty('cordova')) &&
            //     (this.platformService.is('ios') || this.platformService.is('android'))          
            // ))
            // (window.hasOwnProperty('cordova')) &&
            // (this.platformService.is('ios') || this.platformService.is('android') )
            ) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0taGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wZXktdW5pZmllZC1ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2hlbHBlcnMvcGxhdGZvcm0taGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFMUM7SUFLSSwrQkFBb0IsZUFBeUI7UUFBekIsb0JBQWUsR0FBZixlQUFlLENBQVU7SUFBSSxDQUFDO0lBRWxELHNCQUFJLDJDQUFROzs7O1FBQVo7WUFDSSxxREFBcUQ7WUFDckQsNENBQTRDO1lBQzVDLGVBQWU7WUFDZiwrQ0FBK0M7WUFDL0M7WUFDSSx3REFBd0Q7WUFDeEQsa0RBQWtEO1lBQ2xELGdEQUFnRDtZQUNoRCxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7bUJBQy9CLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztZQUN0RCwyQ0FBMkM7WUFDM0MsNENBQTRDO1lBQzVDLHVGQUF1RjtZQUN2RixLQUFLO1lBQ0wsd0NBQXdDO1lBQ3hDLDBFQUEwRTtjQUMzRTtnQkFDQyxPQUFPLElBQUksQ0FBQzthQUNmO2lCQUFNO2dCQUNILE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQzs7O09BQUE7O2dCQTdCSixVQUFVLFNBQUM7b0JBQ1IsVUFBVSxFQUFFLE1BQU07aUJBQ3JCOzs7O2dCQUpRLFFBQVE7OztnQ0FIakI7Q0FtQ0MsQUE5QkQsSUE4QkM7U0EzQlkscUJBQXFCOzs7Ozs7SUFFbEIsZ0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtSGVscGVyU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm0pIHsgfVxuXG4gICAgZ2V0IGlzTmF0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICAvL2lmIGh0dHA6Ly9sb2NhbCBsaWtlIGluIHByb2QgYnVpbGQgJiBpb3Mgb3IgYW5kcm9pZFxuICAgICAgICAvLyBzb2x1dGlvbiB0aWxsIHBsYXRmb3JtLmlzKCdtb2JpbGUnKSBmaXhlZFxuICAgICAgICAvLyByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gZG9jdW1lbnQuVVJMLnN0YXJ0c1dpdGgoJ2h0dHA6Ly9sb2NhbGhvc3Q6JylcbiAgICAgICAgaWYoXG4gICAgICAgICAgICAvLyAoZG9jdW1lbnQuVVJMLmluZGV4T2YoICdodHRwOi8vbG9jYWxob3N0JykgIT09IC0xKSAmJlxuICAgICAgICAgICAgLy8gKGRvY3VtZW50LlVSTC5pbmRleE9mKCdsb2NhbGhvc3Q6ODA4MCcpID4gLTEgKSBcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LlVSTC5zdGFydHNXaXRoKCdodHRwOi8vbG9jYWxob3N0OjgnKVxuICAgICAgICAgICAgZG9jdW1lbnQuVVJMLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKVxuICAgICAgICAgICAgJiYgKCEoZG9jdW1lbnQuVVJMLnN0YXJ0c1dpdGgoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODEnKSkpXG4gICAgICAgICAgICAvLyB8fCAoZW52aXJvbm1lbnQucHJvZHVjdGlvbiA9PSBmYWxzZSAmJiAoXG4gICAgICAgICAgICAvLyAgICAgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnY29yZG92YScpKSAmJlxuICAgICAgICAgICAgLy8gICAgICh0aGlzLnBsYXRmb3JtU2VydmljZS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybVNlcnZpY2UuaXMoJ2FuZHJvaWQnKSkgICAgICAgICAgXG4gICAgICAgICAgICAvLyApKVxuICAgICAgICAgICAgLy8gKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnY29yZG92YScpKSAmJlxuICAgICAgICAgICAgLy8gKHRoaXMucGxhdGZvcm1TZXJ2aWNlLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtU2VydmljZS5pcygnYW5kcm9pZCcpIClcbiAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gICAgICAgICBcbiAgICB9XG59XG4iXX0=