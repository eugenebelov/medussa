import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RestorePasswordPage } from './restore-password.page';

describe('RestorePasswordPage', () => {
  let component: RestorePasswordPage;
  let fixture: ComponentFixture<RestorePasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorePasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RestorePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
