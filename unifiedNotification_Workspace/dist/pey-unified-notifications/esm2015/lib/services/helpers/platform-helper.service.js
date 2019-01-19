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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0taGVscGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wZXktdW5pZmllZC1ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL2hlbHBlcnMvcGxhdGZvcm0taGVscGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLMUMsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUU5QixZQUFvQixlQUF5QjtRQUF6QixvQkFBZSxHQUFmLGVBQWUsQ0FBVTtJQUFJLENBQUM7Ozs7SUFFbEQsSUFBSSxRQUFRO1FBQ1IscURBQXFEO1FBQ3JELDRDQUE0QztRQUM1QyxlQUFlO1FBQ2YsK0NBQStDO1FBQy9DO1FBQ0ksd0RBQXdEO1FBQ3hELGtEQUFrRDtRQUNsRCxnREFBZ0Q7UUFDaEQsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDO2VBQy9CLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUN0RCwyQ0FBMkM7UUFDM0MsNENBQTRDO1FBQzVDLHVGQUF1RjtRQUN2RixLQUFLO1FBQ0wsd0NBQXdDO1FBQ3hDLDBFQUEwRTtVQUMzRTtZQUNDLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7YUFBTTtZQUNILE9BQU8sS0FBSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQzs7O1lBN0JKLFVBQVUsU0FBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQjs7OztZQUpRLFFBQVE7Ozs7Ozs7O0lBT0QsZ0RBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtSGVscGVyU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBsYXRmb3JtU2VydmljZTogUGxhdGZvcm0pIHsgfVxuXG4gICAgZ2V0IGlzTmF0aXZlKCk6IGJvb2xlYW4ge1xuICAgICAgICAvL2lmIGh0dHA6Ly9sb2NhbCBsaWtlIGluIHByb2QgYnVpbGQgJiBpb3Mgb3IgYW5kcm9pZFxuICAgICAgICAvLyBzb2x1dGlvbiB0aWxsIHBsYXRmb3JtLmlzKCdtb2JpbGUnKSBmaXhlZFxuICAgICAgICAvLyByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gZG9jdW1lbnQuVVJMLnN0YXJ0c1dpdGgoJ2h0dHA6Ly9sb2NhbGhvc3Q6JylcbiAgICAgICAgaWYoXG4gICAgICAgICAgICAvLyAoZG9jdW1lbnQuVVJMLmluZGV4T2YoICdodHRwOi8vbG9jYWxob3N0JykgIT09IC0xKSAmJlxuICAgICAgICAgICAgLy8gKGRvY3VtZW50LlVSTC5pbmRleE9mKCdsb2NhbGhvc3Q6ODA4MCcpID4gLTEgKSBcbiAgICAgICAgICAgIC8vIGRvY3VtZW50LlVSTC5zdGFydHNXaXRoKCdodHRwOi8vbG9jYWxob3N0OjgnKVxuICAgICAgICAgICAgZG9jdW1lbnQuVVJMLnN0YXJ0c1dpdGgoJ2h0dHA6Ly8nKVxuICAgICAgICAgICAgJiYgKCEoZG9jdW1lbnQuVVJMLnN0YXJ0c1dpdGgoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODEnKSkpXG4gICAgICAgICAgICAvLyB8fCAoZW52aXJvbm1lbnQucHJvZHVjdGlvbiA9PSBmYWxzZSAmJiAoXG4gICAgICAgICAgICAvLyAgICAgKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnY29yZG92YScpKSAmJlxuICAgICAgICAgICAgLy8gICAgICh0aGlzLnBsYXRmb3JtU2VydmljZS5pcygnaW9zJykgfHwgdGhpcy5wbGF0Zm9ybVNlcnZpY2UuaXMoJ2FuZHJvaWQnKSkgICAgICAgICAgXG4gICAgICAgICAgICAvLyApKVxuICAgICAgICAgICAgLy8gKHdpbmRvdy5oYXNPd25Qcm9wZXJ0eSgnY29yZG92YScpKSAmJlxuICAgICAgICAgICAgLy8gKHRoaXMucGxhdGZvcm1TZXJ2aWNlLmlzKCdpb3MnKSB8fCB0aGlzLnBsYXRmb3JtU2VydmljZS5pcygnYW5kcm9pZCcpIClcbiAgICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gICAgICAgICBcbiAgICB9XG59XG4iXX0=