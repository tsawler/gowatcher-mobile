import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddHostServicePage } from './add-host-service.page';

describe('AddHostServicePage', () => {
  let component: AddHostServicePage;
  let fixture: ComponentFixture<AddHostServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHostServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddHostServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
