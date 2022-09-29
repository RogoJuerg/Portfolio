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
      name : 'ANGULARRR',
      programming : ['../../assets/img/icons/javascript.png', '../../assets/img/icons/htmlcss.png'],
      appImg : '../../assets/img/App-Showcase-Join.png',
      linkGit : 'https://github.com/RogoJuerg/Join',
      linkPage : 'https://gruppe-256.developerakademie.net/index.html',
      description : 'A kan ban board to create and manage tickets. It is written in vanilla JavaScript. Worked in a group project',
      language : 'angular'
    }
  ];

  sortBy: string = 'angular';

  constructor() { }

  ngOnInit(): void {
  }

  filterFunk() {
    var result: any = this.projects.filter(e => e.language == this.sortBy)
    console.log(result);
    if(this.sortBy == 'all') {
      return this.projects;
    }
    return result;
  }

  changeSort(filter: string) {
    this.sortBy = filter;
    console.log(this.sortBy);
  }

}
