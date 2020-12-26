import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EChartsOption } from 'echarts';
import { AppComponent } from '../app.component';
import { HTTPService } from '../Service/HTTPService.service';

@Component({
    selector: 'app-device-info',
    templateUrl: './device-info.page.html',
    styleUrls: ['./device-info.page.scss'],
})
export class DeviceInfoPage implements OnInit,OnDestroy
{
    flag: boolean = null;
    info: any;
    public DeviceName: string;
    title = 'back';
    time: any;
    button: string;
    img: string = '';
    chartOption: EChartsOption = {
        xAxis: {
            type: 'category',
            data: [],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [],
                type: 'line',
            },
        ],
    };
    B()
    {
        if (this.button == '开')
        {
            this.http.post('device/setdevice',{ DeviceName: this.DeviceName,data: '1' }).then(res =>
            {
                if (res.flag)
                {
                    this.button = '关';
                    this.img = '../../assets/close.svg';
                }
                this.get_device_info();
            }).catch(err => { this.flag = false; console.log(err); });
        }
        else this.http.post('device/setdevice',{ DeviceName: this.DeviceName,data: '0' }).then(res =>
        {
            if (res.flag)
            {
                this.button = '开';
                this.img = '../../assets/open.svg';
            }
            this.get_device_info();
        }).catch(err => { this.flag = false; console.log(err); });
    }
    constructor(public http: HTTPService,public route: ActivatedRoute)
    {
        this.route.params.subscribe((res) =>
        {
            // console.log(res);
            this.DeviceName = res.name;
            if (this.DeviceName == '' || this.DeviceName == undefined || this.DeviceName == null) this.flag = false;
            else
            {
                this.http.post('device/getdevice',{ DeviceName: this.DeviceName }).then(res =>
                {
                    if (res.data.length == 0) this.flag = false;
                    else
                    {
                        console.log(this.info = res.data[0]);
                        if (this.info.status == 'online') this.button = '关';
                        else this.button = '开';
                        this.flag = true;
                        console.log(this.DeviceName);
                        this.get_device_info();
                        this.get_data(10);
                    }
                }).catch(err => { this.flag = false; console.log(err); });
            }
        });
        this.time = setInterval(() =>
        {
            this.get_device_info();
            this.get_data(10);
        },1000);
    }
    get_device_info(): void
    {
        this.http.post('device/getdevice',{ DeviceName: this.DeviceName }).then(res =>
        {
            // console.log(
            this.info = res.data[0];
            // );
            if (this.info.status == 'online')
            {
                this.button = '关';
                this.img = '../../assets/open.svg';
            }
            else
            {
                this.button = '开';
                this.img = '../../assets/close.svg';
            }
        }).catch(err =>
        {
            console.log(err);
        });
    }
    get_data(i: number): void
    {
        this.http.post('device/getdata',{ DeviceName: this.DeviceName,limit: i }).then(res =>
        {
            this.info.data = res.data;
            // console.log(this.info);
            this.chartOption = {
                xAxis: {
                    type: 'category',
                    data: res.data.time.reverse(),
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        data: res.data.value.reverse(),
                        type: 'line',
                        smooth: true,
                    },
                ],
            };
            // this.chartOption.series[0].data = res.data.value;
            // this.chartOption.xAxis.data = res.data.time;
        }).catch(err =>
        {
            console.log(err);
        });
    }
    ngOnInit(): void
    {
    }
    ngOnDestroy()
    {
        if (this.time != null) clearInterval(this.time);
    }
}
