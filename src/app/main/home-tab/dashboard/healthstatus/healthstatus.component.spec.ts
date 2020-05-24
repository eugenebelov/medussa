import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HealthstatusComponent } from './healthstatus.component';

describe('HealthstatusComponent', () => {
  let component: HealthstatusComponent;
  let fixture: ComponentFixture<HealthstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthstatusComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HealthstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
