import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditHostServicePage } from './edit-host-service.page';

describe('EditHostServicePage', () => {
  let component: EditHostServicePage;
  let fixture: ComponentFixture<EditHostServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHostServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditHostServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
