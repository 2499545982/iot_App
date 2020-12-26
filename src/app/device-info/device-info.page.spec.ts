import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeviceInfoPage } from './device-info.page';

describe('DeviceInfoPage', () => {
  let component: DeviceInfoPage;
  let fixture: ComponentFixture<DeviceInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeviceInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
