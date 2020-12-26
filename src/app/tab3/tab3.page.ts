import { Component } from '@angular/core';
import { AbstractControl,FormBuilder,FormGroup } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { HTTPService } from '../Service/HTTPService.service';
@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page
{
    static username: any;
    name: string = Tab3Page.username;
    phone: string = '';
    number: AbstractControl;
    ps: AbstractControl;
    myForm: FormGroup;
    constructor(public toastController: ToastController,private http: HTTPService,private fb: FormBuilder)
    {
        this.myForm = this.fb.group({
            'phone': [''],
            'password': ['']
        });
        this.ps = this.myForm.controls['password'];
        this.number = this.myForm.controls['phone'];
        this.flush();
    }
    update()
    {
        var obj: any = {
            username: Tab3Page.username
        };
        if (this.ps.value)
            obj.password = this.ps.value;
        if (this.number.value)
            obj.phone = this.number.value;
        if (this.number || this.ps)
            this.http.post('user/change',obj).then((result) =>
            {
                if (result.flag)
                    this.presentToast(result.data);
                else this.presentToast(result.data);
            }).catch((err) => { console.log(err); });
        else
            console.log(123213);
        console.log(obj);

        this.flush();
    }
    async presentToast(s: string)
    {
        const toast = await this.toastController.create({
            message: s,
            duration: 2000
        });
        toast.present();
        this.flush();
    }
    flush()
    {
        this.http.post('user/getuser',{ username: Tab3Page.username }).then((result) =>
        {
            console.log(result);
            if (Tab3Page.username != undefined)
            {
                this.name = Tab3Page.username;
                this.phone = result.data.phone;
            }
        }).catch((err) =>
        {
        });
    }
}
