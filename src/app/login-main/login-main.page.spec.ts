import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginMainPage } from './login-main.page';

describe('LoginMainPage', () => {
  let component: LoginMainPage;
  let fixture: ComponentFixture<LoginMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
