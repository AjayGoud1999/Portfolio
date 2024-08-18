import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Real Variable',
      Title: 'Software Engineer',
      Date: 'May 2021 – Dec 2022',
      Description: [
        'Developed and optimized interactive web applications using React and Angular, leading to a 30% reduction in page load times and a 25% increase in user engagement',
        'Developed and maintained service-oriented architectures using Node.js and Express.js, increasing API performance by 20% and ensuring 99.9% uptime',
        'Developed responsive web applications using React, CSS frameworks (Bootstrap), and media queries, achieving a 40% increase in mobile user satisfaction and a 35% reduction in bounce rates',
        'Utilized Angular services and RxJS to manage application state and handle asynchronous data streams, resulting in a 30% improvement in application responsiveness and a 25% reduction in data fetching times',
        'Developed dynamic dashboards using FusionCharts with Angular, enabling real-time data updates and interactive features like drill-downs, filters, and tooltips to facilitate comprehensive data analysis and decision-making',
        'Implemented React’s virtual DOM to efficiently update and render components, resulting in improved application performance and user responsiveness',
        'Collaborated with the UX/UI team to translate design mockups into functional React components, achieving a high level of fidelity between designs and implemented features, resulting in a 30% increase in user satisfaction scores',
        'Implemented state management using Redux, integrating actions, reducers, and the Redux store to manage complex application states efficiently and ensure predictable data flow across React components'

      ]
    },


    {
      Tab: 'Freetime Hospitality',
      Title: 'Software Engineer',
      Date: 'Mar 2020 – Apr 2021',
      Description: [
        'Designed and developed scalable, maintainable frontend architectures for large-scale applications using React, ensuring efficient state management and seamless API integration, resulting in a 30% reduction in development time and a 20% improvement in user satisfaction',
        'Applied in-depth knowledge of modern web technologies and architecture, including HTTP, REST, and related protocols, to design and implement robust web solutions, which increased application performance by 25%',
        'Extensive experience working with and implementing backend APIs using Node.js, following RESTful principles to ensure efficient, reliable communication between client and server, leading to a 20% reduction in server response times',
        'Collaborated within agile scrum methodologies to deliver projects on time within budget',
        'Utilized Redux for state management in React applications, effectively managing complex application states and reducing state-related bugs by 25%, while ensuring predictable data flow and enhanced application performance',
        'Designed and implemented reusable React components for dynamic dashboards, enhancing code maintainability and reducing development time by 30%',
        'Optimized website performance through techniques such as lazy loading, code splitting, and image optimization, achieving significant improvements in page load times and overall performance metrics',
'Utilized Jenkins for Continuous Integration (CI) and Continuous Deployment (CD), streamlining code deployment processes and ensuring seamless integration of changes into the software development lifecycle'


      ]
    },




    {
      Tab: 'Azure Skynet',
      Title: 'Software Engineer Intern',
      Date: 'Aug 2019 – Jan 2020',
      Description: [
        'Designed and implemented scalable, maintainable frontend architectures for complex applications, ensuring efficient performance and seamless integration with backend services',
        'Designed and implemented RESTful APIs to enable seamless communication between frontend and backend systems, supporting various functionalities and data exchanges',
        'Implemented client-side form validation using JavaScript, ensuring real-time user input verification for improved user experience and reduced server-side processing',
        'Developed an application that gathers data from MongoDB a NoSQL database and filter it as per requirements'

      ]
    },
  






  ];
  active = 0

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
