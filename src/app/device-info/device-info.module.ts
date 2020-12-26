import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeviceInfoPageRoutingModule } from './device-info-routing.module';

import { DeviceInfoPage } from './device-info.page';
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';
import { Sensors } from '@ionic-native/sensors/ngx';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DeviceInfoPageRoutingModule,
        NgxEchartsModule,
        NgxEchartsModule.forRoot({
            echarts,
        }),
    ],
    declarations: [DeviceInfoPage],
    providers:[Sensors]
})
export class DeviceInfoPageModule { }
