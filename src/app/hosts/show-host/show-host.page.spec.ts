import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {ShowHostPage} from './show-host.page';

describe('ShowHostPage', () => {
    let component: ShowHostPage;
    let fixture: ComponentFixture<ShowHostPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ShowHostPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();

        fixture = TestBed.createComponent(ShowHostPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
