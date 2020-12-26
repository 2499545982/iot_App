import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
    {
        path: '',
        component: Tab1Page,
    },
    {
        path: 'device-info/:name',
        loadChildren: () => import('../device-info/device-info.module').then(m => m.DeviceInfoPageModule)
    },
    {
        path: 'device-info',
        loadChildren: () => import('../device-info/device-info.module').then(m => m.DeviceInfoPageModule)
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
