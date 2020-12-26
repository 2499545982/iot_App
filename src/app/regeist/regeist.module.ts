import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegeistPageRoutingModule } from './regeist-routing.module';

import { RegeistPage } from './regeist.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RegeistPageRoutingModule
    ],
    declarations: [RegeistPage]
})
export class RegeistPageModule { }
