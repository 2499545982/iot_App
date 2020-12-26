import { Component } from '@angular/core';
import { FormBuilder,AbstractControl,FormGroup } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { HTTPService } from '../Service/HTTPService.service';
@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page
{
    device: any[];
    time: any;
    DeviceName: string;
    constructor(private http: HTTPService,private fb: FormBuilder,public alertController: AlertController)
    {
        this.get_device('');
        this.time = setInterval(() =>
        {
            this.http.post('device/getdevice',{}).then(res =>
            {
                // console.log(res);
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
    getItems(searchbar: any)
    {
        this.DeviceName = searchbar.target.value;
        // console.log(searchbar.target.value);
    }
    async presentAlertPrompt()
    {
        const alert = await this.alertController.create({
            // header: 'Prompt!',
            inputs: [
                {
                    name: 'DeviceName',
                    type: 'text',
                    value: '',
                    placeholder: '设备名'
                },
                {
                    name: 'type',
                    type: 'text',
                    value: '',
                    placeholder: '设备类型'
                },
                {
                    name: 'Specific_location',
                    type: 'text',
                    value: '',
                    placeholder: '具体位置'
                },
                {
                    name: 'Device_Function',
                    type: 'text',
                    value: '',
                    placeholder: '设备功能'
                },
                {
                    name: 'Remarks',
                    type: 'text',
                    value: '',
                    placeholder: '备注'
                }
            ],
            buttons: [
                {
                    text: '修改',
                    // role: 'cancel',
                    cssClass: 'secondary',
                    handler: (obj) =>
                    {
                        this.send('device/update',obj);
                        console.log(obj);
                    }
                },
                {
                    text: '添加',
                    handler: (obj) =>
                    {    //获取表单输入的值
                        this.send('device/create',obj);
                        console.log(obj);
                    }
                }
            ]
        });
        await alert.present();
    }
    delete()
    {
        if (this.DeviceName != '' && this.DeviceName != null)
            this.send('device/delete',{ DeviceName: this.DeviceName });
    }
    chaxun()
    {
        if (this.DeviceName != '' && this.DeviceName != null)
            this.get_device(this.DeviceName);
    }
    send(url: string,obj: any)
    {
        this.http.post(url,obj).then((data) =>
        {
            this.tishi(data.data);
            this.flush();
        }).catch((err) =>
        {
            console.error(err);
        });
    }
    get_device(name: string): void
    {
        console.log(name);
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
                else this.tishi(res.data);
            }).catch(err =>
            {
                console.log(err);
            });
    }
    async tishi(s: string)
    {
        const alert = await this.alertController.create({
            cssClass: "oneBtn",
            message: s,
            buttons: [{
                text: '确定',
                handler: () =>
                {
                }
            }]
        });
        await alert.present();
    }
    flush()
    {
        this.get_device('');
    }
}
