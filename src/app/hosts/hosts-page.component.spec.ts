import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {HostsPage} from './hosts-page.component';

describe('Tab2Page', () => {
    let component: HostsPage;
    let fixture: ComponentFixture<HostsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HostsPage],
            imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
        }).compileComponents();

        fixture = TestBed.createComponent(HostsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
