import { Component } from '@angular/core';
import { LanguageSchoolBannerComponent } from './language-school-banner/language-school-banner.component';
import { LanguageSchoolCoursesComponent } from './language-school-courses/language-school-courses.component';
import { LanguageSchoolAboutComponent } from './language-school-about/language-school-about.component';
import { FunfactsStyleOneComponent } from '../../common/funfacts-style-one/funfacts-style-one.component';
import { HowToApplyComponent } from '../../common/how-to-apply/how-to-apply.component';
import { FreeTrialComponent } from '../../common/free-trial/free-trial.component';
import { KindergartenServicesComponent } from '../kindergarten/kindergarten-services/kindergarten-services.component';

@Component({
    selector: 'app-language-school',
    imports: [LanguageSchoolBannerComponent, LanguageSchoolCoursesComponent, LanguageSchoolAboutComponent, FunfactsStyleOneComponent, HowToApplyComponent, FreeTrialComponent, KindergartenServicesComponent],
    templateUrl: './language-school.component.html',
    styleUrls: ['./language-school.component.scss']
})
export class LanguageSchoolComponent {}