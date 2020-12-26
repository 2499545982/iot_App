import { Component,OnInit,OnDestroy } from '@angular/core';
import { HTTPService } from '../Service/HTTPService.service';
@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit,OnDestroy
{
    device: any[];
    map: Map<string,string>;
    time: any;
    date: Date;
    mapp: Map<number,string>;

    constructor(private http: HTTPService)
    {
        this.date = new Date();
        this.mapp = new Map();
        this.mapp.set(1,'一');
        this.mapp.set(2,'二');
        this.mapp.set(3,'三');
        this.mapp.set(4,'四');
        this.mapp.set(5,'五');
        this.mapp.set(6,'六');
        this.mapp.set(0,'日');
        this.map = new Map();
        this.map.set('Electricity_Tap','../../assets/electricity.svg');
        this.map.set('Sun_Fan','../../assets/sun.svg');
        this.map.set('Water_Fan','../../assets/water.svg');
        this.map.set('Air_Humidity','../../assets/Humidity.svg');
        this.map.set('Soil_Humidity','../../assets/Humidity.svg');
        this.map.set('Air_Temperature','../../assets/temperature.svg');
        this.get_device('');
        this.time = setInterval(() =>
        {
            this.http.post('device/getdevice',{}).then(res =>
            {
                for (var j of res.data)
                {
                    for (var i of this.device)
                        if (i.DeviceName == j.DeviceName)
                        {
                            i.status = j.status;
                            break;
                        }
                }
            }).catch(err =>
            {
                console.log(err);
            });
        },1000);
    }
    ngOnDestroy(): void
    {
        clearInterval(this.time);
        // this.delete();
    }
    ngOnInit(): void
    {
    }
    get_device(name: string): void
    {
        if (name == '')
            this.http.post('device/getdevice',{}).then(res =>
            {
                console.log(res);
                this.device = res.data;
            }).catch(err =>
            {
                console.log(err);
            });
        else
            this.http.post('device/getdevice',{ DeviceName: name }).then(res =>
            {
                console.log(res);
                if (res.flag)
                    this.device = res.data;
                else alert(res.data);
            }).catch(err =>
            {
                console.log(err);
            });
    }
}

