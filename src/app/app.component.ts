import { Component, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'nisarg-portfolio';
  careerStartDate: Date = new Date("2017-06-01");
  experience: number;
  displaySidebar: boolean = false;
  displayCard: boolean = false;

  skills: any = {
    'Backend': [
      {
        title: 'Laravel',
        imgSrc: 'assets/img/skills/backend/laravel.png',
      },
      {
        title: 'NodeJS',
        imgSrc: 'assets/img/skills/backend/nodejs.png',
      },
      {
        title: 'ExpressJS',
        imgSrc: 'assets/img/skills/backend/expressjs.png',
      },
      {
        title: 'PHP',
        imgSrc: 'assets/img/skills/backend/php.png',
      }
    ],
    'Frontend': [
      {
        title: 'Angular',
        imgSrc: 'assets/img/skills/frontend/angular.png',
      },
      {
        title: 'Javascript',
        imgSrc: 'assets/img/skills/frontend/javascript.png',
      },
      {
        title: 'Typescript',
        imgSrc: 'assets/img/skills/frontend/typescript.png',
      },
      {
        title: 'jQuery',
        imgSrc: 'assets/img/skills/frontend/jquery.png',
      },
      {
        title: 'AJAX',
        imgSrc: 'assets/img/skills/frontend/ajax.png',
      },
      {
        title: 'ECMAscript',
        imgSrc: 'assets/img/skills/frontend/ecmascript.png',
      }
    ],
    'Database': [
      {
        title: 'Mysql',
        imgSrc: 'assets/img/skills/database/mysql.png',
      },
      {
        title: 'MongoDB',
        imgSrc: 'assets/img/skills/database/mongodb.png',
      },
      {
        title: 'phpMyAdmin',
        imgSrc: 'assets/img/skills/database/phpmyadmin.png',
      },
      {
        title: 'Mongo Compass',
        imgSrc: 'assets/img/skills/database/compass.png',
      },
      {
        title: 'Mysql Workbench',
        imgSrc: 'assets/img/skills/database/workbench.png',
      },
      {
        title: 'Microsoft SQL Server',
        imgSrc: 'assets/img/skills/database/sqlserver.png',
      }
    ],
    'Cloud Spaces': [
      {
        title: 'AWS',
        imgSrc: 'assets/img/skills/cloud/aws.png',
      },
      {
        title: 'Azure',
        imgSrc: 'assets/img/skills/cloud/azure.png',
      },
      {
        title: 'Digital Ocean',
        imgSrc: 'assets/img/skills/cloud/digitalocean.png',
      },
      {
        title: 'Google Cloud',
        imgSrc: 'assets/img/skills/cloud/gcp.png',
      }
    ],
    'Programming languages': [
      {
        title: 'C',
        imgSrc: 'assets/img/skills/programming/c.png',
      },
      {
        title: 'Java',
        imgSrc: 'assets/img/skills/programming/java.png',
      },
      {
        title: 'C#',
        imgSrc: 'assets/img/skills/programming/csharp.png',
      }
    ],
    'Web Designing': [
      {
        title: 'HTML5',
        imgSrc: 'assets/img/skills/designing/html5.png',
      },
      {
        title: 'CSS3',
        imgSrc: 'assets/img/skills/designing/css3.png',
      },
      {
        title: 'Bootstrap 4',
        imgSrc: 'assets/img/skills/designing/bootstrap.png',
      },
      {
        title: 'Angular Material',
        imgSrc: 'assets/img/skills/designing/material.png',
      }
    ],
    'Repositories': [
      {
        title: 'Github',
        imgSrc: 'assets/img/skills/repositories/github.png',
      },
      {
        title: 'GitLab',
        imgSrc: 'assets/img/skills/repositories/gitlab.png',
      },
      {
        title: 'Bitbucket',
        imgSrc: 'assets/img/skills/repositories/bitbucket.png',
      },
      {
        title: 'SVN',
        imgSrc: 'assets/img/skills/repositories/svn.png',
      }
    ],
    'Other Services': [
      {
        title: 'JIRA',
        imgSrc: 'assets/img/skills/services/jira.png',
      },
      {
        title: 'GIT',
        imgSrc: 'assets/img/skills/services/git.png',
      },
      {
        title: 'SendGrid',
        imgSrc: 'assets/img/skills/services/sendgrid.png',
      },
      {
        title: 'Twilio',
        imgSrc: 'assets/img/skills/services/twilio.png',
      },
      {
        title: 'Redis',
        imgSrc: 'assets/img/skills/services/redis.png',
      },
      {
        title: 'Postman',
        imgSrc: 'assets/img/skills/services/postman.png',
      },
      {
        title: 'Trello',
        imgSrc: 'assets/img/skills/services/trello.png',
      },
      {
        title: 'Swagger UI',
        imgSrc: 'assets/img/skills/services/swagger.png',
      }
    ]
  }

  projects: any = [
    {
      title: 'Infinity Web Services',
      imgSrc: 'assets/img/projects/infinity.png',
      description: 'A sales website for Infinity web services and solutions.',
      technology: [
        'Angular 9',
        'Node JS',
        'MongoDB',
        'SMTP for email sending',
      ]
    },
    {
      title: 'Record Keeper',
      imgSrc: 'assets/img/projects/records.png',
      description: 'A web app similar to khata book for keeping records.',
      technology: [
        'Angular 9',
        'Node JS',
        'MongoDB',
        'Angular Material'
      ]
    },
    {
      title: 'Personal Blog',
      imgSrc: 'assets/img/projects/blog.png',
      description: 'A web app for blogging my personal content.',
      technology: [
        'Angular 9',
        'Node JS',
        'MongoDB',
        'Angular Material'
      ]
    },
    {
      title: 'Zevo Health',
      imgSrc: 'assets/img/projects/zevoHealth.png',
      description: 'Admin panel for a Health and Fitness app.',
      technology: [
        'Laravel 6',
        'php 7.2',
        'SMTP for email sending',
        'FCM for notifications',
        'Redis - Supervisor'
      ]
    },
    {
      title: 'Zevo Connect',
      imgSrc: 'assets/img/projects/zevoConnect.png',
      description: 'A web app for tracking wellbeing of employees.',
      technology: [
        'Laravel 5.6',
        'php 7.1',
        'SMTP for email sending',
        'Advanced JS for Dashboards',
      ]
    },
    {
      title: 'Kharidi',
      imgSrc: 'assets/img/projects/kharidi.png',
      description: 'A shopping cart with full flow from product listing, ordering, making payment.',
      technology: [
        'Laravel 5.5',
        'php 7.1',
        'Stripe payment',
      ]
    },
    {
      title: 'Admin Panel',
      imgSrc: 'assets/img/projects/admin.png',
      description: 'A admin panel for multiple web/mobile apps as a backend.',
      technology: [
        'Laravel 5.5',
        'php 7.1',
      ]
    }
  ];

  certificates: any = [
    {
      title: 'Javascript Algorithms and DS',
      imgSrc: 'assets/img/certificates/javascript.png'
    },
    {
      title: 'Makerfest 2018',
      imgSrc: 'assets/img/certificates/makerfest.png'
    },
    {
      title: 'Girlscript India Summit Volunteer',
      imgSrc: 'assets/img/certificates/girlscript.png'
    },
    {
      title: 'Way To Web Internship',
      imgSrc: 'assets/img/certificates/waytoweb.png'
    },
    {
      title: 'Invent-o-fest',
      imgSrc: 'assets/img/certificates/invent-o-fest.png'
    }
  ];

  disableSortingByKey(): number {
    return 0;
  }

  constructor() {
  }

  ngOnInit(): void {
    const currentData = new Date();
    const diff = (currentData.getTime() - this.careerStartDate.getTime()) / 1000;
    const diffYears = diff / (60 * 60 * 24);
    this.experience = Math.abs(Math.floor(diffYears / 365.25));
  }

  toggleSideBar(display: boolean) {
    this.displaySidebar = display;
  }

  toggleCard(display: any) {
    this.displayCard = display;
  }
}
