import {Component} from '@angular/core';
import {ProblemModel} from './problem.model';
import {ProblemServiceService} from './problem-service.service';

@Component({
    selector: 'problems-component',
    templateUrl: 'problem-page.component.html',
    styleUrls: ['problem-page.component.scss']
})
export class ProblemPage {

    private problems: ProblemModel[];

    constructor(private problemService: ProblemServiceService) {
    }

    ionViewWillEnter() {
        this.problems = this.problemService.getAllProblems();
    }
}
