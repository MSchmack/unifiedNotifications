import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { Platform } from '@ionic/angular';
var PeyUnifiedNotificationsService = /** @class */ (function () {
    function PeyUnifiedNotificationsService() {
    }
    PeyUnifiedNotificationsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ PeyUnifiedNotificationsService.ngInjectableDef = defineInjectable({ factory: function PeyUnifiedNotificationsService_Factory() { return new PeyUnifiedNotificationsService(); }, token: PeyUnifiedNotificationsService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [PeyUnifiedNotificationsComponent],
                    imports: [],
                    exports: [PeyUnifiedNotificationsComponent],
                    providers: [
                        Dialogs,
                        Firebase
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

export { PeyUnifiedNotificationsService, PeyUnifiedNotificationsComponent, PeyUnifiedNotificationsModule };

//# sourceMappingURL=pey-unified-notifications.js.map