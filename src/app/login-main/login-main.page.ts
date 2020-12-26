import { Component,OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormGroup,FormBuilder,AbstractControl } from '@angular/forms';
import { HTTPService } from '../Service/HTTPService.service';
@Component({
    selector: 'app-login-main',
    templateUrl: './login-main.page.html',
    styleUrls: ['./login-main.page.scss'],
})
export class LoginMainPage implements OnInit
{
    modalRef: BsModalRef;
    app: AppComponent;
    disable: boolean;
    myForm: FormGroup;
    address: AbstractControl;
    constructor(private modalService: BsModalService,private router: Router,private fb: FormBuilder)
    {
        this.myForm = this.fb.group({
            'address': ['192.168.137.188'],//192.168.137.188 192.168.2.75
        });
        this.address = this.myForm.controls['address'];
        var url = 'http://127.0.0.1:3001/';
        HTTPService.url = url;
    }

    ngOnInit()
    {
    }
    openModal(template: TemplateRef<any>)
    {
        this.modalRef = this.modalService.show(template);
    }
    regeist()
    {
        this.modalRef.hide();
        this.router.navigate(['./regeist']);
    }
    default()
    {
        this.modalRef.hide();
        this.router.navigate(['']);
    }
    seturl()
    {
        var address = this.myForm.controls['address'].value;
        var url = 'http://' + address + ':3001/';
        HTTPService.url = url;
    }
}