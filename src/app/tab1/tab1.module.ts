import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Sensors,TYPE_SENSOR } from "@ionic-native/sensors/ngx";
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        // ExploreContainerComponentModule,
        Tab1PageRoutingModule
    ],
    declarations: [Tab1Page],
    providers: [Sensors]
})
export class Tab1PageModule {}
