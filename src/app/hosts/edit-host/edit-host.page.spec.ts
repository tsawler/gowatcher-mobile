import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {EditHostPage} from './edit-host.page';

describe('EditHostPage', () => {
    let component: EditHostPage;
    let fixture: ComponentFixture<EditHostPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditHostPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(EditHostPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
