import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work-section',
  templateUrl: './my-work-section.component.html',
  styleUrls: ['./my-work-section.component.scss']
})
export class MyWorkSectionComponent implements OnInit {
  projects: Array<any> = [
    {
      name : 'Lieferheroes',
      programming : ['../../assets/img/icons/javascript.png', '../../assets/img/icons/htmlcss.png'],
      appImg : '../../assets/img/App-Showcase-lieferheroes.png',
      linkGit : 'https://github.com/RogoJuerg/Join',
      linkPage : 'https://juergen-rogozin.developerakademie.net/Lieferando/index.html',
      description : 'A clone of a popular food delivery service in germany written in vanilla JavaScript',
      language : 'javascript'
    },
    {
      name : 'JOIN',
      programming : ['../../assets/img/icons/javascript.png', '../../assets/img/icons/htmlcss.png'],
      appImg : '../../assets/img/App-Showcase-Join.png',
      linkGit : 'https://github.com/RogoJuerg/Join',
      linkPage : 'https://gruppe-256.developerakademie.net/index.html',
      description : 'A kan ban board to create and manage tickets. It is written in vanilla JavaScript. Worked in a group project',
      language : 'javascript'
    },
    {
      name : 'El Pollo Loco',
      programming : ['../../assets/img/icons/javascript.png','../../assets/img/icons/htmlcss.png'],
      appImg : '../../assets/img/App-Showcase-pollo-loco.png',
      linkGit : 'https://github.com/RogoJuerg/El-Pollo-Loco',
      linkPage : 'https://juergen-rogozin.developerakademie.net/El%20Pollo%20Loco/index.html',
      description : 'A very simple jump and run game to practise object oriented programming in javascript.',
      language : 'javascript'
    },
    {
      name : 'My Portfolio',
      programming : ['../../assets/img/icons/angular.png','../../assets/img/icons/typescript.png','../../assets/img/icons/htmlcss.png'],
      appImg : '../../assets/img/App-Showcase-portfolio.png',
      linkGit : 'https://github.com/RogoJuerg/El-Pollo-Loco',
      linkPage : 'https://juergen-rogozin.developerakademie.net/El%20Pollo%20Loco/index.html',
      description : 'This is my personal portfolio page. It is written in TypeScript using the Angular framework.',
      language : 'angular'
    }
  ];

  sortBy: string = 'all';

  constructor() { }

  ngOnInit(): void {
  }

  filterFunc() {
    var result: any = this.projects.filter(e => e.language == this.sortBy)
    if(this.sortBy == 'all') {
      return this.projects;
    }
    return result;
  }

  changeSort(filter: string) {
    this.sortBy = filter;
    console.log(this.sortBy);
  }

  scrolAnim() {
    
  }

}
