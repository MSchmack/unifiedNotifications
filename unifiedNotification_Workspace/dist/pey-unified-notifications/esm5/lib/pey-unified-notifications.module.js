/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PeyUnifiedNotificationsComponent } from './pey-unified-notifications.component';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';
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
export { PeyUnifiedNotificationsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV5LXVuaWZpZWQtbm90aWZpY2F0aW9ucy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9wZXktdW5pZmllZC1ub3RpZmljYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3BleS11bmlmaWVkLW5vdGlmaWNhdGlvbnMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUN6RixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3REO0lBQUE7SUFVOEMsQ0FBQzs7Z0JBVjlDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDaEQsT0FBTyxFQUFFLEVBQ1I7b0JBQ0QsT0FBTyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7b0JBQzNDLFNBQVMsRUFBRTt3QkFDVCxPQUFPO3dCQUNQLFFBQVE7cUJBQ1Q7aUJBQ0Y7O0lBQzZDLG9DQUFDO0NBQUEsQUFWL0MsSUFVK0M7U0FBbEMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBleVVuaWZpZWROb3RpZmljYXRpb25zQ29tcG9uZW50IH0gZnJvbSAnLi9wZXktdW5pZmllZC1ub3RpZmljYXRpb25zLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEaWFsb2dzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9kaWFsb2dzL25neCc7XG5pbXBvcnQgeyBGaXJlYmFzZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZmlyZWJhc2Uvbmd4JztcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtQZXlVbmlmaWVkTm90aWZpY2F0aW9uc0NvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZXhwb3J0czogW1BleVVuaWZpZWROb3RpZmljYXRpb25zQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgRGlhbG9ncyxcbiAgICBGaXJlYmFzZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFBleVVuaWZpZWROb3RpZmljYXRpb25zTW9kdWxlIHsgIH1cbiAgLy8gICBzdGF0aWMgZm9yUm9vdChjb25maWc6IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAvLyAgIGNvbnNvbGUubG9nKGNvbmZpZyk7IC8vIHByaW50czogIGB7a2V5OiAnZm9vYmFyJ31gXG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIG5nTW9kdWxlOiBQZXlVbmlmaWVkTm90aWZpY2F0aW9uc01vZHVsZVxuICAvLyAgIH07XG4gIC8vIH1cbi8vIGV4cG9ydCBjbGFzcyBDb3JlTW9kdWxlIHtcbi8vICAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbi8vICAgICBjb25zb2xlLmxvZyhjb25maWcpOyAvLyBwcmludHM6ICBge2tleTogJ2Zvb2Jhcid9YFxuLy8gICAgIHJldHVybiB7XG4vLyAgICAgICBuZ01vZHVsZTogQ29yZU1vZHVsZSxcbi8vICAgICAgIHByb3ZpZGVyczogW1xuLy8gICAgICAgICB7cHJvdmlkZTogTElCX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZ30gLy8gSWYgSSBoYXJkIGNvZGUgYHVzZVZhbHVlOiB7a2V5OiAnRm9vQmFyJ31gLCBpbnN0ZWFkIG9mIHVzaW5nIGBjb25maWdgIGl0IHdvcmtzLi4uIHdlaXJkLlxuLy8gICAgICAgXSxcbi8vICAgICB9O1xuLy8gICB9XG4vLyB9Il19