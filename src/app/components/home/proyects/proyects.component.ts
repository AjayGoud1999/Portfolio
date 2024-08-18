import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  Projects = [

    {
      
      imgs:[
        '../../../../assets/images/Fitpro/1.jpg',
        ],
      Title:'FitPro Fitness Application',
      Description:`FitPro is your ultimate companion for achieving fitness excellence. With its robust set of 
      features and intuitive design, FitPro empowers users to explore, engage, and excel in their fitness goals. 
      Whether you’re a beginner or an advanced athlete. 
      With FitPro, your path to fitness success is just a few clicks away.`,
      Technologies:['React','NodeJS','Express', 'JavaScript','MongoDB Atlas','CSS','Bootstrap'],
      ghLink:'https://github.com/AjayGoud1999/FitPro/tree/frontend',
      demoLink:'https://infinity-fitpro.netlify.app/'
    },
    
    {
      imgs:[
        '../../../../assets/images/todo-app/1.jpg',
      ],
      Title:'Dynamic Todo App',
      Description:'Users can add, edit, delete, and prioritize tasks. Each task typically contains a title, description, due date, and status. The app allows users to reorder tasks by dragging and dropping them into different categories or positions, making it easy to organize and prioritize tasks.',
      Technologies:['Angular','SCSS','Angular-Material' , 'RxJS'],
      ghLink:'https://github.com/AjayGoud1999/Todo-App',
      demoLink:'https://todomanageapplication.netlify.app/'
    },
  
    {
      imgs:[
      
        '../../../../assets/images/travelsite.jpg',
   
      ],
      Title:'Travellers Site',
      Description:`Integrated a system to determine if selected destinations can be visited based on the user's budget.
 Provided real- time cost estimates to help users make informed travel decisions.`,
      Technologies:['React','NodeJS','JavaScript' , 'MongoDB','CSS','Bootstrap'],
      ghLink:'https://github.com/AjayGoud1999/Travellers/tree/master',
      demoLink:''
    },


    {
      
      imgs:[
        '../../../../assets/images/netflixai1.png'

        ],
      Title:'Netflix AI',
      Description:`Netflix AI offers personalized movie and TV show recommendations using OpenAI's technology. It features a responsive React interface and integrates Redux for state management. The project utilizes the OpenAI API for content suggestions and the TMDB API for movie and TV show data.`,
      Technologies:['React','Redux','CSS','OpenAI API','TMDB API', 'Firebase'],
      ghLink:'https://github.com/AjayGoud1999/NetflixAI',
      demoLink:''
    },
 
  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
