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
  //   static forRoot(config: any): ModuleWithProviders {
  //   console.log(config); // prints:  `{key: 'foobar'}`
  //   return {
  //     ngModule: PeyUnifiedNotificationsModule
  //   };
  // }
// export class CoreModule {
//   static forRoot(config: Config): ModuleWithProviders {
//     console.log(config); // prints:  `{key: 'foobar'}`
//     return {
//       ngModule: CoreModule,
//       providers: [
//         {provide: LIB_CONFIG, useValue: config} // If I hard code `useValue: {key: 'FooBar'}`, instead of using `config` it works... weird.
//       ],
//     };
//   }
// }