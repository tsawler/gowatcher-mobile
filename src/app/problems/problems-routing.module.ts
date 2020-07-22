import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProblemPage} from './problem-page.component';

const routes: Routes = [
    {
        path: '',
        component: ProblemPage,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProblemsPageRoutingModule {
}
