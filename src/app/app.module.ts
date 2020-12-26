import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ModalModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    providers: [
        QRScanner,
        StatusBar,
        InAppBrowser,
        SplashScreen,
        { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
