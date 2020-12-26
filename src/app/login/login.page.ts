import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,AbstractControl,Validators,Form,FormControl } from '@angular/forms';
import { HTTPService } from '../Service/HTTPService.service';
import { Tab3Page } from '../tab3/tab3.page';
@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{
    username: AbstractControl;
    password: AbstractControl;
    myForm: FormGroup;
    constructor(private http: HTTPService,private router: Router,private fb: FormBuilder)
    {
        this.myForm = this.fb.group({
            'username': ['hqq'],
            'password': ['woaihqq991207']
        });
        this.username = this.myForm.controls['username'];
        this.password = this.myForm.controls['password'];
    }
    ngOnInit()
    {
    }
    login(): void
    {
        console.log(this.myForm.value);
        this.http.post('user/authentication',this.myForm.value).then(
            (val: any) =>
            {
                console.log(val);
                if (val.flag)
                {
                    Tab3Page.username = this.username.value;
                    this.router.navigate(['../tabs']);
                }
                else
                {
                    alert('用户名或密码错误');
                }
            });
    }
}
