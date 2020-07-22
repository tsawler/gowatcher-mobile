import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {ProblemPage} from './problem-page.component';

describe('Tab1Page', () => {
    let component: ProblemPage;
    let fixture: ComponentFixture<ProblemPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProblemPage],
            imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ProblemPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
