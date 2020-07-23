import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HostServicePage } from './host-service.page';

describe('HostServicePage', () => {
  let component: HostServicePage;
  let fixture: ComponentFixture<HostServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HostServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
