import {Component} from '@angular/core';
import {ProblemModel} from './problem.model';
import {ProblemsService} from './problems.service';

@Component({
    selector: 'app-problems-component',
    templateUrl: 'problem-page.component.html',
    styleUrls: ['problem-page.component.scss']
})
export class ProblemPage {

    private problems: ProblemModel[];

    constructor(private problemService: ProblemsService) {
    }

    ionViewWillEnter() {
        this.problems = this.problemService.getAllProblems();
    }

    doRefresh(event) {
        console.log('refreshing problems');
        setTimeout(() => {
            console.log('Async operation has ended');
            event.target.complete();
        }, 2000);
    }
}
