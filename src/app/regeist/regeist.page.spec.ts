import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegeistPage } from './regeist.page';

describe('RegeistPage', () => {
  let component: RegeistPage;
  let fixture: ComponentFixture<RegeistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegeistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegeistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
