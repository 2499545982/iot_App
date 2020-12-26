import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginMainPage } from './login-main.page';

const routes: Routes = [
    {
        path: 'login-main',
        component: LoginMainPage,
        children: [
            {
                path: 'login',
                loadChildren: () => import('../login/login.module').then(m => m.LoginPageModule)
            },
            {
                path: 'regeist',
                loadChildren: () => import('../regeist/regeist.module').then(m => m.RegeistPageModule)
            },
            {
                path: '',
                redirectTo: '/login-main',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/login-main',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginMainPageRoutingModule { }
