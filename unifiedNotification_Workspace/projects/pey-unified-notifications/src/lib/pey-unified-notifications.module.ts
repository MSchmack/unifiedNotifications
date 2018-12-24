import { NgModule, ModuleWithProviders } from '@angular/core';
import { PeyUnifiedNotificationsComponent } from './pey-unified-notifications.component';
import { Dialogs } from '@ionic-native/dialogs/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';


@NgModule({
  declarations: [PeyUnifiedNotificationsComponent],
  imports: [
  ],
  exports: [PeyUnifiedNotificationsComponent],
  providers: [
    Dialogs,
    Firebase
  ]
})
export class PeyUnifiedNotificationsModule {  }