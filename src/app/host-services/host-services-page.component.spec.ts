import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {HostServicesPage} from './host-services-page.component';

describe('Tab3Page', () => {
    let component: HostServicesPage;
    let fixture: ComponentFixture<HostServicesPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HostServicesPage],
            imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
        }).compileComponents();

        fixture = TestBed.createComponent(HostServicesPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
