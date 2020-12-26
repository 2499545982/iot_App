import { NgModule } from '@angular/core';
import { PreloadAllModules,RouterModule,Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./login-main/login-main.module').then(m => m.LoginMainPageModule)
    },
    {
        path: 'login-main',
        loadChildren: () => import('./login-main/login-main.module').then(m => m.LoginMainPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'regeist',
        loadChildren: () => import('./regeist/regeist.module').then(m => m.RegeistPageModule)
    },
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'device-info',
        loadChildren: () => import('./device-info/device-info.module').then(m => m.DeviceInfoPageModule)
    },
    {
        path: 'device-info/:name',
        loadChildren: () => import('./device-info/device-info.module').then(m => m.DeviceInfoPageModule)
    },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
