import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {AddHostPage} from './add-host.page';

describe('AddHostPage', () => {
    let component: AddHostPage;
    let fixture: ComponentFixture<AddHostPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddHostPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(AddHostPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
