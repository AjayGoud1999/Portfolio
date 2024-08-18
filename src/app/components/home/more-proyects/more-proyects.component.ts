import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-more-proyects',
  templateUrl: './more-proyects.component.html',
  styleUrls: ['./more-proyects.component.scss']
})
export class MoreProyectsComponent implements OnInit {
  Projects = [
    {
     
      Title:'Quizz App',
      Description:'The Simple Quiz App is a user-friendly and straightforward application designed to offer a fun and interactive quiz experience. the quiz consists of multiple-choice questions, and users can select their answers from the provided options.',
      Technologies:['HTML','CSS','JavaScript' , 'JQuery'],
      ghLink:'https://github.com/AjayGoud1999/QuizApp',
      demoLink:'https://quizapp-genius.netlify.app/'
    },


    {
     
      Title:'StoreOps',
      Description:'This is a storefront management application. It helps you to manage your inventory by adding a Product listing and deleting a Product listing. It also include uploading images of product and can also give rating to that product.',
      Technologies:['Angular','Node.js','HTML','CSS','Bootstrap'],
      ghLink:'https://github.com/AjayGoud1999/StoreOps/tree/StoreOps',
      demoLink:''
    },

    {
     
      Title:'Typing Speed Test',
      Description:"The application measures the number of words or characters typed per minute to determine the user's typing speed. In addition to speed, the test evaluates typing accuracy by calculating the number of errors made during the typing exercise",
      Technologies:['HTML','CSS','JavaScript','Animation'],
      ghLink:'https://github.com/AjayGoud1999/Typing-Speed-Test',
      demoLink:'https://typing-speed-test-appication.netlify.app/'
    },

  ]
  constructor(
    private router: Router,
    public analyticsService: AnalyticsService
    ) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0)
        });
    }
    redirect(route: string, event) {
      const id = event.target.id;
      if(id=='demoLink' || id=='ghLink'){
        return
      }
      window.open(route, '_blank');
    }

}
