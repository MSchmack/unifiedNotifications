(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic-native/dialogs/ngx'), require('@ionic-native/firebase/ngx')) :
    typeof define === 'function' && define.amd ? define('pey-unified-notifications', ['exports', '@angular/core', '@ionic-native/dialogs/ngx', '@ionic-native/firebase/ngx'], factory) :
    (factory((global['pey-unified-notifications'] = {}),global.ng.core,global.ngx,global.ngx$1));
}(this, (function (exports,i0,ngx,ngx$1) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { Platform } from '@ionic/angular';
    var PeyUnifiedNotificationsService = /** @class */ (function () {
        function PeyUnifiedNotificationsService() {
        }
        PeyUnifiedNotificationsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */ PeyUnifiedNotificationsService.ngInjectableDef = i0.defineInjectable({ factory: function PeyUnifiedNotificationsService_Factory() { return new PeyUnifiedNotificationsService(); }, token: PeyUnifiedNotificationsService, providedIn: "root" });
        return PeyUnifiedNotificationsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { Dialogs } from '@ionic-native/dialogs/ngx';
    var PeyUnifiedNotificationsComponent = /** @class */ (function () {
        function PeyUnifiedNotificationsComponent() {
        }
        /**
         * @return {?}
         */
        PeyUnifiedNotificationsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        PeyUnifiedNotificationsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-pey-unified-notifications',
                        template: "\n    <p>\n      pey-unified-notifications works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        PeyUnifiedNotificationsComponent.ctorParameters = function () { return []; };
        return PeyUnifiedNotificationsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PeyUnifiedNotificationsModule = /** @class */ (function () {
        function PeyUnifiedNotificationsModule() {
        }
        PeyUnifiedNotificationsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [PeyUnifiedNotificationsComponent],
                        imports: [],
                        exports: [PeyUnifiedNotificationsComponent],
                        providers: [
                            ngx.Dialogs,
                            ngx$1.Firebase
                        ]
                    },] }
        ];
        return PeyUnifiedNotificationsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.PeyUnifiedNotificationsService = PeyUnifiedNotificationsService;
    exports.PeyUnifiedNotificationsComponent = PeyUnifiedNotificationsComponent;
    exports.PeyUnifiedNotificationsModule = PeyUnifiedNotificationsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=pey-unified-notifications.umd.js.map