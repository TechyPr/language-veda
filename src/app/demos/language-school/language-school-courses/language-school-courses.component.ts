import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-language-school-courses',
    imports: [RouterLink, CarouselModule],
    templateUrl: './language-school-courses.component.html',
    styleUrls: ['./language-school-courses.component.scss']
})
export class LanguageSchoolCoursesComponent {
    coursesSlides: OwlOptions = {
            loop: true,
            nav: true,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: [
                "<i class='flaticon-chevron'></i>",
                "<i class='flaticon-right-arrow'></i>"
            ],
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }
}