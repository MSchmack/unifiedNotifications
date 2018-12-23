import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { Platform } from '@ionic/angular';
class PeyUnifiedNotificationsService {
}
PeyUnifiedNotificationsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ PeyUnifiedNotificationsService.ngInjectableDef = defineInjectable({ factory: function PeyUnifiedNotificationsService_Factory() { return new PeyUnifiedNotificationsService(); }, token: PeyUnifiedNotificationsService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { Dialogs } from '@ionic-native/dialogs/ngx';
class PeyUnifiedNotificationsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PeyUnifiedNotificationsComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-pey-unified-notifications',
                template: `
    <p>
      pey-unified-notifications works!
    </p>
  `
            }] }
];
/** @nocollapse */
PeyUnifiedNotificationsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PeyUnifiedNotificationsModule {
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